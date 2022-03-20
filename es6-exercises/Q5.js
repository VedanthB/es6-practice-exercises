/* 
 Topic: Block scope & functional scope & TBZ (Temporal dead zone)

  What will be the output and why?


  TBZ (Temporal dead zone) : variables declared with let and const , 
  when are tried to access before declaration throw a reference error in the console.
  with var the console returns undefined. (because of hoisting)
*/

function something() {
  console.log(a); // cannot access before initialization (TBZ)
  let a = 2;
}

something();

/* 
TBZ (Temporal dead zone) : variables declared with let and const , 
  when are tried to access before declaration throw a reference error in the console.
  with var the console returns undefined. (because of hoisting)
*/
