/* Замикання */
function shape(...args) {
    this.type = function () {
        if (args.length === 4) {
            return 'rectangle';
        } else if (args.length === 3) {
            return 'triangle';
        } else {
            return 'Unknown type';
        }
    };
    this.getP = function () {
        if (args.length === 4 || args.length === 3) {
            return args.reduce( (a, b) => a + b );
        } else {
            return 'Need more arguments';
        }
    };
    this.getS = function () {
        if (args.length === 4) {
            return args[0] * args[1];
        } else if (args.length === 3) {
            return (args[0] * args[1]) / 2;
        } else {
            return 'Need more arguments';
        }
    };
}

const result = new shape(2, 5, 2, 5);
console.log(result.type());
console.log(result.getP());
console.log(result.getS());


/* Наслідування / Прототипи */
function Shape(...args) {
    this.type = function () {
        if (args.length === 4) {
            return 'rectangle';
        } else if (args.length === 3) {
            return 'triangle';
        } else {
            return 'Unknown type';
        }
    };
    this.getP = function () {
        if (args.length === 4 || args.length === 3) {
            return args.reduce( (a, b) => a + b );
        } else {
            return 'Need more arguments';
        }
    };
    this.getS = function () {
        if (args.length === 4) {
            return args[0] * args[1];
        } else if (args.length === 3) {
            return (args[0] * args[1]) / 2;
        } else {
            return 'Need more arguments';
        }
    };
}

/* Трикутник */
function Triangle(...args) {
    Shape.apply(this, args);
    this.isRightTriangle =  args[0] === args[1] && args[0] === args[2] ? true : false;
}

Triangle.prototype = new Shape();

const triangle = new Triangle(4, 4, 4);

console.log(triangle.getP());
console.log(triangle.getS());
console.log(triangle.isRightTriangle);

/* Чотирикутник */
function Rectangle(...args) {
    Shape.apply(this, args);
    this.isSquare =  args[0] === args[1] && args[0] === args[2] && args[0] === args[3] ? true : false;
}

Rectangle.prototype = new Shape();

const rectangle = new Rectangle(4, 8, 4, 5);

console.log(rectangle.getP());
console.log(rectangle.getS());
console.log(rectangle.isSquare);