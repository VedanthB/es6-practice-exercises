/* 
 Topic: Short arrow function/ Lamda function / Fat arrow function

 What will be the output?

*/

// Can you convert below arrow function into function declaration (normal function) format?

// with no parameter
const getNum = () => 2;

// ES5 function
function getNum() {
  return 2;
}

// with one parameter
// Function
const isOne = (num) => num == 1;
// HW: === vs == in JavaScript, === checks if both the values are of the same datatype , == just checks if the values are equal

// Calling the function
console.log(isOne(12));

function isOne(num) {
  return num === 1 ? true : false;
}

//with arrow function
const isOne = (num) => (num === 1 ? true : false);

function isOne(num) {
  console.log(num);
}
//with arrow function
const isOne = (num) => console.log(num);

const isBigger = (a, b) => a > b;
console.log("Is 2 bigger than 3?", isBigger(2, 3));

// How would you write this with the least amount of characters
function Add22andReturn(num) {
  let sum = 0;
  sum = num + 22;
  return sum;
}

// Version 1
const Add22andReturn = (num) => {
  let sum = 0;
  sum = num + 22;
  return sum;
};

// Version 2
const Add22andReturn = (num) => {
  let sum = 0;
  sum = num + 22;
  return sum;
};

// Version 3
const Add22andReturn = (num) => {
  return num + 22;
};

// Topic: Short arrow function while returning an object / object literal syntax

const giveMeAnObject = (a) => ({ value: a });

console.log(giveMeAnObject(5));
