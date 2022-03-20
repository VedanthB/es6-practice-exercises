/* 
 Topic: const with objects

  What will be the output and why?


  we cannot reassign values to a variable declared with const

*/

const obj = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
obj = obj2;

/*
here we get an error as we are trying to change the reference of the obj 
and we can not do that with assignments with const 
*/
