function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableBodyRows = document.querySelectorAll('tbody tr');
      let inputValueLower = document.getElementById('searchField').value.toLowerCase();

      for (const row of tableBodyRows){
         let rowLower = row.textContent.toLowerCase();
         if (rowLower.includes(inputValueLower)){
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
   }
}