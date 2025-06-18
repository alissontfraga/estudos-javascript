// Error = An object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection

// try { } = encloses code t hat might potentially cause an error
// catch { } = catch and handle any thrown errors from try { }
// finally { } = (optional) Always executes. Used for clean up, ex. close files, close connections, release resources

try {
    console.log(x);
// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS
} catch (error) {
    console.error(error);
    
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
    
}
console.log("you have reached the end!");

//

try {
    
const dividend = Number(window.prompt("Enter a dividend: "));
const divisor = Number(window.prompt("Enter a divisor: "));

if(divisor == 0){
    throw new Error("You can't divide by zero!");
}
if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number!")
    
}

const result = dividend / divisor ;
console.log(result);

} catch (error) {
    console.error(error);
    
}
console.log("You have reached the end!");





