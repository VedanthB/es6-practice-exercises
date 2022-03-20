/* 
 Topic: Block scope & functional scope & TBZ (Temporal dead zone)

  What will be the output and why?


  TBZ (Temporal dead zone) : variables declared with let and const , 
  when are tried to access before declaration throw a reference error in the console.
  with var the console returns undefined. (because of hoisting)
*/

let a = 100;
function App() {
  console.log("1", a); // Cannot access 'a' before initialization (because of TDZ)
  let a = 42;
  console.log("2", a); // 42
  {
    let a = 100;
  }
  console.log("3", a); // 42
}
