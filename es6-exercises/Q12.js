/* 
 Topic: Default parameters

 What will be the output?

*/
const defaultExample = (a, b) => a + b;

console.log(defaultExample(2));

const defaultExample3 = (a, b) => {
  if (b === undefined) {
    b = 5;
  }
  return a + b;
};

// Instead
const defaultExample2 = (a, b = 5) => a + b;

console.log(defaultExample3(2, 4)); // 6
console.log(defaultExample2(3)); // 8

const defaultExample4 = (a, b = 5, c) => a + b + c;

console.log(defaultExample4(1, 2, 3));
// console.log(defaultExample4(1, , 3));
