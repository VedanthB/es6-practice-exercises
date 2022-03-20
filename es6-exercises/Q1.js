/* 
 Topic: Block scope & functional scope


 What will be the output and why?
*/

if (true) {
  let a = 2;
  // var a = 2;
}
console.log(a);

/* 
  a can not be accessed as it is declared inside the if block and its scope is 
  limited to the body of the block, and in the example above we are trying to 
  access a outside the block 
*/
