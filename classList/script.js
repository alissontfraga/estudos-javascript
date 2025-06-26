// classList = Element property in JavaScript used to interact with an element's list of classes (CSS classes)
// Allows you to make reusable classes for many elements across your webpage.
// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myh1 = document.getElementById("myh1");
const mybutton = document.getElementById("mybutton");

mybutton.classList.add("enabled");
mybutton.classList.remove("enabled");

mybutton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});
mybutton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

mybutton.classList.add("enabled");
mybutton.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += " aa";
    } else {
         event.target.classList.replace("enabled", "disabled");
    }
});

myh1.classList.add("enabled");
myh1.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += " aa";
    } else {
         event.target.classList.replace("enabled", "disabled");
    }
});