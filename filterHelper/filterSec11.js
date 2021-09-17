/** 
 * Filter Helper
 * Toughest so far, but fantastically useful
 * 
 * ability to filter/sort/search products.
 * 
 * Anytime we're filtering a list
 */

const products = [
    { name: 'cuke', type: 'veg' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'veg' },
    { name: 'orange', type: 'fruit' }
];

// only show me fruit!

/***Classic for loop implementation ***/
let filteredProducts = []; // we don't want to mutate original, so we create subset of what we're filtering

for (let i = 0; i < products.length; i++) {
    if ( products[i].type == 'fruit') {
        filteredProducts.push(products[i])
    }
}

const filteredProds = products.filter(function(product) {
    return product.type === 'fruit';
});

console.log(filteredProds)
/** Filtering
 * 
 * products array       iterator func   returns     Boolean     truthy array
 * fruit    --------->  iterator func   returns     True        
 */