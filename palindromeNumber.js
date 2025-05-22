//   qusetion Palindrome Number
//  An interger is a palindrome number  when its reads same forward and backward

// number =213 // false
// nuber 212 // true

const palindrome = (x) => {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};
const result = palindrome(121);
console.log(result);
