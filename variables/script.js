//variables

/* 1- declaration   let x;
   2-  assignment    x = 100; */

   /* number */
   let age = 18;
  let price = 10.99;
  let gpa = 2.1;

  //string   - pode incluir números
  let firstName = "Alisso";

  // boolean
  let online = true;

  console.log(`You are ${age} years old`);
  console.log(`The price is $${price}`);
  console.log(`Your gpa is ${gpa}`);
  console.log(`Hello ${firstName}`);
  console.log(`Bro is online: ${online}`);

  console.log(typeof gpa); //para mostrar o tipo da variável

  /* document.getElementById("p1").textContent = firstName; */
  document.getElementById("p1").textContent = `Your name is ${firstName}`; //com texto e variável

  document.getElementById("p2").textContent = age;
  //só variável