window.addEventListener('load', solve);

function solve() {
    const modelElem = document.getElementById('model');
    const yearElem = document.getElementById('year');
    const descriptionElem = document.getElementById('description');
    const priceElem = document.getElementById('price');
    const addBtn = document.getElementById('add');
    const furnitureListElem = document.getElementById('furniture-list');
    const totalProfitElem = document.querySelector('.total-price');

    addBtn.addEventListener('click', function onAdd(e) {
        e.preventDefault();

        const model = modelElem.value;
        const year = yearElem.value;
        const description = descriptionElem.value;
        const price = priceElem.value;

        if (model != '' && year != '' && Number(year) > 0 && description != '' && price != '' && Number(price) > 0) {

            const tr = document.createElement('tr');
            tr.classList.add('info');

            const modelTd = document.createElement('td');
            const priceTd = document.createElement('td');
            const buttonsTd = document.createElement('td');
            const infoBtn = document.createElement('button');
            const buyBtn = document.createElement('button');

            modelTd.textContent = model;
            priceTd.textContent = Number(price).toFixed(2);

            infoBtn.classList.add('moreBtn');
            infoBtn.textContent = 'More Info';
            buyBtn.classList.add('buyBtn');
            buyBtn.textContent = 'Buy it';

            buttonsTd.appendChild(infoBtn);
            buttonsTd.appendChild(buyBtn);

            tr.appendChild(modelTd);
            tr.appendChild(priceTd);
            tr.appendChild(buttonsTd);

            const hiddenTr = document.createElement('tr');
            hiddenTr.classList.add('hide');

            const yearTd = document.createElement('td');
            const descriptionTd = document.createElement('td');
            yearTd.textContent = `Year: ${year}`;
            descriptionTd.textContent = `Description: ${description}`;
            descriptionTd.setAttribute('colspan', 3);

            hiddenTr.appendChild(yearTd);
            hiddenTr.appendChild(descriptionTd);

            furnitureListElem.appendChild(tr);
            furnitureListElem.appendChild(hiddenTr);

            infoBtn.addEventListener('click', function onInfo(e) {
                if (infoBtn.textContent == 'More Info') {
                    infoBtn.textContent = 'Less Info';
                    hiddenTr.style.display = 'contents';
                } else {
                    infoBtn.textContent = 'More Info';
                    hiddenTr.style.display = 'none';
                }
            });
            buyBtn.addEventListener('click', function onBuy(e) {
                let currTotal = Number(totalProfitElem.textContent);
                totalProfitElem.textContent = (currTotal + Number(priceTd.textContent)).toFixed(2);
                tr.remove();
            });

            modelElem.value = '';
            yearElem.value = '';
            descriptionElem.value = '';
            priceElem.value = '';
            addBtn.value = '';
            furnitureListElem.value = '';
        }
    });
}
