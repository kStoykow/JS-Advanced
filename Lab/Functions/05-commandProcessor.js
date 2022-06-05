function solution() {
    let string = '';
    return {
        append(str) {
            string += str;
        },
        removeStart(x) {
            string = string.substring(x);
        },
        removeEnd(x) {
            string = string.substring(0, string.length - x);
        },
        print() {
            console.log(string);
        }
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
