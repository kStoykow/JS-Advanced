function solve(str) {
    const daysMap = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    return daysMap[str] !== undefined ? daysMap[str] : 'error';
}
console.log(solve('Monday'));
console.log(solve('Invalid'));