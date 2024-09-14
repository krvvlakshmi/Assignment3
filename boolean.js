/////boolean methods

const string1="these are boolean functions";

//indexOf():returns index of given character in string
console.log(string1.indexOf('b'));

//lastindexof():returns last occurrence index of given character
console.log(string1.lastIndexOf('o'));  

let string2="hey there i'm learning javascript:)";

//startsWith()
console.log(string2.startsWith("hey"));
console.log(string2.startsWith("hii"));

//endsWith()
console.log(string2.endsWith("javascript"));
console.log(string2.endsWith(":)"));

//include()
console.log(string1.includes("boolean"));
console.log(string2.includes("learn"));


//////starts or ends with substring

console.log(string1.startsWith("these are"));
console.log(string2.endsWith("learning Javascript:)"));
console.log(string2.indexOf("there"));

string3="call back function is a function that passed as an argument to other function."
console.log(string3.lastIndexOf("function"));