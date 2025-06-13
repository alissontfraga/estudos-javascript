const fruits = [{name: "apple", color: "red", calories: 95}, 
    {name: "orange", color: "orange", calories: 45},
     {name: "banana", color: "yellow", calories: "105"}, 
     {name: "coconout", color: "white", calories: "159"}, 
     {name: pineapple, color: "yellow", calories: 37},];


console.log(fruits[4].name);
console.log(fruits[4].calories);

fruits.push({name: "grapes", color: "purple", calories: 62}); //adicionar

console.log(fruits);

fruits.pop();
fruits.splice(1, 2); //tirar esses

//forEach
fruits.forEach(fruit => console.log(fruit)); //mostrar eles

fruits.forEach(fruit => console.log(fruits.name));

//map
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);

//filter
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

//reduce
const maxFruit = fruits.reduce((/* accumulator, element */ 
    max, fruit) => fruit.calories > max.Calories ? fruit : max);
    console.log(maxFruit); //or maxFruit.calories to get only calories
    







