(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str) == false) {
            return str + this;
        }
        return this.valueOf();
    }
    
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str) == false) {
            return this + str;
        }
        return this.valueOf();
    }

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (x) {
        if (x < 4) {
            return ".".repeat(x);
        } else {
            if (this.length <= x) {
                return this.valueOf();
            } else {
                let str = this.substring(0, x);
                let lastSpace = str.lastIndexOf(' ');
                if (lastSpace != 0) {

                    let newStr = str.substring(0, lastSpace);
                    while (newStr.length + 3 > str.length) {
                        let lastSpace = newStr.lastIndexOf(' ');
                        newStr = newStr.substring(0, lastSpace);
                    }
                    return newStr + "...";

                } else {
                    return this.substring(0, x - 3) + '...';
                }
            }
        }
    }

    String.format = function (str, ...params) {
        let pattern = /{\d+}/g;
        let matches = str.match(pattern);
        for (let i = 0; i < params.length; i++) {
            if (str.match(pattern)) {
                str = str.replace(matches[i], params[i]);
            }
        }

        return str;
    }

    let str = 'my string';
    str = str.truncate(9);
    console.log(str);
    str = str.ensureStart('hello ');
    console.log(str);
    str = str.truncate(14);
    console.log(str);
    str = str.truncate(8);
    console.log(str);
    str = str.truncate(4);
    console.log(str);
    str = str.truncate(2);
    console.log(str);
    str = String.format('The {0} {1} fox',
        'quick', 'brown');
    console.log(str);
    str = String.format('jumps {0} {1}', 'dog');
    console.log(str);
}())
