/**
 * REALLY HARD - Implementing 'Pluck'
 * 
 * This is a hard one!
 * Implement a 'pluck' function. Pluck should accept an array and a string representing a proerty name and return an array containing that property from each object.
 * Ex:
 * const paints = [ {color: 'red }, {color : 'blue' } {color : 'yellow' }];
 * pluck(paints, 'color'); // returns ['red', 'yellow', 'blue' ];
 * 
 * Hint:
 * Remember that you can access a property on an object by using square bracket notation for example...
 * const person = {name : 'Bill' };
 * person['name'] // returns 'Bill'
 */

const paints = [ {color: 'red' }, {color : 'blue' }, {color : 'yellow' } ];

function pluck(array, property) {
    const justTheColors = array.map((item) => {
        console.log(item[property])
        return item[property]
    })
    return justTheColors;
}
console.log(pluck(paints, 'color'))