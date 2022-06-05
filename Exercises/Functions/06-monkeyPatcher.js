let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 50,
    downvotes: 22
};

function solution(command) {
    function statusParser(up, down, balance) {
        let status = '';
        let total = up + down;
        let p = (up / total) * 100;

        if (total < 10) {
            status = 'new';
        } else if (p > 66) {
            status = 'hot';
        } else if (p >= 50 && p <= 66 && balance >= 0 && total > 100) {
            status = 'controversial';
        } else if (balance < 0) {
            status = 'unpopular';
        } else {
            status = 'new';
        }

        return status;
    }
    const commandsMap = {
        upvote: () => this.upvotes += 1,
        downvote: () => this.downvotes += 1,
        score: () => {
            let status = '';
            let inflated = 0;
            if (this.upvotes + this.downvotes > 50) {
                inflated = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            }
            let upvotes = this.upvotes + inflated;
            let downvotes = this.downvotes + inflated;
            let balance = this.upvotes - this.downvotes;
            status = statusParser(this.upvotes, this.downvotes, balance);

            return [upvotes, downvotes, balance, status];
        },
    }

    return commandsMap[command](this);
}
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');        // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);