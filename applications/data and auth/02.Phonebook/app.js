function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadBtn = document.getElementById('btnLoad');
    const phonebook = document.getElementById('phonebook');
    const createBtn = document.getElementById('btnCreate');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    loadBtn.addEventListener('click', loadAllPhones);

    function createPhones(arr) {
        phonebook.innerHTML = '';
        for (const arrElement of arr) {
            phonebook.appendChild(createPhone(arrElement.person, arrElement.phone, arrElement._id))
        }
    }

    function createPhone(personName, phone, id) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';


        deleteBtn.addEventListener('click', () => {
            fetch(`${baseUrl}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(loadAllPhones)
                .catch(err => console.log(err));
        })

        p.textContent = `${personName}: ${phone}`;
        li.appendChild(p);
        li.appendChild(deleteBtn);
        return li;
    }

    createBtn.addEventListener('click', () => {
        console.log(phoneInput)
        const data = {
            person: personInput.value,
            phone: phoneInput.value
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(loadAllPhones)
            .then(clearForm)
            .catch(err => console.log(err));

    });

    function loadAllPhones() {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => createPhones(Object.values(result)));
    }

    function clearForm() {
        personInput.value = '';
        phoneInput.value = '';
    }
}

attachEvents();