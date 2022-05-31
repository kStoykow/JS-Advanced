function createAssemblyLine() {
    return {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            }
        },

        hasAudio(obj) {
            obj.currentTrack = { name: null, artist: null };
            obj.nowPlaying = function () {
                if (this.currentTrack.name !== null && this.currentTrack.artist !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(obj) {
            obj.checkDistance = function (dist) {
                if (dist < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (dist >= 0.1 && dist < 0.25) {
                    console.log('Beep! Beep!');
                } else if (dist >= 0.25 && dist < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);