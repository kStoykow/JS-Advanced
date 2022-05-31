function solve(carReq) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    const carriage = [
        { type: 'hatchback', color: `${carReq.color}` },
        { type: 'coupe', color: `${carReq.color}` },
    ];

    let car = {
        model: carReq.model,
        engine: engines.find(e => carReq.power <= e.power),
        carriage: carriage.find(e => carReq.carriage == e.type),
        wheels: carReq.wheelsize % 2 == 1 ? new Array(4).fill(carReq.wheelsize) : new Array(4).fill(carReq.wheelsize - 1),
    };

    return car;
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));