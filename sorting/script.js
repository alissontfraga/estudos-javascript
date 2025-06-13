// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

//strings
let fruits = ["apple", "orange", "banana", "coconout", "pineapple"];
fruits.sort();
console.log(fruits);

//numbers
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => a - b);  //reverse b - a
console.log(numbers);

const people = [{name: "alisso", age: 19},
     {name: "isa", age: 18},
     {name: "liz", age: 20},
     {name: "lia", age: 17}];
  
people.sort((a, b) => a.age - b.age);
console.log(people);
     

