const baseUrl = `http://localhost:3030/jsonstore/tasks`;


const loadHistoryBtn = document.getElementById('load-history');
const weathersList = document.getElementById('list');
const addWeatherBtn = document.getElementById('add-weather');
const locationInputElement = document.getElementById('location');
const temperatureInputElement = document.getElementById('temperature');
const dateInputElement = document.getElementById('date');
const editWeatherBtn = document.getElementById('edit-weather');
const form = document.querySelector('#form form');

loadHistoryBtn.addEventListener('click', loadAllWeathers);

addWeatherBtn.addEventListener('click', (e) => {
    e.preventDefault();


    const newWeather = {
        location: locationInputElement.value,
        temperature: temperatureInputElement.value,
        date: dateInputElement.value,
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWeather),
    }).then(loadAllWeathers);

    clearForm();
});

editWeatherBtn.addEventListener('click', (e) => {
    const weatherId = form.dataset.weather;

    const editedWeather = {
        _id: weatherId,
        location: locationInputElement.value,
        temperature: temperatureInputElement.value,
        date: dateInputElement.value,
    };

    fetch(`${baseUrl}/${weatherId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedWeather)
    }).then(loadAllWeathers);

    clearForm();

    editWeatherBtn.setAttribute('disabled', 'disabled');
    addWeatherBtn.removeAttribute('disabled');

})

function renderWeathers(weathers) {
    weathersList.innerHTML = '';
    weathers.map(weather => renderWeather(weather))
        .forEach(weatherContainer => weathersList.appendChild(weatherContainer));
}

function renderWeather(weather) {
    const container = document.createElement('div');
    const h2Location = document.createElement('h2');
    const h3Temperature = document.createElement('h3');
    const h3Date = document.createElement('h3');
    const buttonsContainer = document.createElement('div');
    const changeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    container.className = 'container';
    h3Temperature.id = 'celsius';
    buttonsContainer.id = 'buttons-container';
    changeBtn.className = 'change-btn';
    deleteBtn.className = 'delete-btn';

    h2Location.textContent = weather.location;
    h3Temperature.textContent = weather.temperature;
    h3Date.textContent = weather.date;
    changeBtn.textContent = 'Change';
    deleteBtn.textContent = 'Delete';

    changeBtn.addEventListener('click', (e) => {
        temperatureInputElement.value = h3Temperature.textContent;
        dateInputElement.value = h3Date.textContent;
        locationInputElement.value = h2Location.textContent;

        container.remove();

        addWeatherBtn.setAttribute('disabled', 'disabled');
        editWeatherBtn.removeAttribute('disabled');

        form.dataset.weather = weather._id;
    });

    deleteBtn.addEventListener('click', (e) => {
        fetch(`${baseUrl}/${weather._id}`, {
            method: 'DELETE',
        }).then(loadAllWeathers);
    });

    container.appendChild(h2Location);
    container.appendChild(h3Date);
    container.appendChild(h3Temperature);
    buttonsContainer.appendChild(changeBtn);
    buttonsContainer.appendChild(deleteBtn);
    container.appendChild(buttonsContainer);

    return container;
}

function clearForm() {
    locationInputElement.value = '';
    temperatureInputElement.value = '';
    dateInputElement.value = '';
}

function loadAllWeathers() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(result => renderWeathers(Object.values(result)));
}