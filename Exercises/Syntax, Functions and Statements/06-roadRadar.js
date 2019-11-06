function solve(params) {
    const limitMap = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    };

    let [speed, where] = params;

    if (speed > limitMap[where]) {
        let speedDiff = speed - limitMap[where];
        if (speedDiff > 40) {
            return 'reckless driving';

        } else if (speedDiff > 20) {
            return 'excessive speeding';
        }

        return 'speeding';
    }

    return;
}

console.log(solve([21, 'residential']));