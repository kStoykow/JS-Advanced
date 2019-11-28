function createArticle() {
	let heading = document.getElementById('createTitle');
	let text = document.getElementById('createContent');
	let section = document.getElementById('articles');

	if (heading == null || text == null || section == null) {
		throw new Error('Missing element.');
	}

	let article = document.createElement('article');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');

	if (heading.value !== '' && text.value !== '') {
		h3.innerHTML = heading.value;
		p.innerHTML = text.value;

		section.appendChild(article);

		article.appendChild(h3);
		article.appendChild(p);
	}

	heading.value = '';
	text.value = '';
}

document.addEventListener('DOMContentLoaded', (x) => {
	document
		.getElementById('button')
		.addEventListener('click', createArticle)
})