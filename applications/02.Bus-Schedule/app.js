function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const info = document.getElementById('info');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let stopId = 'depot';
    let currentStop = '';

    function depart() {
        fetch(`${baseUrl}/${stopId}/`)
            .then(res => res.json())
            .then(result => someFunc(Object.values(result)))
            .catch(err => errorFunc(err));
    }

    function arrive() {
        info.textContent = `Arrive at ${currentStop}`;
        arriveBtn.setAttribute('disabled', 'disabled')
        departBtn.removeAttribute('disabled');
    }

    function someFunc(values) {
        currentStop = values[0];
        info.textContent = `Next stop ${currentStop}`;
        stopId = values[1];
        departBtn.setAttribute('disabled', 'disabled');
        arriveBtn.removeAttribute('disabled');
    }

    function errorFunc(err) {
        arriveBtn.setAttribute('disabled', 'disabled');
        departBtn.setAttribute('disabled', 'disabled');
        info.textContent = err;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();