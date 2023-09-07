function sumTable() {
    let tds = document.getElementsByTagName('td');
    let index = 0;
    let sum = 0;
    for (let td of tds){
        index++
        if (index % 2 === 0){
            sum += Number(td.textContent);
        }
    }
    let sumElement = document.getElementById('sum');
    sumElement.textContent = String(sum);
}