class List {
    #arr = [];

    add(e) {
        this.#arr.push(e);
        this.#arr.sort((a, b) => a - b);
        this.size += 1;
        return this.#arr;
    }
    remove(i) {
        if (i >= 0 && i < this.#arr.length) {
            this.#arr.splice(i, 1);
            this.size -= 1;
            return this.#arr;
        } else {
            throw new Error('Index is out of range.')
        }
    }
    get(i) {
        if (i >= 0 && i < this.#arr.length) {
            return this.#arr[i];
        } else {
            throw new Error('Index is out of range.')
        }
    }
    size = 0;
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

console.log(list.size);