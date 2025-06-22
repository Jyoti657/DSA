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
//   Reason the beind this the object take
// // the last value of the key if the key is same
// in the object
//   the output is 456
//   because the object is reference type

//  question 4
//    what is the differnce between JSON.strigify and JSON.parse

const user={
    name: "mourya jyoti",
    age: 25,
    isActive: true,
}
console.log(JSON.stringify(user));

console.log(JSON.parse(JSON.stringify(user)));

//using  the JSON.stringify converts a JavaScript object into a JSON string,
// while JSON.parse converts a JSON string back into a JavaScript object.
// JSON.stringify is used to serialize an object into a string format, 
//  storing the the loacal


//  question5 
//   what is the output of the following code
console.log([..."hello"]);
//   this spread with string the char
//   the output is ['h', 'e', 'l', 'l', 'o']

//  question 6
 const user2={user:"jay",age:21}
 const user3={adamin:true,...user2}
 console.log(user3);
 