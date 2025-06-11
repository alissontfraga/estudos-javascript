// object = a collection of related properties and/or methods 
//  can represent real world objects (people, products, places)
//   object = {key: value,
//             function()}

const person = {
    firstName: "alisso",
    lastName: "TF",
    age: 19,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am alisso")},
}

console.log(person.firstName);
console.log(person.lastName);

person.sayHello();