function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const buttonSubmit = document.getElementById('submit');
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');


    buttonSubmit.addEventListener('click', () => {
        fetch(`${baseUrl}/${stopId}`)
            .then(res => res.json())
            .then(result => someFunc(Object.values(result)))
            .catch(err => stopName.textContent = 'Error');
    });

    function createLiElement(busId, time) {
        const li = document.createElement('li');
        li.textContent = `Bus ${busId} arrives in ${time} minutes`;
        return li;
    }

    function someFunc(values) {
        stopName.textContent = values[1];
        for (const key in values[0]) {
            const resLi = createLiElement(key, values[0][key]);
            buses.appendChild(resLi);
        }
    }
}
