/**
 * create an array of numbers
 * create a variable to hold the sum
 * loop over the array, incrementing the sum variable
 * print the sum variable
 */

const nums = [1,2,3,4,5];

let sum = 0;

nums.forEach(function(num) {
    sum += num;
});

function adder(number) {
    sum += number
}
nums.forEach(adder) // <-- reference to the function, not using parens b/c that would immediately call adder and pass the result to forEach instead of forEach calling it.

console.log(sum);