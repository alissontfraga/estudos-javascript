

// 1- easy way = windows prompt
// 2- professional way = HTML textbox

let username;

//1
/* username = window.prompt("What's your username?");
console.log(username); */

//2
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username}`;
}

 

