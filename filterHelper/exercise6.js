/**
 * Filter the array of numbers using the filter helper, creating a new array that only contains umbers greater than 50. 
 * Assign this new array to a variable called 'filteredNumbers'. 
 * Don't forget to use the 'return' keyword in the function!
 */

/***Provided Array ***/

const nums = [15,25,35,45,55,65,75,85,95];

const filteredNumbers = (array, smallest) => {
    return array.filter((arg) => {
        return arg > smallest
    })
}
console.log(filteredNumbers(nums, 50))