// spread operator = ...alows an iterable such as an array or string to be expanded into separate elements ( unpack elements )

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
console.log(maximum);

let minimum = Math.min(...numbers);
console.log(minimum);

let username = "Alis sso";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; //alem de poder juntar os dois arrays, dá pra adicionar mais elementos soltos
console.log(foods);