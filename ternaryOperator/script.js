// ternary operator = a shortcut to if{} and else{} statements. 
// helps to assign a variable based on a condition. 
// condition ? codeIfTrue : codeIfFalse; 

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);