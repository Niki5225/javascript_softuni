function create(words) {
    let result = document.getElementById('content');

    for (const word of words) {
        let divElement = document.createElement('div');
        let paragraphElement = document.createElement('p');
        paragraphElement.textContent = word;
        paragraphElement.style.display = 'none';
        divElement.appendChild(paragraphElement);
        divElement.addEventListener('click', revealContentHandler);
        result.appendChild(divElement);
    }

    function revealContentHandler(event){
        let childTarget = event.currentTarget.children[0];
        childTarget.style = 'block';
    }
}