const student = {
    name : 'Salim Khan',
    age : 32,
    movies:['king khan','Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

const products = [
    { name :'Laptop',price : 3200 , brand :'Lenovo',color:'silver'},
    { name :'Phone',price : 7000 , brand :'Iphone',color:'black'},
    { name :'watch',price : 200 , brand :'casio',color:'yellow'},
];

const newProduct = {name:'webcam' , price:700, brand:'lal'};

const newProducts =[...newProduct,newProduct];