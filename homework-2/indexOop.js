function BookList() {
    this.bookList = [];
    this.booksReaded = function () {
        let arrayNoRead = [];
        for (book in this.bookList) {
            if (this.bookList[book].read === true) {
                arrayNoRead.push(this.bookList[book].title);
            }
        }
        return 'Read count = (' + arrayNoRead.length + ') , Book: ' + arrayNoRead;
    };
    this.booksNoReaded = function () {
        let arrayNoRead = [];
        for (book in this.bookList) {
            if (this.bookList[book].read !== true) {
                arrayNoRead.push(this.bookList[book].title);
            }
        }
        return 'No Readed count = (' + arrayNoRead.length + ') , Book: ' + arrayNoRead;
    };
    this.bookListLink = function () {
        for (book in this.bookList) {
            if (this.bookList[book].read !== true) {
                return this.bookList[book];
            }
        }
    };
    this.currentReadBook = function () {
        let arraycurrentReadBook = [];
        for (let book in this.bookList) {
            if (this.bookList[book].currentRead === true) {
                arraycurrentReadBook.push(this.bookList[book].title);
            }
        }

        return arraycurrentReadBook.length ? 'Current book reading: ' +  arraycurrentReadBook : 'No one book read now';
    };
    this.lastReaded = function () {
        let arraylastReaded = [],
            lastReadedOne = null;

        for (book in this.bookList) {
            if (this.bookList[book].read === true) {
                arraylastReaded.push( this.bookList[book].title + ' readed in ' + this.bookList[book].readDate() + '\n');
                lastReadedOne = this.bookList[book].readDate() >= this.bookList[book].readDate() ? this.bookList[book].title : undefined;
            }
        }
        return 'Array last readed: ' + arraylastReaded + "\n But last it "  + lastReadedOne;
    }
}

BookList.prototype.add = function (book = this) {
    return this.bookList.push(book);
};

BookList.prototype.finishCurrentBook = function (boolean = true) {
    return this.read = boolean;
};

// Class format
// class BookList {
//     constructor () {
//         this.bookList = [];
//         this.booksReaded = function () {
//             let arrayNoRead = [];
//             for (let book in this.bookList) {
//                 if (this.bookList[book].read) {
//                     arrayNoRead.push(this.bookList[book].title);
//                 }
//             }
//             return 'Read count = (' + arrayNoRead.length + ') , Book: ' + arrayNoRead;
//         };
//         this.booksNoReaded = function () {
//             let arrayNoRead = [];
//             for (let book in this.bookList) {
//                 if (!this.bookList[book].read) {
//                     arrayNoRead.push(this.bookList[book].title);
//                 }
//             }
//             return 'No Readed count = (' + arrayNoRead.length + ') , Book: ' + arrayNoRead;
//         };
//         this.bookListLink = function () {
//             for (let book in this.bookList) {
//                 if (!this.bookList[book].read) {
//                     return this.bookList[book];
//                 }
//             }
//         };
//         this.currentReadBook = function () {
//             let arraycurrentReadBook = [];
//             for (let book in this.bookList) {
//                 if (this.bookList[book].currentRead) {
//                     arraycurrentReadBook.push(this.bookList[book].title);
//                 }
//             }
//
//             return arraycurrentReadBook.length ? 'Current book reading: ' +  arraycurrentReadBook : 'No one book read now';
//         };
//         this.lastReaded = function () {
//             let arraylastReaded = [],
//                 lastReadedOne = null;
//
//             for (let book in this.bookList) {
//                 if (this.bookList[book].read) {
//                     arraylastReaded.push( this.bookList[book].title + ' readed in ' + this.bookList[book].readDate() + '\n');
//                     lastReadedOne = this.bookList[book].readDate() >= this.bookList[book].readDate() ? this.bookList[book].title : undefined;
//                 }
//             }
//             return 'Array last readed: ' + arraylastReaded + "\n But last it "  + lastReadedOne;
//         }
//     }
//
//     add (book = this) {
//         return this.bookList.push(book);
//     };
//
//     finishCurrentBook (boolean = true) {
//         return this.read = boolean;
//     };
// }

/**
 * @param {string} title
 * @param {string} genre
 * @param {string} author
 * @param {boolean} currentRead - (true,false)
 * @param {boolean} read - (true,false)
 */

function Book(title, genre, author, currentRead = false, read = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.currentRead = currentRead;
    this.readDate = function () {
        if (this.read === true) {
            return new Date().toLocaleString();
        } else {
            console.log('The book don\'t start read');
        }
    };
}

Book.prototype = new BookList();

// Class format
// class Book extends BookList {
//     constructor (title, genre, author, currentRead = false, read = false) {
//         super();
//
//         this.title = title;
//         this.genre = genre;
//         this.author = author;
//         this.read = read;
//         this.currentRead = currentRead;
//         this.readDate = function () {
//             if (this.read === true) {
//                 return new Date().toLocaleString();
//             } else {
//                 console.log('The book don\'t start read');
//             }
//         };
//     }
// }

/* Book's */
const traveling = new Book('Путишественник', 'Travel', 'Marko Polo');
const smellOfMeat = new Book('The smell of meat', 'Novel', 'Luko Dashval');
const thirdWorldToFirst = new Book('From the third world to the first', 'Memoir', 'Li Kuan U', true);

/* Book's Add in Book List */
traveling.add();
smellOfMeat.add();
thirdWorldToFirst.add();

/* Book's are Finish Readed */
traveling.finishCurrentBook();
smellOfMeat.finishCurrentBook();

console.log(traveling);
console.log(traveling.bookList);
console.log(traveling.readDate());
console.log(traveling.booksNoReaded());
console.log(traveling.booksReaded());
console.log(smellOfMeat.bookListLink());
console.log(thirdWorldToFirst.currentReadBook());
console.log(thirdWorldToFirst.lastReaded());