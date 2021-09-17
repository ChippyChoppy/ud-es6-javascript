/**
 * One of the most common uses of map is collecting properties off an array of objects.
 */

const cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camara', price: 'expensive' }
];

// want to get an idea of prices...

const prices = cars.map(function(car) {
    return car.price
})
console.log(prices)

// very common operation to take with arrays of objects. Referred to as a pluck since we're plucking specific properties from array.