window.addEventListener('load', solve);

function solve() {
    const productTypeElem = document.getElementById('type-product');
    const descriptionElem = document.getElementById('description');
    const nameElem = document.getElementById('client-name');
    const phoneElem = document.getElementById('client-phone');
    const sendBtn = document.querySelector('#right button');
    const recievedOrdersElem = document.getElementById('received-orders');
    const completedOrdersElem = document.getElementById('completed-orders');
    const clearBtn = document.querySelector('.clear-btn');

    sendBtn.addEventListener('click', function sendHandler(e) {
        e.preventDefault();

        let product = productTypeElem.value;
        let desc = descriptionElem.value;
        let name = nameElem.value;
        let phone = phoneElem.value;

        if (product != '' && desc != '' && name != '' && phone != '') {
            const div = document.createElement('div');
            div.classList.add('container');

            const productElem = document.createElement('h2');
            const clientInfoElem = document.createElement('h3');
            const descElem = document.createElement('h4');
            const startBtn = document.createElement('button');
            const finishBtn = document.createElement('button');

            productElem.textContent = `Product type for repair: ${product}`;
            clientInfoElem.textContent = `Client information: ${name}, ${phone}`;
            descElem.textContent = `Description of the problem: ${desc}`;

            startBtn.textContent = 'Start repair';
            startBtn.classList.add('start-btn');

            finishBtn.textContent = 'Finish repair';
            finishBtn.classList.add('finish-btn');
            finishBtn.disabled = true;

            startBtn.addEventListener('click', function repairHandler(e) {
                e.target.disabled = true;
                finishBtn.disabled = false;
            });

            finishBtn.addEventListener('click', function finishRepairHandler(e) {
                let parent = e.target.parentElement;
                parent.removeChild(parent.lastChild);
                parent.removeChild(parent.lastChild);
                completedOrdersElem.appendChild(parent);

            });

            div.appendChild(productElem);
            div.appendChild(clientInfoElem);
            div.appendChild(descElem);
            div.appendChild(startBtn);
            div.appendChild(finishBtn);

            recievedOrdersElem.appendChild(div);

            descriptionElem.value = '';
            nameElem.value = '';
            phoneElem.value = '';
        }
    });

    clearBtn.addEventListener('click', function clearHandler(e) {
        const completedElems = Array.from(document.querySelectorAll('#completed-orders > .container'));
        completedElems.forEach(e => e.remove());
    });
}