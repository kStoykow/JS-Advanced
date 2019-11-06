function solve(params) {
    let result = params.toString()
        .split('')
        
    return (
        result.every((num, i, sequence) => num == sequence[0])
            ? (`true\n${result.reduce((acc, e) => acc + Number(e), 0)}`)
            : (`false\n${result.reduce((acc, e) => acc + Number(e), 0)}`)
    )
}

console.log(solve(2222222));