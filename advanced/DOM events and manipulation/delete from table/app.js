function deleteByEmail() {
    let inputText = document.getElementsByTagName('input')[0].value;
    let tableRows = document.getElementsByTagName('tr');
    let result = document.getElementById('result');

    for (let row of tableRows){
        if (row.children[1].textContent === inputText){
            row.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }
}