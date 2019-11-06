function solve(steps, footprint, speed) {
    //@ts-check
    let restTime = Math.trunc((steps * footprint) / 500) * 60;
    let secPerKm = (60 / speed) * 60;
    let time = (((steps * footprint) / 1000) * secPerKm) + restTime;

    let min = Math.floor(time / 60);
    let sec = Math.round(time - (min * 60));
    let hours = Math.floor(time / 3600);

    return (hours < 10 ? '0' : '') + `${hours}:` +
        (min < 10 ? '0' : '') + `${min}:` +
        (sec < 10 ? '0' : '') + sec;
}

console.log(solve(4000, 0.60, 5));