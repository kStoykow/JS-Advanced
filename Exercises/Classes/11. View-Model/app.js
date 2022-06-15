class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = document.querySelectorAll(this.selector);
        this._value = 0;
    }

    set value(x) {
        this._value = x;
        Array.from(this._elements).map(e => e.value = this.value);
    }
    get value() {
        return this._value;
    }
    get elements() {
        return this._elements;
    }

    isValid() {
        if (Array.from(this.elements).some(e => e.value.match(this._invalidSymbols))) {
            return false;
        }
        return true;
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');
for (const e of inputs) {
    e.addEventListener('input', function () {
        console.log(this);
        console.log(textbox);
        textbox.value = this.value;
    });
}