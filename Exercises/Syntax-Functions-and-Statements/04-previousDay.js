function solve(y, m, d) {
    let months30Map = [4, 8, 9, 11];
    let date = new Date(y, m, d);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate() - 1;

    if (day == 0) {
        month -= 1;
        if (months30Map.includes(month)) {
            day = 30;
        } else if (month == 2) {
            day = 28;
        }
        else day = 31;
        if (month == -1) {
            year--;
            month = 12;
        }
    }
    return [year, month, day].join('-');
}
console.log(solve(2016, 10, 1));