function sortAnArrayBy2Criteria(array){
    let srtArr = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(srtArr.join('\n'));
}
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)