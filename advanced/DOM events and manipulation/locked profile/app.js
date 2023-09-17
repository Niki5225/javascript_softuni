function lockedProfile() {
    const SHOW_MORE = 'Show more';
    const SHOW_LESS = 'Hide it'
    let arrButtons = Array.from(document.querySelectorAll('div button'));

    arrButtons.forEach(btn => {
        btn.addEventListener('click', revealInfo);
    })

    function revealInfo(event){
        let children = Array.from(event.target.parentElement.children);
        let isLocked = children[2].checked;
        if (isLocked){
            return;
        }
        let hiddenElements = event.target.previousElementSibling;

        if (event.target.textContent === SHOW_MORE){
            hiddenElements.style.display = 'inline';
            event.target.textContent = SHOW_LESS;
        } else {
            hiddenElements.style.display = '';
            event.target.textContent = SHOW_MORE;
        }
    }
}