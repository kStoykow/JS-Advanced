class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp.hasOwnProperty(condition) == false) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(e => e.name == name) == true) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let currPerson = this.listOfParticipants.find(e => e.name == name);
        if (currPerson == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(this.listOfParticipants.indexOf(currPerson), 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(game, p1Name, p2Name) {
        let player1 = this.listOfParticipants.find(e => e.name == p1Name);

        if (player1 == undefined) {
            throw new Error('Invalid entered name/s.');
        }

        if (game == 'Battleship') {
            player1.power += 20;
            return `The ${p1Name} successfully completed the game ${game}.`;

        } else if (game == 'WaterBalloonFights') {
            let player2 = this.listOfParticipants.find(e => e.name == p2Name);

            if (player2 == undefined) {
                throw new Error('Invalid entered name/s.');
            }

            if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${player1.name} is winner in the game ${game}.`;
            } else if (player2.power > player1.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${game}.`;
            } else {
                return 'There is no winner.';
            }
        }
    }

    toString() {
        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n` +
            this.listOfParticipants.sort((a, b) => b.wins - a.wins).map(e => `${e.name} - ${e.condition} - ${e.power} - ${e.wins}`).join('\n');
    }
}