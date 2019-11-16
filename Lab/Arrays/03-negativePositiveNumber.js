function solve(data) {
    const actionsMap = {
        true: 'unshift',
        false: 'push',
    }

    return data
        .reduce((result, b) => {
            result[actionsMap[b < 0]](b)

            return result;
        }, []);
}

console.log(
    solve([7, -2, 8, 9])
);