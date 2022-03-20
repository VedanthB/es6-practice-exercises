/* 
 Topic:  Dynamic fields in an object/computed property syntax

 What will be the output?

*/

let key = "ram";
const obj = { [key]: 122 };
console.log(obj);

let aaloo = 1;
let bhaaloo = 2;

/* 
 Topic:  Object literals/Shorthand property value

 What will be the output?

*/

const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo };
console.log(obj1);
const obj2 = { aaloo, bhaaloo };
console.log(obj2); // { aaloo: 1, bhaaloo: 2}

/* 
 Topic:  Template Literal

 What will be the output?

*/

let name = "Ved";
let line = "Helloo " + name + " !";
console.log(line);

const helloTemp = `Hello ${name} !`;
console.log(helloTemp);

const giveMeFive = () => 5;
const line2 = `Hey, my roll is ${giveMeFive()}`;
console.log(line2);

// Question: variable 5 // "odd" ->> write this function, using arrow
// Question: use this function in a sentence using template literal

const oddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");
const res = `The number 5 is ${oddOrEven(5)} ${name}`;
