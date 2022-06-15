class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
    }
    #online = false

    get online() {
        return this.#online;
    }
    set online(v) {
        this.#online = v;

        if (this.titleDiv) {
            this.titleDiv.className = this.#online ? 'title online' : 'title';
        }
    }
    factory(tag, content = '') {
        let elem = document.createElement(tag);
        elem.innerHTML = content;
        return elem;
    }

    render(id) {
        let main = document.getElementById(id);
        this.articleElem = this.factory('article');

        this.titleDiv = this.factory('div', `${this.firstName} ${this.lastName}`);
        this.btn = this.factory('button', `&#8505;`);
        this.infoDiv = this.factory('div', `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`);

        this.titleDiv.className = this.online ? 'title online' : 'title';
        this.infoDiv.style.display = 'none';
        this.infoDiv.className = 'info';

        this.titleDiv.appendChild(this.btn);
        this.articleElem.appendChild(this.titleDiv);
        this.articleElem.appendChild(this.infoDiv);
        main.appendChild(this.articleElem);

        this.btn.addEventListener('click', () => {
            console.log(this.infoDiv);
            this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none';
        });
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);