/* 
 Topic: Block scope & functional scope & TBZ (Temporal dead zone)

  What will be the output and why?


  hoisting : because of hoisting we can access functions and variables before they are declared 
*/

function something() {
  // a = undefined
  console.log(a);
  var a = 2;
}

something();

/*
  a is undefined because it is declared using var and because of hoisting if we 
  try to access the the value before its init then we get an error undefined 
  , if this was declared with let we would have gotten cannot access before init
  */
