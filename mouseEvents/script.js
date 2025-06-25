// eventListener = listen for specific events to create interactive web page events: click, mouseover, mouseout
// .addEventListener(event, callback);
// .addEventListener(event, arrow function);
// .addEventListener(event, anonymous function);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/* function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouchh";
}

myBox.addEventListener("click", changeColor) */

myBox.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "tomato";
      event.target.textContent = "Ouchh";
})

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
     event.target.textContent = "Don't do it";
})

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
     event.target.textContent = "Click me";
})



myButton.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "tomato";
      event.target.textContent = "Ouchh";
})

myButton.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
     event.target.textContent = "Don't do it";
})

myButton.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
     event.target.textContent = "Click me";
})