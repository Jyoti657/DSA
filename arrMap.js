//  this code maps an array to a new array with each element incremented by 1
const arr = [2, 3, 44, 5, 6, 7, 8, 9, 10];

const mapResult = arr.map((num) => {
  return num * 2;
});

console.log(arr);

console.log(mapResult);

const forEachres = arr.forEach((num, i) => {
arr[i] = num * 2;
});
console.log(forEachres);


// map is an array method that creates a new array by applying a function to each element of the original array.
//  It does not modify the original array but returns a new array containing the results of calling the provided 
//  function on every element

// null is a deliberate assignment value that means "no value" or "empty." 
// It is used when you want to explicitly indicate that a variable or object property should have no value or is intentionally left blank.

// undefined means a variable has been
//  declared but has not been assigned any value. It is the default state of declared variables in JavaScript