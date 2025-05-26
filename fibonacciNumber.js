// Fibonacci Number
// A Fibonacci number is a number in the Fibonacci sequence, which is defined by the recurrence relation:
// F(n) = F(n-1) + F(n-2), with seed values F(0) = 0 and F(1) = 1.
// The Fibonacci sequence starts as follows:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//   the arr[i-1]+[i-2]

const fib = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

 const result=fib(10);
 console.log(result)

 const recursionFib=(n)=>{
    if(n<=1) return n;
    return recursionFib(n-1)+recursionFib(n-2);
 }
 const recursionResult=recursionFib(15);
 console.log(recursionResult)