function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', hoverHandler);
    gradient.addEventListener('mouseout', cleanHandler);
    let result = document.getElementById('result');

    function hoverHandler(e){
        let offsetX = e.offsetX;
        let element = e.target;
        let clientWidth = element.clientWidth;

        let percent = Math.trunc(((offsetX / clientWidth)) * 100);
        result.textContent = `${percent}%`;
    }

    function cleanHandler(e){
        result.textContent = '';
    }
}