(function () {
    function add(x, y) {
        return [x[0] + y[0], x[1] + y[1]];
    }
    function multiply(x, s) {
        return [x[0] * s, (x[1]) * s];
    }
    function length(x) {
        return Math.sqrt(x[0] ** 2 + x[1] ** 2);
    }
    function dot(x, y) {
        return (x[0] * y[0]) + (x[1] * y[1]);
    }
    function cross(x, y) {
        return (x[0] * y[1]) - (y[0] * x[1]);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
}());