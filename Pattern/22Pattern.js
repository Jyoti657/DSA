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

console.log(" 7 //////////////////////////////");

for (let i = 0; i <= n; i++) {
  //  space
  let row = "";
  for (let j = 0; j < n - i - 1; j++) {
    row += " ";
  }
  //   start
  for (let j = 0; j < 2 * i + 1; j++) {
    row += "*";
  }
  //  space
  for (let j = 0; j < n - i - 1; j++) {
    row += " ";
  }
  console.log(row);
}
console.log(" 8 //////////////////////////////");

for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += " ";
  }
  for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
    row += "*";
  }

  for (let j = 0; j < i; j++) {
    row += "";
  }
  console.log(row);
}

console.log(" 9 //////////////////////////////");

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i - 1; j++) {
    row += " ";
  }

  for (let j = 0; j < 2 * i + 1; j++) {
    row += "*";
  }
  for (let j = 0; j < n - i - 1; j++) {
    row += " ";
  }
  console.log(row);
}
for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += " ";
  }
  for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
    row += "*";
  }

  for (let j = 0; j < i; j++) {
    row += "";
  }
  console.log(row);
}

console.log(" 10 //////////////////////////////");
for (let i = 0; i <= 2 * n - 1; i++) {
  let row = "";
  let start = i;
  if (i > n) start = 2 * n - i;
  for (let j = 1; j <= start; j++) {
    row += "*";
  }
  console.log(row);
}
console.log(" 11 //////////////////////////////");

for (let i = 1; i <= 2 * n - 1; i++) {
  let start = i % 2 === 0 ? 0 : 1;
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += start;
    start = 1 - start;
  }
  console.log(row);
}

console.log(" 12 //////////////////////////////");
for (let i = 0; i <= n; i++) {
  let space = 2 * (n - 1);
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  for (let s = 1; s <= 2 * (n - i); s++) {
    row += " ";
  }

  for (let j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}
