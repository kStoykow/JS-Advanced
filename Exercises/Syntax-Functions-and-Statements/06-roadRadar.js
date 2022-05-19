function solve(speed, area) {
    let limitsMap = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    if (speed > limitsMap[area]) {
        let status = '';
        if (speed - limitsMap[area] <= 20) {
            status = 'speeding';
        } else if (speed - limitsMap[area] <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }

        return `The speed is ${speed - limitsMap[area]} km/h faster than the allowed speed of ${limitsMap[area]} - ${status}`;
    } else {
        return `Driving ${speed} km/h in a ${limitsMap[area]} zone`;
    }
}
console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));