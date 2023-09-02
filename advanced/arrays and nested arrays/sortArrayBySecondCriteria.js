function sortArrayBySecondCriteria(array){
    let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    sorted.forEach(item => console.log(item));
}

sortArrayBySecondCriteria(['alpha', 'beta', 'gamma']);