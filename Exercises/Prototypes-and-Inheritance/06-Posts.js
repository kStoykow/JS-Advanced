function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            if (this.comments.length > 0) {
                return (super.toString() +
                    `Rating: ${this.likes - this.dislikes}\n` +
                    `Comments:\n${this.comments.map(e => ` * ${e}`).join('\n')}`);
            }
            return (super.toString() +
                `Rating: ${this.likes - this.dislikes}`);
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return (super.toString() +
                `Views: ${this.views}`);
        }
    }

    return { Post, SocialMediaPost, BlogPost }
}

const classes = solve();
let post = new classes.Post("Post", "Content");
console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

