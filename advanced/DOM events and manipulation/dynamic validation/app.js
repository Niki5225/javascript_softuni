function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm

    let inputEmail = document.querySelector('#email');

    inputEmail.addEventListener('change', emailValidationHandler);

    function emailValidationHandler(event){
        if (pattern.test(event.target.value)){
            event.target.className = '';
        } else {
            event.target.className = 'error';
        }
    }

}