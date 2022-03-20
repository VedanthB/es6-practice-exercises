/* 
 Topic: const with objects

  What will be the output and why?


  we cannot reassign values to a variable declared with const

*/

const obj = { a: 1, b: 2 };
obj.a = 22;

// no error as with objects, js stores the reference the the object not the object
// itself and we are just assigning 22 to the same obj here
