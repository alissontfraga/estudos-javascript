// change the datatype of a value to another
// quando pega o User Input ele vem como string 

let age = window.prompt("How old are you?");
age = Number(age);
console.log(age, typeof age);
