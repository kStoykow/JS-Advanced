function extensibleObject() {
    return {
        extend(template) {
            let proto = Object.getPrototypeOf(this);
            for (const key in template) {
                if (typeof template[key] == 'function') {
                    proto[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    }
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString',
}

myObj.extend(template);
console.log(myObj.extensionMethod);