window.addEventListener("load", solve);

function solve() {
    const expenseInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');
    const deleteBtn = document.querySelector('.btn.delete');

    addBtn.addEventListener('click', () => {

        if (!expenseInput.value || !amountInput.value || !dateInput.value) {
            return;
        }

        const liContainer = document.createElement('li');
        const articleContainer = document.createElement('article');
        const pTypeExpense = document.createElement('p');
        const pAmount = document.createElement('p');
        const pDate = document.createElement('p');
        const divContainer = document.createElement('div');
        const editBtn = document.createElement('button');
        const okBtn = document.createElement('button');

        liContainer.className = 'expense-item';
        divContainer.className = 'buttons';
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        okBtn.classList.add('btn');
        okBtn.classList.add('ok');

        pTypeExpense.textContent = `Type: ${expenseInput.value}`;
        pAmount.textContent = `Amount: ${amountInput.value}$`;
        pDate.textContent = `Date: ${dateInput.value}`;
        editBtn.textContent = 'edit';
        okBtn.textContent = 'ok';

        editBtn.addEventListener('click', () => {
            expenseInput.value = pTypeExpense.textContent.split(': ')[1];
            amountInput.value = parseInt(pAmount.textContent.split(': ')[1]);
            dateInput.value = pDate.textContent.split(': ')[1];

            previewList.removeChild(previewList.firstChild);
            addBtn.removeAttribute('disabled');
        });

        okBtn.addEventListener('click', () => {
            divContainer.remove();
            previewList.removeChild(previewList.firstChild);
            expensesList.appendChild(liContainer);
            addBtn.removeAttribute('disabled');
        });

        articleContainer.appendChild(pTypeExpense);
        articleContainer.appendChild(pAmount);
        articleContainer.appendChild(pDate);
        liContainer.appendChild(articleContainer);
        divContainer.appendChild(editBtn);
        divContainer.appendChild(okBtn);
        liContainer.appendChild(divContainer);

        previewList.appendChild(liContainer);
        clearForm();

        addBtn.setAttribute('disabled', 'disabled');
    });

    deleteBtn.addEventListener('click', () => {
        window.location.reload();
    })

    function clearForm() {
        expenseInput.value = '';
        amountInput.value = '';
        dateInput.value = '';
    }
}