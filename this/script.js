// this = reference to the object where THIS is used 
//  (the object depends on the immediate context)
//   person.name = this.name
// this don't work with arrow function

const person = {
    firstName: "alisso",
    lastName: "TF",
    age: 19,
    isEmployed: true,
    favFood: "chicken",
    sayHello: function(){console.log(`Hi! I am ${this.firstName}`)},
    eat: function(){console.log(`${this.firstName} is eating ${this.favFood}`)},
}

console.log(person.eat());