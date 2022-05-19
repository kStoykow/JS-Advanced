function solve(steps, footprintLength, speed) {
    let timeInSec = (steps * footprintLength / 1000) / (speed / 3600);
    timeInSec += Math.trunc(steps * footprintLength / 500) * 60;

    let hours = Math.trunc(timeInSec / 3600) < 10 ? `0${Math.trunc(timeInSec / 3600)}` : Math.trunc(timeInSec / 3600);
    let mins = Math.trunc(timeInSec / 60) < 10 ? `0${Math.trunc(timeInSec / 60)}` : Math.trunc(timeInSec / 60);
    let secs = Math.round(timeInSec % 60) < 10 ? `0${Math.round(timeInSec % 60)}` : Math.round(timeInSec % 60);

    return [hours, mins, secs].join(':');
}
console.log(solve(4000, 0.60, 5));