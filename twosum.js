// question for the two sum number

// given the array of integer nums and integer target
// [2,3,4,5,,8]=target is =9
// outpu the number is =[index 2,3] number[4,5]
// [2, 4, 5, 6, 7, 8, 9];
const sumTwo = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

const result = sumTwo([2, 4, 5, 6, 7, 8, 9],9);
console.log(result);

