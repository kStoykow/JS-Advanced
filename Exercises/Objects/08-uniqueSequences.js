function solve(data) {
    const descending = (a, b) => b - a;
    const length = (a, b) => a.split(', ').length - b.split(', ').length;

    return [
        ...new Set(
            data.map(e => JSON.parse(e)
                .sort(descending)
                .join(', '))
        )]
        .sort(length)
        .map(e => `[${e}]`)
        .join('\n');
}

console.log(
    solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"]
    )
);