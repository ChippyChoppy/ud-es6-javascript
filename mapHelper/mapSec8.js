/**
 * The most widely used array helper around!
 * Good use on front end.
 */

const numbers = [1,2,3];
const doubledNumbers = []; // <-- why new array? We often want to avoid mutating the data

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2)
}

console.log(doubledNumbers)

const doubled = numbers.map(function(number) {
    return number * 2 // without return in inner function map thinks undefined
});
console.log(doubled)

/**
 * numbers array                                    result array
 * 1            --> Iterator Function -returns->    2
 * 2            --> Iterator Function -returns->    4
 * 3            --> Iterator Function -returns->    6
 */