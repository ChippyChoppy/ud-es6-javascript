/**
 * Using map, create a new array that contains the 'height' property of each object. 
 * Assign this new array to the variable 'heights'.
 * Don't forget to use the 'return' keyword in the function!
 */
/* ---*** Provided Array ***--- */
const images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

/*** My code ***/
const heights = images.map(function(image) {
    return image.height
})
console.log(heights)