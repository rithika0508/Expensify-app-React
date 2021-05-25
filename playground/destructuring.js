
//object destructuring

// const person = {
//     name:'andrew',
//     age:28,
//     location: {
//         city: 'hyd',
//         temp:45
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${name} is ${age} year(s) old`)
// const { city, temp } = person.location;
// if(person.location.city && person.location.temp) {
//     console.log(`Its ${temp} celsius`)
// }

// const book = {
//     title:'ego is the great enemy',
//     author:'Ryan',
//     publisher:{
//         name:'penguin'
//     }
// }
// const { title, author } = book;
// console.log(`${title} is written by ${author}`)



//array destructuring
const address = ['1299 street', 'philadelphia', 'hyd'];
const [ , city, state ] = address;


console.log(`${state} and ${city}`)
const item = ['coffee', '2','2.5','2.75'];
const [itemname, ,rate] = item;
console.log(`${itemname} is ${rate} rupees`)