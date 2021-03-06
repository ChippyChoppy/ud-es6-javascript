/**
 * Goal of learning these helpers is to get away from for loops.
 */

/*
what ways can a for loop go wrong? 
    many elements of code, prone to typos, prone to very tiny common mistakes;
    A lot of extra pieces of code on the screen for us to mess up.

    ***The more logic we stuff into a single line of code, the more challenging it is for our future engineers to understand what's going on***

    Writing a for loop is great, but it's sometimes challenging to figure out what's going on.
*/

/**
 * These helpers help with iteration over an array.
 */

 const colors = ['red','blue','green'];

 for (let i = 0; i < colors.length; i++) {
     console.log(colors[i])
 };

 // colors = [] // forEach = array helper method // function() = anonymous function that get's called once for every element in the array
 colors.forEach(function(color) {
     console.log(color)
 })

/**
 * forEach takes the first element and passes it to the iterator function.
 * 
 * Iterator function runs, and then returns.
 * 
 * After the return we take the next item and do the same thing. 
 * 
 * forEach behaves same as for loop, why use it?
 *      forEach is dramatically less code to write
 *      nowhere near as much logic setting up the bounds of the array
 */