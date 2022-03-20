/* 
 Topic: Block scope & functional scope & TBZ (Temporal dead zone)

  What will be the output and why?
*/

let a = 100;

function App() {
  a = 42;
  console.log("1", a); // 42 (block/ fucntion scope)
}

App();
