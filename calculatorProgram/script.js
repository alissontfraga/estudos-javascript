
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    animateDisplay();
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        if (/^[\d+\-*/().\s]+$/.test(display.value)) {
            display.value = Function('"use strict"; return (' + display.value + ')')();
        } else {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
    animateDisplay();
}
function animateDisplay() {
    display.classList.add("animate");
    setTimeout(() => {
        display.classList.remove("animate");
    }, 200); 
}
