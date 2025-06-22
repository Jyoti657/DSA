// ****
// ****
// ****
var n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}

console.log(" 2 //////////////////////////////");
//   second
for (let i = 0; i <= n; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
console.log(" 3 //////////////////////////////");
for (i = 1; i <= n; i++) {
  let row = "";
  for (j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
console.log(" 4 //////////////////////////////");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}
console.log(" 5 //////////////////////////////");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (j = 0; j <= n - i + 1; j++) {
    row += "*";
  }
  console.log(row);
}
console.log(" 6 //////////////////////////////");
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i + 1; j++) {
    row += j;
  }
  console.log(row);
}
