// function declaration = define a reusable block of code that performs a specific task

// function expression = a way to define functions as values or variables
//1 - callbacks in asynchronous operations
//2 - Higher-order functions
//3 - Closures
//4- Event listeners    

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);