class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state *= 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    //поиск книги по значению типа
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) return this.books[i];
        }
        return null;
    }

    giveBookByName(bookName) {
        let book = this.books.find(s => s.name === bookName);
        if (book) {
            let index = this.books.indexOf(book);
            if (index > -1) {
                this.books.splice(index, 1);
            }
            return book;
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5) {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }
        let reference = this.subjects.find(s => s.subject === subject);
        if (!reference) {
            let item = {subject, marks: [mark]};
            this.subjects.push(item);
        } else {
            reference.marks.push(mark);
        }
    }

    getAverageBySubject(subject) {
        let subj = this.subjects.find(s => s.subject === subject);
        if (subj) {
            if (subj.marks) {
                let length = subj.marks.length;
                let sum = 0;
                for (let i = 0; i < length; i++) {
                    sum += subj.marks[i];
                }
                return sum / length;
            }
        }
        return 'Несуществующий предмет';
    }

    getAverage() {
        let total = this.subjects.map(s => this.getAverageBySubject(s.subject));
        let totalSum = total.reduce((sum, current) => sum + current, 0);
        return totalSum / total.length;
    }

    exclude(reason) {
        this.excluded = reason;
    }
}
