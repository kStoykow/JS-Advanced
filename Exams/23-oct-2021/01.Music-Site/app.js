window.addEventListener('load', solve);

function solve() {
    const genreElem = document.getElementById('genre');
    const nameElem = document.getElementById('name');
    const authorElem = document.getElementById('author');
    const dateElem = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const hitsElem = document.querySelector('.all-hits-container');
    const totalLikesElem = document.querySelector('.likes > p');
    const savedSongsElem = document.querySelector('.saved-container');

    addBtn.addEventListener('click', function onAdd(e) {
        e.preventDefault();
        if (genreElem.value != '' && nameElem.value != '' && authorElem.value != '' && dateElem.value != '') {
            const div = document.createElement('div');
            div.classList.add('hits-info');

            const img = document.createElement('img');
            const h2genre = document.createElement('h2');
            const h2name = document.createElement('h2');
            const h2author = document.createElement('h2');
            const h3date = document.createElement('h3');

            const saveBtn = document.createElement('button');
            const likeBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            img.setAttribute('src', './static/img/img.png');
            h2genre.textContent = `Genre: ${genreElem.value}`;
            h2name.textContent = `Name: ${nameElem.value}`;
            h2author.textContent = `Author: ${authorElem.value}`;
            h3date.textContent = `Date: ${dateElem.value}`;

            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';

            likeBtn.addEventListener('click', function onLike(e) {
                let currLikes = Number(totalLikesElem.textContent.split(': ')[1]);
                currLikes += 1;
                totalLikesElem.textContent = `Total Likes: ${currLikes}`;
                e.currentTarget.disabled = true;
            });
            saveBtn.addEventListener('click', function onSave(e) {
                let currSong = e.target.parentElement;
                currSong.removeChild(saveBtn);
                currSong.removeChild(likeBtn);
                savedSongsElem.appendChild(currSong);
            });
            deleteBtn.addEventListener('click', function onDelete(e) {
                e.target.parentElement.remove();
            });

            div.appendChild(img);
            div.appendChild(h2genre);
            div.appendChild(h2name);
            div.appendChild(h2author);
            div.appendChild(h3date);
            div.appendChild(saveBtn);
            div.appendChild(likeBtn);
            div.appendChild(deleteBtn);

            hitsElem.appendChild(div);
            genreElem.value = '';
            nameElem.value = '';
            authorElem.value = '';
            dateElem.value = '';
        }
    });
}