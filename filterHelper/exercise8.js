/**
 * Challenging! Implementing 'reject'.
 * This is a hard one!
 * Create a function called 'reject'. Reject should work in the opposite way of 'filter' - if a function return s'true', the item shoulld *not* be included in the new array.
 * Hint: You can reuse filter
 * 
 * Example:
 * const nums = [10,20,30];
 *  const lessThanFifteen = reject(numbers, function(number) { 
 *      return number > 15
 *  });
 * lessThanFifteen // [10];
 */

const numbers = [10,20,30]


function reject(array, iteratorFunction) {
    return array.filter((number) => {
        return number < 15;
    })
}
console.log(reject(numbers))