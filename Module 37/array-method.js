const products = [
    { name :'Laptop',price : 3200 , brand :'Lenovo',color:'silver'},
    { name :'Phone',price : 7000 , brand :'Iphone',color:'black'},
    { name :'watch',price : 200 , brand :'casio',color:'yellow'},
];

const brands = products.map(product => product.brand);
console.log(brands);