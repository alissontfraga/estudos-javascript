
const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        
        if(guess < answer){
            window.alert("Too low! Try again!");
        }
        else if(guess > answer){
        window.alert("Too high! try again!");
        }
        else{
        window.alert(`Correct! the answer was ${answer}. It took ${attempts} attempts.`);

            running = false;
        }
    }
    

}