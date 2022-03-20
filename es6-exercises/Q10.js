/* 
 Topic: const with arrays

  What will be the output and why?


  we cannot reassign values to a variable declared with const
*/

const array = [1, 2, 3, 4];
console.log(array.push(55));

// returns 5,  new length of the arr after we did .push

const array2 = [1, 2, 3, 4];
array2 = array2.push(55);

// yes as we are tying to assign a new arr to the array variable and we
// can not do that because it is been declared with const
