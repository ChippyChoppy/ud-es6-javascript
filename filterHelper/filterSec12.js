/**
 * 
 */

const products = [
    { name: 'cuke', type: 'veg', quantity: 10, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'veg', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
]

// Type is 'vegeatble', quantity is greater than 0, price is less than 10

 const cheapVeggies = products.filter((product) => {
    return product.type === 'veg' && product.quantity > 0 && product.price < 10
})
console.log(cheapVeggies)