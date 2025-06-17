// setTimeout() = function in javascript that allows you to schedule the execution of a function after an amount of time (miliseconds)
//times are aproximate (varies based on the workload of the Javascript runtime env.)

// setTimeout(callback, delay);
//clearTimeout(timeoutId) = can cancel a timeout before it triggers

// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

function sayHello(){
    window.alert("Hello");
}

//setTimeout(sayHello, 3000);


let timeoutId;

function startTimer(){
   timeoutId = setTimeout(() => window.alert("Hello"), 3000);
   console.log("STARTED");
   
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
    
}