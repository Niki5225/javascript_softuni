const baseUrl = `http://localhost:3030/jsonstore/tasks`;

const loadMealsBtn = document.getElementById('load-meals');
const listOfMeals = document.getElementById('list');
const foodNameInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');
const addMealBtn = document.getElementById('add-meal');
const editMealBtn = document.getElementById('edit-meal');
const form = document.querySelector('#form form');

loadMealsBtn.addEventListener('click', loadAllMeals);

addMealBtn.addEventListener('click', (e) => {

    const newMeal = {
        food: foodNameInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMeal)
    }).then(loadAllMeals);
    clearForm();
});

editMealBtn.addEventListener('click', () => {
    const mealId = form.dataset.meal;

    const editedMeal = {
        _id: mealId,
        food: foodNameInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
    };

    fetch(`${baseUrl}/${mealId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedMeal)
    }).then(loadAllMeals);

    clearForm();

    addMealBtn.removeAttribute('disabled');
    editMealBtn.setAttribute('disabled', 'disabled');
})

function renderAllMeals(meals) {
    listOfMeals.innerHTML = '';

    meals.map(meal => renderMeal(meal)).forEach(m => listOfMeals.appendChild(m));
}

function renderMeal(meal) {
    const divMealContainer = document.createElement('div');
    const h2FoodName = document.createElement('h2');
    const h3Time = document.createElement('h3');
    const h3Calories = document.createElement('h3');
    const divButtonsContainer = document.createElement('div');
    const changeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    divMealContainer.className = 'meal';
    divButtonsContainer.className = 'meal-buttons';
    changeBtn.className = 'change-meal';
    deleteBtn.className = 'delete-meal';

    changeBtn.addEventListener('click', (e) => {
        foodNameInput.value = h2FoodName.textContent;
        timeInput.value = h3Time.textContent;
        caloriesInput.value = h3Calories.textContent;

        divMealContainer.remove();

        editMealBtn.removeAttribute('disabled');
        addMealBtn.setAttribute('disabled', 'disabled');

        form.dataset.meal = meal._id;
    });

    deleteBtn.addEventListener('click', (e) => {
        fetch(`${baseUrl}/${meal._id}`, {
            method: 'DELETE'
        }).then(loadAllMeals);

    });

    h2FoodName.textContent = meal.food;
    h3Time.textContent = meal.time;
    h3Calories.textContent = meal.calories;
    changeBtn.textContent = 'Change';
    deleteBtn.textContent = 'Delete';

    divMealContainer.appendChild(h2FoodName);
    divMealContainer.appendChild(h3Time);
    divMealContainer.appendChild(h3Calories);
    divButtonsContainer.appendChild(changeBtn);
    divButtonsContainer.appendChild(deleteBtn);
    divMealContainer.appendChild(divButtonsContainer);

    return divMealContainer;
}

function clearForm() {
    foodNameInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';
}

function loadAllMeals() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(result => renderAllMeals(Object.values(result)));
}