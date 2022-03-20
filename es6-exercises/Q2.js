/* 
 Topic: Block scope & functional scope

  What will be the output and why?
*/

let a = 42;
{
  let a = 100;
}
console.log(a); // 42

// output : 422

/* 
we are accesing the a that is defined outside the block where a = 100, in 
the global space a is 42 and in the block a is 100
*/
