function addItem() {
    let list = document.getElementById('items');
    let text = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');

    newLi.textContent = text;
    list.appendChild(newLi);

    document.getElementById('newItemText').value = '';
}