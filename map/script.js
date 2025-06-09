// .map() = accepts a callback and applies that function to each element of an array, then return a NEW array  // for each change THEM.

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}


const students = ["alisso", "lia", "isa"];

const studentsUpper = students.map(uppercase);
console.log(studentsUpper);

function uppercase(element){
    return element.toUpperCase();
}