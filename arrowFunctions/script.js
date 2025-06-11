// arrow functions = a concise way to write function expressions
// good for simple functions that you use only once
// (parameters) => some code
// if more than 1 parameter enclosure with {}

const hello = (name) => console.log(`Hello ${name}`)

hello("alisso");


const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);