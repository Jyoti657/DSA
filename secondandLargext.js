//   find the second largest number in an array

const arr = [1, 2, 3, 4, 56, 78, 90];

// we will crete a function that will find the second largest number in an array
const findSecondlargest = (arr) => {
  let largest = -1;
  let secondLar = -2;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLar = largest;

      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLar) {
      secondLar = arr[i];
    }
  }
  return secondLar;
};
console.log(findSecondlargest([1, 2, 3, 4, 56, 78, 90]));

const seocndlargest = (arr) => {
  let lar = -1;
  let secLar = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > lar) {
      secLar = lar;
      lar = arr[i];
    }
    else if (
      arr[i]>secLar && arr[i]!==lar
    ){
      secLar=arr[i];
    }
  }
  return secLar;
};
