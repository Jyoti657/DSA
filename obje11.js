// // var object = Object.create(null);
// // let vehicle = {
// //   wheels: "4",
// //   fuelType: "Gasoline",
// //   color: "Green",
// // };
// // let carProps = {
// //   type: {
// //     value: "Volkswagen",
// //   },
// //   model: {
// //     value: "Golf",
// //   },
// // };

// // var car = Object.create(vehicle, carProps);
// // console.log(car.model); 
// let arrayIntegers = [1, 2, 3, 4, 5];

// let arrayIntegers11 = arrayIntegers.slice(0, 4);    // [1, 2]
// let arrayIntegers21 = arrayIntegers.slice(2, 3);    // [3]
// let arrayIntegers31 = arrayIntegers.slice(4);       // [5]
// let arrayIntegers4 = arrayIntegers.slice(-3, -1);  // [3, 4]

// console.log(arrayIntegers11);
// console.log(arrayIntegers);



// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// // Remove the first two elements
// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 4); 
// // arrayIntegers1: [1, 2]
// // arrayIntegersOriginal1 (after): [3, 4, 5]

// console.log(arrayIntegers1); // Output: [1, 2]
// console.log(arrayIntegersOriginal1); // Output: [3, 4, 5]

// // Remove all elements from index 3 onwards
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3);     
// // arrayIntegers2: [4, 5]
// // arrayIntegersOriginal2 (after): [1, 2, 3]

// // Remove 1 element at index 3, then insert "a", "b", "c" at that position
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); 
// // arrayIntegers3: [4]

// // arrayIntegersOriginal3 (after): [1, 2, 3, "a", "b", "c", 5]

// first order function

// const handler = () => console.log("This is a click handler function");
// document.addEventListener("click", handler);
// const firstOrder = () => console.log("I am a first order function!");
// First-order function (does not accept or return another function)
const firstOrderFunc = () => 
    console.log("Hello, I am a first-order function");
  
  // Higher-order function (accepts a function as an argument)
  const higherOrder = (callback) => {
    console.log("heloo this");
    callback();
    
  }
    
    // callback();
  
  // Passing the first-order function to the higher-order function
  higherOrder(firstOrderFunc);