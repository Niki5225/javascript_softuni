const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
const loadBooks = document.getElementById('loadBooks');
const tableBody = document.querySelector('tbody');
const form = document.getElementById('form');
const formHeader = document.getElementById('header');
const submitBtn = document.getElementById('submitBtn');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
function getAllBooks() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(result => createTrBooks(Object.values(result)));
}

function createTrBooks(books) {
    tableBody.innerHTML = '';
    for (const book of books) {
        tableBody.appendChild(createTrBook(book.title, book.author, book._id))
    }
}

function createTrBook(title, author, id) {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdButtons = document.createElement('td');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    tdTitle.textContent = title;
    tdAuthor.textContent = author;
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', (e) => {
        const data = {
            author: author,
            title: title
        }
        console.log(id)
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(getAllBooks)
            .catch(err => console.log(err));
    });

    editBtn.addEventListener('click', () => {
        formHeader.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
        titleInput.value = title;
        authorInput.value = author;

        const data = {
            author: author,
            title: title
        };

        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(getAllBooks)
            .catch(err => console.log(err));

    });

    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(deleteBtn);

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdButtons);


    return tr;
}


loadBooks.addEventListener('click', getAllBooks);
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let author = formData.get('author');
    let title = formData.get('title');

    const data = {
        author,
        title
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(getAllBooks)
        .then(clearForm)
        .catch(err => console.log(err));
})

function clearForm(){
    authorInput.value = '';
    titleInput.value = '';
}