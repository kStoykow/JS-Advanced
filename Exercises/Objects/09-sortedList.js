function createSortedList() {
    let r = [];

    let obj = {
        add(e) {
            r.push(e);
            this.size++;
            return r.sort((a, b) => a - b);
        },
        remove(i) {
            if (i >= 0 && i < r.length) {
                r.splice(i, 1);
                this.size--;
            }
            return r;
        },
        get(i) {
            if (i >= 0 && i < r.length) {
                return r[i];
            }
        },
        size: r.length,
    };
    return obj;
}

let list = createSortedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.get(0));
list.remove(0);
console.log(list.get(0));