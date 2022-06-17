(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (x) {
        return this.slice(x);
    }
    Array.prototype.take = function (x) {
        return this.slice(0, x)
    }
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    }
    Array.prototype.average = function () {
        return this.reduce((a, b, i, arr) => a + b / arr.length, 0);
    }
}())