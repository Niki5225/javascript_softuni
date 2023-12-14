window.addEventListener("load", solve);

// TODO: is the publish button disabled?

function solve() {
    const titleElement = document.getElementById('task-title');
    const categoryElement = document.getElementById('task-category');
    const contentElement = document.getElementById('task-content');
    const publishBtn = document.getElementById('publish-btn');
    const reviewList = document.getElementById('review-list');
    const publishedList = document.getElementById('published-list');

    publishBtn.addEventListener('click', () => {

        if (!titleElement.value || !categoryElement.value || !contentElement.value) {
            return;
        }

        const li = document.createElement('li');
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        const pCategory = document.createElement('p');
        const pContent = document.createElement('p');
        const editBtn = document.createElement('button');
        const postBtn = document.createElement('button');

        li.className = 'rpost';
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');
        postBtn.classList.add('action-btn');
        postBtn.classList.add('post');

        h4.textContent = titleElement.value;
        pCategory.textContent = categoryElement.value;
        pContent.textContent = contentElement.value;
        editBtn.textContent = 'edit';
        postBtn.textContent = 'post';

        article.appendChild(h4);
        article.appendChild(pCategory);
        article.appendChild(pContent);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(postBtn);
        reviewList.appendChild(li);

        clearForm();

        editBtn.addEventListener('click', () => {
            const title = reviewList.querySelector('h4');
            const [category, content] =
                Array.from(reviewList.querySelectorAll('p'));

            titleElement.value = title.textContent;
            categoryElement.value = category.textContent;
            contentElement.value = content.textContent;

            reviewList.removeChild(reviewList.firstChild);
        });

        postBtn.addEventListener('click', () => {
            editBtn.remove();
            postBtn.remove();

            publishedList.appendChild(li);
            reviewList.removeChild(li);

        })
    });

    const clearForm = () => {
        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';
    }
}