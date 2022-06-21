class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (this.possibleArticles.hasOwnProperty(articleModel.toLocaleLowerCase()) == false) {
            throw new Error('This article model is not included in this gallery!');
        }

        let currArticle = this.listOfArticles.find(e => e.articleName == articleName);

        if (currArticle != undefined) {
            if (currArticle.articleModel == articleModel) {
                currArticle.quantity += quantity;
            }
        } else {
            this.listOfArticles.push({ articleModel: articleModel.toLocaleLowerCase(), articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(e => e.guestName == guestName);

        if (guest !== undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }
        const pointsMap = { Vip: 500, Middle: 250 };
        let points = 50;

        if (pointsMap[personality] != undefined) {
            points = pointsMap[personality];
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let currArticle = this.listOfArticles.find(e => e.articleName == articleName);
        let currGuest = this.guests.find(e => e.guestName == guestName);

        if (currArticle.articleModel != articleModel || currArticle == undefined) {
            throw new Error('This article is not found.');
        }
        if (currArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        if (currGuest == undefined) {
            return 'This guest is not invited.';
        }

        if (currGuest.points >= this.possibleArticles[articleModel]) {
            currGuest.points -= this.possibleArticles[articleModel];
            currArticle.quantity--;
            currGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        } else {
            return 'You need to more points to purchase the article.';
        }

    }

    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            return `Articles information:\n${this.listOfArticles.map(e => `${e.articleModel} - ${e.articleName} - ${e.quantity}`).join('\n')}`;
        } else {
            return `Guests information:\n${this.guests.map(e => `${e.guestName} - ${e.purchaseArticle}`).join('\n')}`;
        }
    }
}