function solve(arr) {
    let matches = 0;

    function width(arr) {
        let matches = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] == arr[i - 1]) {
                matches++;
            }
        }
        return matches;
    }

    function height(arr, arr2) {
        let matches = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == arr2[i]) {
                matches++;
            }
        }
        return matches;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        matches += width(arr[i]);
        matches += height(arr[i], arr[i + 1]);
        if (i + 1 == arr.length - 1) {
            matches += width(arr[i + 1]);
        }
    }
    return matches;
}
console.log(solve(
    [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
));