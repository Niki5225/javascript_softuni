function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function (event) {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24 * 60 * 60;
    })

    hoursBtn.addEventListener('click', function (event) {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    })

    minutesBtn.addEventListener('click', function (event) {
        let minutes = minutesInput.value;
        daysInput.value = minutes / 60 / 24;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    })

    secondsBtn.addEventListener('click', function (event) {
        let seconds = secondsInput.value;
        daysInput.value = seconds / 60 / 60 / 24;
        hoursInput.value = seconds / 60 / 60;
        minutesInput.value = seconds / 60;
    })
}