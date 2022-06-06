function getArticleGenerator(articles) {
    const contentElem = document.getElementById('content');

    function articleCreator() {
        let article = articles.shift();

        if (article != undefined) {
            const articleElem = document.createElement('article');
            articleElem.textContent = article;
            contentElem.appendChild(articleElem);
        }
    }

    return articleCreator;
}