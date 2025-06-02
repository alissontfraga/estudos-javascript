// string methods = allow you to manipulate and work with text

// .charAt()
// .indexOf(" ")     primeiro
// .lastIndexOf("o") ultimo
// .length
// .trim()  remover espaços em branco
// .toUpperCase
// .toLowerCase
// .repeat()
// .startsWith(" ")      importante para se tiver espaço vazio
// .endsWith(" ")
// .includes(" ")          espaço vazio



let username = "Alisso";

 //console.log(username.charAt(0));
 //console.log(username.indexOf("o"));
 //console.log(username.length);
 //console.log(username.trim());
 //console.log(username.toUpperCase);
 //console.log(username.toLowerCase);
 //console.log(username.repeat(3));
 //console.log(username.toLowerCase);
 //console.log(username.startsWith(" "));
 //console.log(username.endsWith(" "));
 //console.log(username.includes(" "));

let phonenumber = "123-456-7890";

//phonenumber = phonenumber.replaceAll("-", "");  //eliminar os -

phonenumber.padStart(15, "0");   //adicionar 15 zeros no inicio
phonenumber.padEnd(15, "0"); // no final

