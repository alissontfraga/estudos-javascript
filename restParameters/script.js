// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

//      spread = expands an array into separate elements
//       rest = bundles separate elements into an 
//       array   (juntar)


function openFridge(...foods){  // aq é o rest, ele junta as variáveis em um array só
    console.log(...foods);  //aq é o spread, pra mostrar os elementos "sozinhos"
}
function getFood(...foods){
    return foods;   //vai mostrar esse array
}

const  food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "pao";
const food5 = "macarrao";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);  //vai mostar o array


//calcula os números de um array
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

//const total = sum(1, 2, 3, 4, 5);
//console.log(`Your total is ${total}`);


function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(total);


//juntar strings
function combineString(...strings) {
    return strings.join(" ");
    
}
const fullName = combineString("alisso", "alice", "lis");

console.log(fullName);
