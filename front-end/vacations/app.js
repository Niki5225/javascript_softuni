const baseUrl = `http://localhost:3030/jsonstore/tasks`;

const loadVacationsBtn = document.getElementById('load-vacations');
const vacationList = document.getElementById('list');
const addVacationBtn = document.getElementById('add-vacation');
const editVacationBtn = document.getElementById('edit-vacation');
const nameInputElement = document.getElementById('name');
const numberOfDaysInputElement = document.getElementById('num-days');
const dateInputElement = document.getElementById('from-date');
const form = document.querySelector('#form form');


loadVacationsBtn.addEventListener('click', loadAllVacations);

addVacationBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newVacation = {
        name: nameInputElement.value,
        days: numberOfDaysInputElement.value,
        date: dateInputElement.value,
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVacation)
    })
        .then(loadAllVacations);
    clearForm();
});

editVacationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const vacationId = form.dataset.vacation;

    const vacationData = {
        _id: vacationId,
        name: nameInputElement.value,
        days: numberOfDaysInputElement.value,
        date: dateInputElement.value,
    }

    fetch(`${baseUrl}/${vacationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vacationData)
    })
        .then(loadAllVacations)
        .then(() => {
            addVacationBtn.removeAttribute('disabled');
            editVacationBtn.setAttribute('disabled', 'disabled');

            delete form.dataset.vacation;
            clearForm();
        })
});

function renderVacations(vacations) {
    vacationList.innerHTML = '';

    vacations
        .map(vacation => renderVacation(vacation))
        .forEach(vacationElement => vacationList.appendChild(vacationElement));
}

function renderVacation(vacation) {
    const containerElement = document.createElement('div');
    containerElement.className = 'container';
    const nameElement = document.createElement('h2');
    const daysElement = document.createElement('h3');
    const dateElement = document.createElement('h3');
    const changeBtn = document.createElement('button');
    const doneBtn = document.createElement('button');

    nameElement.textContent = vacation.name;
    daysElement.textContent = vacation.days;
    dateElement.textContent = vacation.date;

    changeBtn.textContent = 'Change';
    changeBtn.className = 'change-btn';
    doneBtn.textContent = 'Done';
    doneBtn.className = 'done-btn';

    changeBtn.addEventListener('click', () => {
        nameInputElement.value = vacation.name;
        numberOfDaysInputElement.value = vacation.days;
        dateInputElement.value = vacation.date;

        addVacationBtn.setAttribute('disabled', 'disabled');
        editVacationBtn.removeAttribute('disabled');

        containerElement.remove();

        form.dataset.vacation = vacation._id
    });

    doneBtn.addEventListener('click', () => {
       fetch(`${baseUrl}/${vacation._id}`, {
           method: 'DELETE'
       }).then(loadAllVacations)
    });

    containerElement.appendChild(nameElement);
    containerElement.appendChild(dateElement);
    containerElement.appendChild(daysElement);
    containerElement.appendChild(changeBtn);
    containerElement.appendChild(doneBtn);

    return containerElement;
}

function clearForm() {
    nameInputElement.value = '';
    numberOfDaysInputElement.value = '';
    dateInputElement.value = '';
}

function loadAllVacations() {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
            renderVacations(Object.values(result));
        });
}