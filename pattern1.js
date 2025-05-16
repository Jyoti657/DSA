// question 1 star
// ****
// ****
// ****

for (i = 0; i <= 5; i++) {
  let row = "";

  for (j = 0; j <= 5; j++) {
    row += "*";
  }
  console.log(row);
}

// this another way

for (let i = 0; i < 6; i++) {
  console.log("*".repeat(3));
}
