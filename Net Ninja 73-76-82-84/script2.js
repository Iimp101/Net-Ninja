/// AVSNITT 76 - chaining array methods

// EXAMPLE 1 (Harder way)

const products = [
    {name: "gold star", price: 30},
    {name: "green shell", price: 10},
    {name: "red shell", price: 40},
    {name: "banana skin", price: 5},
    {name: "mushroom", price: 50},
];


// One live version
// const filtered = products.filter( product => product.price > 20);
// console.log(filtered);

// const promos = filtered.map(product => {
//     return `the´${product.name} is ${product.price / 2}`;
// });

// EXAMPLE 2 - EASIER WAY - CHAINING

const promos = products
.filter(product => product.price > 20 )
.map(product => `the´${product.name} is ${product.price / 2}`)

console.log(promos);