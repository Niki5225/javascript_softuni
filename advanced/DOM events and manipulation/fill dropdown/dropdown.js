function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    let menu = document.getElementById('menu');

    option.textContent = inputText;
    option.value = inputValue;
    menu.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}