const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
const form = document.getElementById('form');
const tableBody = document.querySelector('tbody');


function main() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(res => createTrStudents(Object.values(res)))
        .catch(err => console.log(err));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    const data = {
        firstName,
        lastName,
        facultyNumber,
        grade
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(main)
        .catch(err => console.log(err))

});

function createTrStudents(arrStudents) {
    tableBody.innerHTML = '';
    arrStudents.forEach(x => tableBody.appendChild(createTrStudent(x)));
}

function createTrStudent(student) {
    const tr = document.createElement('tr');
    const firstName = document.createElement('td');
    const lastName = document.createElement('td');
    const facultyNumber = document.createElement('td');
    const grade = document.createElement('td');

    firstName.textContent = student.firstName;
    lastName.textContent = student.lastName;
    facultyNumber.textContent = student.facultyNumber;
    grade.textContent = student.grade;

    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(facultyNumber);
    tr.appendChild(grade);
    return tr;
}

main();