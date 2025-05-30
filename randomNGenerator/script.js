

// Math.random só vai do 0 ao 1, precisa adicionar * até o número que quero
//Math.floor pra pegar um N inteiro
//let randomNum = Math.floor(Math.random() * 6) + 1; // +1 para começar do 1


//const min = 50;
//onst max = 100;


//let randomNum = Math.floor(Math.random() * (max - min)) + min;

//console.log(randomNum);


const roll = document.getElementById("roll");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

roll.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}