// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring


//1- swap the value of two variables
let a = 1;
let b = 2;

[a, b] = [b, a];

//2 - swap 2 elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors [4], colors[0]];
console.log(colors);
//3 - assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//4 - extract values from objects

const person1 = {
    firstName: "alisso",
    lastName: "aly",
    age: 18,
    job: "developer",
}
const person2 = {
    firstName: "isa",
    lastName: "ais",
    age: 18,
}

const {firstName, lastName, age, job="Unemployed"} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
//5- destructure in function parameters
function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);



