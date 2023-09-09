function toggle() {
    let actionButton = document.getElementsByClassName('button')[0];
    let extraContent = document.getElementById('extra');

    if (extraContent.style.display === 'inline'){
        actionButton.textContent = 'More';
        extraContent.style.display = 'none';
    } else {
        actionButton.textContent = 'Less';
        extraContent.style.display = 'inline';
    }
}