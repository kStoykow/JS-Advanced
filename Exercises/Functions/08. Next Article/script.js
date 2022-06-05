function getArticleGenerator(articles) {
    let i = 0;
    let contentElem = document.getElementById('content');

    function articleCreator() {
        if (articles[i] != undefined) {

            let articleElem = document.createElement('article');
            articleElem.textContent = articles[i];
            i++;
            contentElem.appendChild(articleElem);
        }
    }

    return articleCreator;
}