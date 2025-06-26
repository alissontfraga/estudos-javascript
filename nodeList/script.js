// NodeList = Static collection of HTML elements by id, class, element
// Can be created by using querySelectorAll()
// Similar to an array, but no map, filter, reduce
// NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.style.backgroundColor = "lightgreen";
    button.textContent += "a";
})

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue"
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "rgb(66, 176, 245)"
    })
})

//add 
const newButton = document.createElement("button");  //step 1
newButton.textContent = "Button 5";  //step 2
newButton.classList = "myButtons";  
document.body.appendChild(newButton);    //step 3

buttons = document.querySelectorAll(".myButtons");  //tem que atualizar a nodeList


//remove
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    });
});