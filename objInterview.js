//   question 1

//  what is the outPut for this

const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj);

//   Reason the beind this the object take
// // the last value of the key if the key is same
// in the object

//  question 2
//  create a  function  multilply(obj) that multiplies all
//  numneric property values of the nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "Hello world",
};
console.log(nums);
multilply(nums);

// const multilply = (obj) => {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };
function multilply(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

console.log(nums);

// key is not declared (let, const, or var is missing).

// In arrow functions, strict mode is 
// more enforced and doesn’
// t tolerate undeclared variables.

// question 3
//   what is the outpu of the following code

const a={}
const b={k:"hello"}
const c={k:"morning"}

a[b]=123;
a[c]=456;
 console.log(a[c])