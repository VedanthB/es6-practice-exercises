/* 
 Question:  Can you give an example for destructuring an object or an array?

 Destructuring is an expression available in ES6 which enables a succinct and 
 convenient way to extract values of Objects or Arrays and place them into distinct variables.

*/

/*
Array destructuring
--> Variable assignment.
--> Swapping variables.
*/

// --> Variable assignment.
const array = ["ved", "moksh", "sheetal"];
const [me, brother, mother] = array;

console.log(me); // "ved"
console.log(brother); // "moksh"
console.log(mother); // "sheetal"

// --> Swapping variables
let a = 1;
let b = 5;

[a, b] = [b, a];
console.log(a); // 5
console.log(b); // 1

/*
Object destructuring
--> Variable assignment.
*/

// --> Variable assignment.

// Variable assignment.
const obj = { x: 42, y: true };
const { x, y } = obj;

console.log(x); // 42
console.log(y); // true
