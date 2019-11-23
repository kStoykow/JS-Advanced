function solution() {
    let str = '';

    function append(concatStr) {
        str += concatStr;
    }

    function removeStart(n) {
        str = str.substr(n);
    }

    function removeEnd(n) {
        str = str.substr(0, str.length - n);
    }

    function print() {
        console.log(str)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()

solution()