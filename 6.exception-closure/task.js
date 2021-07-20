function parseCount(parseNumber) {
    let result = Number.parseInt(parseNumber);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(value) {
    let result;
    try {
        result = parseCount(value);
    } catch (e) {
        return e;
    }
    return result;
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = 1 / 2 * (this.a + this.b + this.c);
        return +Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    let triangle;
    try {
        triangle = new Triangle(a, b, c);
    } catch (e) {
        triangle = new class SimpleClass {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
    return triangle;
}
