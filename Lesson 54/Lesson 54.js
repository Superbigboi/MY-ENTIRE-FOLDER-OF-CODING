let myArray = [3, 2, 5 , 6, 7,8,9,10,20,24,21,31,52,61,14,12,6,4,0,27,25];

let sum = myArray.reduce((a, b) => {
  return a + b;
});

console.log(sum);


let array = [];
for (let i = 1; i <= 100; i++) {
    // Check if the number is odd
    if (i % 2 === 1) {
    // Add the number to the array
    array.push(i);
    }
}
// Create an empty array
let arrg = [];


// Iterate over the numbers from 1 to 10
for (let i = 3; i <= 10; i++) {
  // Check if the number is odd
  if (i % 2 === 1) {
    // Add the number to the array
    arrg.push(i);
  }
}

// Log the array
console.log(arrg);