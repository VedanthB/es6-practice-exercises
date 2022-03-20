/* 
 Topic: Rest and Spread

 What will be the output?

*/

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// providing a way to represent variadic functions in JavaScript.

const restExample = (a, ...rest) => {
  console.log(a, rest);
};

console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10));

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
