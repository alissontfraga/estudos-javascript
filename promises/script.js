// Promise = An Object that manages asynchronous operations.
// Wrap a promise object arround {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// in order
// 1- walk the dog
// 2- clean the kitchen
// 3- take out the trash

function walkDog(){

    return new Promise((resolve, reject) => {
         setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You didn't walk the dog");
            }

        }, 1500);
    })
}

function cleanKitchen(){

     return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the kitchen");
                
            }
            else{
                reject("You didn't clean the kitchen");
            }

        }, 2500);
     })
    
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;

            if (trashTakenOut) {
                resolve("You take out the trash");
                
            }
            else{
                reject("You didn't take out the trash");
            }
        
        }, 500);
    })
}    
    

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()
         })   
         .then(value => {console.log(value); console.log("You finished all the chores!");
         
         });