window.addEventListener("load", solve);

function solve() {
    const studentNameElement = document.getElementById('student');
    const universityElement = document.getElementById('university');
    const scoreElement = document.getElementById('score');
    const nextBtn = document.getElementById('next-btn');
    const previewList = document.getElementById('preview-list');
    const candidatesList = document.getElementById('candidates-list');

    nextBtn.addEventListener('click', (e) => {
        if (!studentNameElement.value || !universityElement.value || !scoreElement.value){
            return;
        }
        e.preventDefault();

        const liContainer = document.createElement('li');
        const articleContainer = document.createElement('article');
        const h4Container = document.createElement('h4');
        const universityContainer = document.createElement('p');
        const scoreContainer = document.createElement('p');
        const editBtn = document.createElement('button');
        const applyBtn = document.createElement('button');

        liContainer.className = 'application';
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');
        applyBtn.classList.add('action-btn');
        applyBtn.classList.add('apply');

        h4Container.textContent = studentNameElement.value;
        universityContainer.textContent = `University: ${universityElement.value}`;
        scoreContainer.textContent = `Score: ${scoreElement.value}`;
        editBtn.textContent = 'edit';
        applyBtn.textContent = 'apply';

        articleContainer.appendChild(h4Container);
        articleContainer.appendChild(universityContainer);
        articleContainer.appendChild(scoreContainer);

        liContainer.appendChild(articleContainer);
        liContainer.appendChild(editBtn);
        liContainer.appendChild(applyBtn);

        previewList.appendChild(liContainer);

        nextBtn.setAttribute('disabled', true);

        clearForm();

        editBtn.addEventListener('click', (e) => {
            e.preventDefault()
            const name = previewList.querySelector('h4');
            const [pUni, pScore] = previewList.querySelectorAll('p');

            studentNameElement.value = name.textContent;
            universityElement.value = pUni.textContent.split(': ')[1];
            scoreElement.value = pScore.textContent.split(': ')[1];

            nextBtn.removeAttribute('disabled');

            previewList.removeChild(previewList.firstChild)
        });

        applyBtn.addEventListener('click', (e) => {
            editBtn.remove();
            applyBtn.remove();
            nextBtn.removeAttribute('disabled');


            candidatesList.appendChild(liContainer);
            previewList.removeChild(previewList.firstChild);
        });

    });
    const clearForm = () => {
        studentNameElement.value = '';
        universityElement.value = '';
        scoreElement.value = '';
    }
}
  