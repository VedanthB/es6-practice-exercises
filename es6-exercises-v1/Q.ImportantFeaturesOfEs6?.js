/* 
 Question:  List out important features of es6?

 Destructuring is an expression available in ES6 which enables a succinct and 
 convenient way to extract values of Objects or Arrays and place them into distinct variables.

*/

// ** 1. Template Strings **

// Template literals are string literals allowing embedded expressions

let greeting = `Hello World!`;

// String Substitution
let name = "Alex";
console.log(`Hi, ${name}!`); // Output: "Hi, Alex!"

// Multiline Strings
let greeting1 = "Hello \
World";

// Tagged Templates
fn`Hello ${you}! You're looking ${adjective} today!`;

// **2. Spread Operator**

// Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6

console.log(sum.apply(null, numbers)); // 6

// 2.1. Copying an array

let fruits = ["Apple", "Orange", "Banana"];

let newFruitArray = [...fruits];

console.log(newFruitArray); // ['Apple','Orange','Banana']

// 2.2. Concatenating arrays

let arr1 = ["A", "B", "C"];

let arr2 = ["X", "Y", "Z"];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

// 2.3. Spreading elements together with an individual element

let fruits2 = ["Apple", "Orange", "Banana"];

let newFruits = ["Cherry", ...fruits2];

console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']

// 2.4. Spreading elements on function calls

let fruits3 = ["Apple", "Orange", "Banana"];

var getFruits = (f1, f2, f3) => {
  console.log(`Fruits: ${f1}, ${f2} and ${f3}`);
};

getFruits(...fruits3); // Fruits: Apple, Orange and Banana

// 2.5. Spread syntax for object literals

var obj1 = { id: 101, name: "Jhon Doe" };
var obj2 = { age: 25, country: "USA" };

const employee = { ...obj1, ...obj2 };

console.log(employee); //{ "id": 101, "name": "Jhon Doe", "age": 25, "country": "USA" }

// 3. Sets

// Sets are a new object type with ES6 (ES2015) that allow to create collections of unique values.
// The values in a set can be either simple primitives like strings or integers,
// but more complex object types like object literals or arrays can also be part of a set.

let animals = new Set();

animals.add("🐷");
animals.add("🐼");
animals.add("🐢");
animals.add("🐿");
console.log(animals.size); // 4
animals.add("🐼");
console.log(animals.size); // 4

console.log(animals.has("🐷")); // true
animals.delete("🐷");
console.log(animals.has("🐷")); // false

animals.forEach((animal) => {
  console.log(`Hey ${animal}!`);
});

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
console.log(animals.size); // 0

// Example 02: Pass-In Arrray
let myAnimals = new Set(["🐷", "🐢", "🐷", "🐷"]);

myAnimals.add(["🐨", "🐑"]);
myAnimals.add({ name: "Rud", type: "🐢" });
console.log(myAnimals.size); // 4

myAnimals.forEach((animal) => {
  console.log(animal);
});

// 🐷
// 🐢
// ["🐨", "🐑"]
// Object { name: "Rud", type: "🐢" }

// Example 03: Strings are a valid iterable so they can also be passed-in to initialize a set
console.log("Only unique characters will be in this set.".length); // 43

let sentence = new Set("Only unique characters will be in this set.");
console.log(sentence.size); // 18

// Example 04: On top of using forEach on a set, for…of loops can also be used to iterate over sets
let moreAnimals = new Set(["🐺", "🐴", "🐕", "🐇"]);

for (let animal of moreAnimals) {
  console.log(`Howdy ${animal}`);
}

// Howdy 🐺
// Howdy 🐴
// Howdy 🐕
// Howdy 🐇
