"use strict"

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [];
        this.marks.push(mark);
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...args) {
    if (this.marks === undefined) {
        this.marks = [];
        for (let arg of args) {
            this.marks.push(arg);
        }
    } else {
        for (let arg of args) {
            this.marks.push(arg);
        }
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    let length = this.marks.length;
    for (let i = 0; i < length; i++) {
        sum += this.marks[i];
    }
    return sum / length;
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}