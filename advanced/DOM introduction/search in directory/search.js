function search() {
   let lis = document.getElementsByTagName('li');
   let searchText = document.getElementById('searchText').value;
   let matches = 0;
   let result = document.getElementById('result');

   for (const li of lis){
       li.style.textDecoration = 'none';
       li.style.fontWeight = 'normal';
   }

    for (const element of lis) {
        if (element.textContent.includes(searchText)){
            matches++;
            element.style.textDecoration = 'underline';
            element.style.fontWeight = 'bold';
        }
    }

    if (matches === 1){
        result.textContent = '1 match found';
    } else {
        result.textContent = `${matches} matches found`;
    }
}
