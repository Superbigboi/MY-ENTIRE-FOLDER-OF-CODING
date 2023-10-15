/* Initalizing the array "colors" */
let colors = ['blue','red','green'];

// Creating an string to attach to a variable
let myColor = "purple";

/* Creating a set using the array "colors" */
let SharpColors = new Set(colors); 



/* add is used to add variables to sets (i added the variable MyColor (the string) to SharpColors)*/
SharpColors.add(myColor); 

/* is also works for strings */
SharpColors.add("yellow");
console.log(SharpColors);

// Creating another set or something
let correctColors = SharpColors.values();
console.log(correctColors);

// Creating a map
let items = new Map([["chairs", 500],["Tables",450],["Cups",100]]);
console.log("items is below this")
console.log(items);

// adding a value with the set() method
items.set("baskets",840);


// Checking the value of "Tables"
let ourTables = items.get('Tables');
console.log(ourTables);

// Deleting an item with the delete method
let deleteItems = items.delete("baskets")

// Checking the amount of items in the array items
let checkItems = items.size;
console.log(checkItems);

// Checking if "chairs" exists with has method
let hasItems = items.has("chairs");
console.log(hasItems);

// Checking if "chairs" exists with has method
let clearItems = items.clear();
console.log("what is below this is items but cleared")
console.log(items);

let arrayType = [1,2];
console.log(typeof arrayType);

let x = 20;
let xx = x.toString();

let y = 10;
let yy = y.toString();
let sum = xx+yy;

console.log(sum);

let myName = "Michael";
console.log(myName);

let price = new Map([["chairs", "red"],["Tables","blue"],["Cups","green"]]);
console.log(price);

cups = price.get('Cups');
console.log(cups);
