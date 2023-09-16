function addItem() {
    function deleteHandler(event) {
        let element = event.target.parentElement;
        element.remove();
    }


    let list = document.getElementById('items');
    let text = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');
    let deleteLink = document.createElement('a');

    newLi.textContent = text;
    deleteLink.textContent = 'Delete';
    deleteLink.addEventListener('click', deleteHandler);
    list.appendChild(newLi);
    newLi.appendChild(deleteLink);

    document.getElementById('newItemText').value = '';


}