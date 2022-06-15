function solve(arr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const sortingMap = {
        'destination': (arr) => arr.sort((a, b) => a.destination.localeCompare(b.destination)),
        'price': (arr) => arr.sort((a, b) => a.price - b.price),
        'status': (arr) => arr.sort((a, b) => a.status.localeCompare(b.status)),
    }
    let data = arr.map(e => e.split('|')).reduce((a, b) => {
        let [dest, price, status] = b;
        a.push(new Ticket(dest, Number(price), status));

        return a;
    }, []);

    return sortingMap[sortingCriteria](data);
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));