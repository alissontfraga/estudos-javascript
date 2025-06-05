
let fruits = ["apple", "orange", "banana"];

//fruits.push("coconout");             .push irá adicionar o elemento no final do array
//fruits.pop();                   .pop irá remover o último elemento
//fruits.unshift("manga");          .unshift irá adicionar o elemento no início do array
//fruits.shift();                 .shift irá remover o elemento no início do array

let numOfFruits = fruits.length;  // tamanho do array

let index = fruits.indexOf("orange"); //para achar o indíce em que o elemento está

console.log(numOfFruits);

//para mostrar todos elementos do array
for (let i = 0; i < fruits.length; i++) {  
    console.log(fruits[i]);
}

//enhanced loop   para mostrar todos os elementos do array tbm
        // esse fruit pode ser qualquer outro nome
for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort();     //sort em ordem alfabética
fruits.sort().reverse();   //sort ao contrário
