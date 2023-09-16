function focused() {
    let elements = document.getElementsByTagName('input');

    for (const element of elements) {
        element.addEventListener('focus', focusHandler);
        element.addEventListener('blur', blurHandler);
    }

    function focusHandler(e){
        e.target.parentElement.className = 'focused';
    }

    function blurHandler(e){
        e.target.parentElement.className = '';
    }
}