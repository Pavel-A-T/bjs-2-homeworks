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
        if (this.state * 1.5 > 100) {
            this.state = 100;
        } else {
            this.state *= 1.5;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = 'book';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = 'detective';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
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

    findBookBy(type, value) {//ключ значение
        for (let i = 0; i < this.books.length; i++) {
            for (let key in this.books[i]) {
                if (key === type) {
                    let book = this.books.find(s => s[key] === value);
                    if (book) {
                        return book;
                    }
                }
            }
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
        let item = {'subject': subject, marks: [mark]};
        if (!reference) {
            this.subjects.push(item);
        } else {
            reference.marks.push(mark);
        }
    }

    getAverageBySubject(subject) {
        let marks = this.subjects.find(s => s.subject === subject).marks;
        if (marks) {
            let length = marks.length;
            let sum = 0;
            for (let i = 0; i < length; i++) {
                sum += marks[i];
            }
            return sum / length;
        }
        return 'Несуществующий предмет';
    }

    getAverage() {
        let totalSum = 0;
        for (let i = 0; i < this.subjects.length; i++) {
            let arr = this.subjects[i].marks;
            let length = arr.length;
            let sum = 0;
            for (let j = 0; j < length; j++) {
                sum += arr[j];
            }
            totalSum += sum / length;
        }
        return totalSum / this.subjects.length;
    }

    exclude(reason) {
        this.excluded = reason;
    }
}
