function solve() {
    let movieNameElem = document.querySelector('#container :nth-child(1)');
    let moiveHallElem = document.querySelector('#container :nth-child(2)');
    let moviePriceElem = document.querySelector('#container :nth-child(3)');
    let onScreenBtn = document.querySelector('#container button');

    let moviesOnScreenUlElem = document.querySelector('#movies ul');
    let archivedMoviesUlElem = document.querySelector('#archive ul');
    let clearArchiveBtn = document.querySelector('#archive button');

    function isValidMovie(name, hall, price) {
        if (name != '' && hall != '' && price != '' && isNaN(Number(price)) == false) {
            return true;
        }
        return false;
    }
    function addHandler(e) {
        e.preventDefault();
        if (isValidMovie(movieNameElem.value, moiveHallElem.value, moviePriceElem.value)) {
            let li = document.createElement('li');

            let spanName = document.createElement('span');
            spanName.textContent = movieNameElem.value;

            let strongHall = document.createElement('strong');
            strongHall.textContent = `Hall: ${moiveHallElem.value}`;

            let divPrice = document.createElement('div');
            let strongPrice = document.createElement('strong');
            strongPrice.textContent = Number(moviePriceElem.value).toFixed(2);

            let inputPlaceholder = document.createElement('input');
            inputPlaceholder.placeholder = 'Tickets Sold';

            let button = document.createElement('button');
            button.textContent = 'Archive';
            button.addEventListener('click', archiveHandler);

            divPrice.appendChild(strongPrice);
            divPrice.appendChild(inputPlaceholder);
            divPrice.appendChild(button);

            li.appendChild(spanName);
            li.appendChild(strongHall);
            li.appendChild(divPrice);

            moviesOnScreenUlElem.appendChild(li);
            movieNameElem.value = '';
            moiveHallElem.value = '';
            moviePriceElem.value = '';
        }

    }
    function archiveHandler(e) {
        let liElem = e.target.parentElement.parentElement;
        let divElem = e.target.parentElement;

        let movieNameElem = liElem.querySelector('span');
        let priceElem = divElem.querySelector('strong');
        let inputElem = divElem.querySelector('input');

        if (inputElem.value != '' && isNaN(Number(inputElem.value)) == false) {
            let li = document.createElement('li');

            let spanName = document.createElement('span');
            spanName.textContent = movieNameElem.textContent;

            let strongTotal = document.createElement('strong');
            strongTotal.textContent = `Total amount: ${(Number(priceElem.textContent) * Number(inputElem.value)).toFixed(2)}`;

            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', deleteHandler);

            li.appendChild(spanName);
            li.appendChild(strongTotal);
            li.appendChild(button);

            archivedMoviesUlElem.appendChild(li);
            inputElem.value = '';
        }

    }
    function deleteHandler(e) {
        archivedMoviesUlElem.removeChild(e.target.parentElement);
    }
    function clearHandler() {
        let ul = document.querySelector('#archive ul');

        Array.from(ul.children).map(e => ul.removeChild(e));
    }

    clearArchiveBtn.addEventListener('click', clearHandler);
    onScreenBtn.addEventListener('click', addHandler);
}