class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let currBook = this.books.find(e => e.bookName == bookName);

        if (currBook == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (currBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        currBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let currBook = this.books.find(e => e.bookName == bookName);

        if (currBook == undefined) {
            throw new Error("The book, you're looking for, is not found.");
        }
        if (currBook.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(this.books.indexOf(currBook), 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            let r = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];
            r.push(this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).map(e => `${e.bookName} == ${e.bookAuthor} - ${e.payed == true ? 'Has Paid.' : 'Not Paid.'}`).join('\n'));
            return r.join('\n');

        } else {
            let targetBook = this.books.find(e => e.bookAuthor == bookAuthor);
            if (targetBook != undefined) {
                return `${targetBook.bookName} == ${targetBook.bookAuthor} - ${targetBook.payed == true ? 'Has Paid.' : 'Not Paid.'}`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}