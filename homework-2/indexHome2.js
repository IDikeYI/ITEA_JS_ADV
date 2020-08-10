// arrayForReverse

let arrayForReverse =  ['a', 'b', 'c'],
    arrayReverse = [];

function reverseFunction(noReverse, reversed) {
    for (let i = noReverse.length - 1; i >=0 ; i--) {
        reversed.push(noReverse[i]);
    }

    return reversed;
}

console.log(reverseFunction(arrayForReverse, arrayReverse));

// objectForReverse

let objectForReverse = { prop1: 'value1', prop2: 'value2' },
    objectReverse = {};

function reverseObject(noReverse, reversed) {
    for (let key in noReverse) {
        reversed[noReverse[key]] = key;
    }

    return reversed;
}

console.log(reverseObject(objectForReverse, objectReverse));


// Currying

function curry(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(curry(5)(5)(8));

const curriedSum = curry(9),
    curriedSum2 = curriedSum(8),
    curriedSum3 = curry(2)(5);

console.log(curriedSum(5)(5));
console.log(curriedSum2(8));
console.log(curriedSum3(22));

