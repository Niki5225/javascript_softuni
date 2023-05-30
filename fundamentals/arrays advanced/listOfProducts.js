function lstProducts(lst){
    let sortedLst = lst.sort();

    for (let i = 0; i < sortedLst.length; i++){
        console.log(`${i + 1}.${sortedLst[i]}`);
    }
}
lstProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);