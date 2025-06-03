//string slicing = creating a substring from a portion of another string
// string.slice(start, end)


const fullName = "alisson alis";

//let firstName = fullName.slice(0,3);
//console.log(firstName);

let firstName = fullName.slice(0, fullName.indexOf(" ")); //pegar o primeiro nome e parar no primeiro espaço
let lastName = fullName.slice(fullName.indexOf(" "));
//começar do espaço e pegar o resto do último nome

console.log(firstName);
console.log(lastName);