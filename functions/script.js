// function = a section of reusable code.

function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to ${username}!`);
    console.log(`You are ${age} years old`);
    console.log(`Happy Birthday to you!`);
}

happyBirthday("Alisso", 18);

function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer);

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }

    //return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

