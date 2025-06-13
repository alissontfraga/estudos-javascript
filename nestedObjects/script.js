// nested objects = Objects inside of other Objects.
// allows you to represent more complex data structures
// child object is enclosed by a parent object
// Person{Adress{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

/* const person = {
    fullName: "Alisso aly",
    age: 19,
    isStudent: true,
    hobbies: ["guitar", "games", "workout"],
    address: {
        street: "rua dos bobos",
        city: "a esquerda",
        country: "brasil",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property]);
    //to loop through the properties 
}
 */

class Person{
    constructor(name, age, ...adress){
        this.name = name;
        this.age = age;
        this.adress = new Address(...adress);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("alisso", 19, "rua dos bobos",
     "a esquerda", "brasil");

     console.log(person1.address.country);
     


