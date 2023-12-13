window.addEventListener("load", solve);

function solve() {
    const playerNameElement = document.getElementById('player');
    const scoreElement = document.getElementById('score');
    const roundElement = document.getElementById('round');
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementsByClassName('clear')[0];
    const sureList = document.getElementById('sure-list');
    const scoreboard = document.getElementById('scoreboard-list');

    addBtn.addEventListener('click', (e) => {
        if (!playerNameElement.textContent || !scoreElement.textContent || !roundElement.textContent) {
            return;
        }
        e.preventDefault();
        const liElement = document.createElement('li');
        const articleContainer = document.createElement('article');
        const nameContainer = document.createElement('p');
        const scoreContainer = document.createElement('p');
        const roundContainer = document.createElement('p');
        const editBtn = document.createElement('button');
        const okBtn = document.createElement('button');

        nameContainer.textContent = playerNameElement.value;
        scoreContainer.textContent = `Score: ${scoreElement.value}`;
        roundContainer.textContent = `Round: ${roundElement.value}`;

        editBtn.textContent = 'edit';
        okBtn.textContent = 'ok';

        articleContainer.appendChild(nameContainer);
        articleContainer.appendChild(scoreContainer);
        articleContainer.appendChild(roundContainer);

        liElement.appendChild(articleContainer);
        liElement.appendChild(editBtn);
        liElement.appendChild(okBtn);

        liElement.className = 'dart-item';
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        okBtn.classList.add('btn');
        okBtn.classList.add('ok');

        sureList.appendChild(liElement);
        addBtn.setAttribute('disabled', true);

        clearForm();

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const paragraphElements = sureList.querySelectorAll('p');
            const [name, score, round] = Array.from(paragraphElements);

            playerNameElement.value = name.textContent;
            scoreElement.value = score.textContent.split(': ')[1];
            roundElement.value = round.textContent.split(': ')[1];

            addBtn.removeAttribute('disabled');

            sureList.removeChild(sureList.firstChild);
        });

        okBtn.addEventListener('click', () => {
            editBtn.remove();
            okBtn.remove();
            addBtn.removeAttribute('disabled');

            scoreboard.appendChild(liElement);

        });

        clearBtn.addEventListener('click', () => {
            window.location.reload();
        })
    });

    const clearForm = () => {
        playerNameElement.value = '';
        scoreElement.value = '';
        roundElement.value = '';
    }
}
  