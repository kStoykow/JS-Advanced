function solve(arg) {
    let balance = this.upvotes - this.downvotes;
    let total = this.upvotes + this.downvotes;

    function getRating() {
        if (total < 10) {
            return 'new';
        }
        if (this.upvotes > (this.upvotes + this.downvotes) * 0.66) {
            return 'hot';
        }
        if (balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
            return 'controversial';
        }
        if (this.upvotes < this.downvotes) {
            return 'unpopular';
        }
        return 'new';
    }

    let commands = {
        upvote: () => this['upvotes'] += 1,
        downvote: () => this['downvotes'] += 1,
        score: () => {
            let upvotes = this['upvotes'];
            let downvotes = this['downvotes'];

            if (total > 50) {
                let valToAdd = total > 50 ? Math.ceil(Math.max(upvotes, downvotes) * 0.25) : 0;
                upvotes += valToAdd;
                downvotes += valToAdd;
            }

            return [upvotes, downvotes, balance, getRating.call(this)];
        }
    }

    return commands[arg]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 140,
    downvotes: 30
};

console.log(solve.call(post, 'upvote'));
console.log(solve.call(post, 'downvote'));
let score = solve.call(post, 'score');
console.log(solve.call(post, 'score'));

