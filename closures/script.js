// closure = a function defined inside of another function, the inner function has access to the variables and scope of the outer function.
//allow for private variables and state maintance //private variables
//used frequently in JS frameworks: React, Vue, Angular

function outer(){

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}


function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    return {increment};
}

const counter = createCounter();

counter.increment();