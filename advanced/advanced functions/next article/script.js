function getArticleGenerator(articles) {
    return function (){
        if (articles.length === 0){
            return;
        }
        const article = articles.shift();
        let div = document.getElementById('content');
        let articleElement = document.createElement('article');
        let p = document.createElement("p");

        p.textContent = article;
        articleElement.appendChild(p);

        div.appendChild(articleElement);
    }
}
