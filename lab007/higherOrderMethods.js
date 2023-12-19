///////////////////////////////
//////HIGHER ORDER METHODS/////
///////////////////////////////

////////// PROBLEM 1 //////////

// Do not edit the code below.
const mixedNumbers = [6, 3, 1, 7, 5, 2, 6, 8, 9, 4, 2, 7, 9, 3, 1, 8, 4, 3];
// Do not edit the code above.

/*
  Use the filter method on mixedNumbers to make a new array of just the even numbers.
  The filter function takes a callback with the parameters
  function(element, index, wholeArray){}  Function Form
  (element, index, wholeArray)=>{}    Arrow Form
*/

//Code Here
let evenNumbers = mixedNumbers.filter(a => a % 2 == 0);
//console.log(evenNumbers);


////////// PROBLEM 2 //////////

// Do not edit the code below.
const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];
// Do not edit the code above.

/*
  Use the map method on the prices array to calculate a new array of post-tax prices.
  Use a 7% tax rate.
  Math reminder! To calculate the price after tax, multiply the price by 1 plus the taxRate as a decimal.
  Example: if tax is 7%, the price afterTax could be calculated like this: afterTax = price * 1.07) 
  The map function also takes a callback with the parameters
  function(element, index, wholeArray){}  Function Form
  (element, index, wholeArray)=>{}    Arrow Form
*/

//Code Here
let postTaxPrices = prices.map(price => price * 1.07);



////////// PROBLEM 3 //////////

// Do not edit the code below.
const populations = [8175133, 3792621, 2695598, 2100263];
// Do not edit the code above.

/*
  Use the reduce method to calculate the sum of all the populations in the array.
  The reduce function has a slightly different setup for it's callback.
  function(runningTotal, curElement, curIndex, wholeArray){} Function Form
  (runningTotal, curElement, curIndex, wholeArray)=>{} Arrow Form
*/

//Code Here
let totalPopulation = populations.reduce((acc, currVal) => acc + currVal, 0);
//console.log(totalPopulation);


////////// PROBLEM 4 //////////

// Do not edit the code below.
const monstersInYourPocket = [{ "monster": "Bulbabunny", "CP": 156 }, { "monster": "Bulbabunny", "CP": 135 },
{ "monster": "Bulbabunny", "CP": 250 }, { "monster": "Ponylopse", "CP": 277 }, { "monster": "Ponylopse", "CP": 184 },
{ "monster": "Pikadoughnet", "CP": 207 }, { "monster": "Bulbabunny", "CP": 139 }, { "monster": "Pikadoughnet", "CP": 47 },
{ "monster": "Pikadoughnet", "CP": 175 }, { "monster": "WaterHorsia", "CP": 26 }, { "monster": "Ponylopse", "CP": 19 },
{ "monster": "Pikadoughnet", "CP": 218 }, { "monster": "Charaflier", "CP": 101 }, { "monster": "WaterHorsia", "CP": 96 },
{ "monster": "Pikadoughnet", "CP": 253 }, { "monster": "Sandmush", "CP": 146 }, { "monster": "Bulbabunny", "CP": 247 },
{ "monster": "Charaflier", "CP": 55 }, { "monster": "Bulbabunny", "CP": 72 }, { "monster": "Pikadoughnet", "CP": 300 },
{ "monster": "Sandmush", "CP": 262 }, { "monster": "Sandmush", "CP": 25 }, { "monster": "Charaflier", "CP": 215 },
{ "monster": "Ponylopse", "CP": 125 }, { "monster": "Bulbabunny", "CP": 178 }];
// Do not edit the code above.

/*
  Now we're going to ramp these up a little bit.
  Instead of just arrays of numbers, we are going to have array of objects that we want to use map, filter, and reduce with.
  Use the filter method to return only the monsters that have a CP of over 200.
*/

//Code Here
let myStrongest = monstersInYourPocket.filter(a => a.CP > 200);
//console.log(myStrongest);


////////// PROBLEM 5 //////////

// Do not edit code below.
const orders = [{ "price": 15, "tax": 0.09 }, { "price": 42, "tax": 0.07 }, { "price": 56, "tax": 0.11 },
{ "price": 80, "tax": 0.11 }, { "price": 69, "tax": 0.06 }, { "price": 68, "tax": 0.14 },
{ "price": 72, "tax": 0.14 }, { "price": 51, "tax": 0.09 }, { "price": 89, "tax": 0.15 },
{ "price": 48, "tax": 0.13 }];
// Do not edit code above.

/*
  Use a higher order method to get all the order totals after adding in the sales tax 
  (given to you as a tax rate, hint: you'll need to do some multiplication). 
  Your answer should be an array of numbers, one total for each order.
*/

let orderTotals = orders.map(order => order.price * (1 + order.tax));// Code here
//console.log(orderTotals);


////////// PROBLEM 6 //////////

// Do not edit the code below.
const purchases = [{ "owner": "Barry", "price": 103 }, { "owner": "Bob", "price": 75 },
{ "owner": "Bob", "price": 73 }, { "owner": "Barry", "price": 57 }, { "owner": "Barry", "price": 128 },
{ "owner": "Bob", "price": 119 }, { "owner": "Barry", "price": 133 }, { "owner": "Barry", "price": 27 },
{ "owner": "Barry", "price": 138 }, { "owner": "Bob", "price": 68 }, { "owner": "Bob", "price": 50 },
{ "owner": "Barry", "price": 9 }, { "owner": "Bob", "price": 123 }, { "owner": "Bob", "price": 135 },
{ "owner": "Barry", "price": 30 }, { "owner": "Barry", "price": 129 }, { "owner": "Barry", "price": 38 },
{ "owner": "Bob", "price": 133 }, { "owner": "Barry", "price": 109 }, { "owner": "Bob", "price": 115 }];
// Do not edit the code above.

/*
  Use a high order method to create to get the sum of bobsTotal.
*/

let bobsTotal = purchases.filter(purchase => purchase.owner === "Bob")
    .reduce((total, purchase) => total + purchase.price, 0);
console.log(`Bob's total is ${bobsTotal}`);


///////////////////////////////
/////////DESTRUCTURING/////////
///////////////////////////////

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
    color: 'red',
    make: 'toyota',
    model: 'tacoma',
    year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting(obj) {
    //Code Here

    // Do not edit the code below.
    return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
    // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here



////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here



////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }
  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here



////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here


///////////////////////////////
////////SPREAD OPERATOR////////
///////////////////////////////

////////// PROBLEM 1 //////////

/* Use the spread operator to create a copy of the product object below.  Name the copy "productCopy" */

let product = {
    id: 54,
    name: 'santa hat',
    price: 6,
    imageUrl: 'https://i.ebayimg.com/images/g/9T4AAOSwbmdZf2jN/s-l640.jpg'
}

// code here




////////// PROBLEM 2 //////////

/* Use the spread operator to create a copy of the colors array below.  Name the copy "colorsCopy" */

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// code here




////////// PROBLEM 3 //////////

/* Here we have an array with 3 numbers, and a function that takes in 3 numbers as arguments.  Invoke addNums, and use the spread operator to pass in the numbers from the numbers array; and store the value to a variable named result */

let numbers = [4, 6, 10];

function addNums(num1, num2, num3) {
    return num1 + num2 + num3;
}

// code here


////////// PROBLEM 4 //////////

/* Using the spread operator, concatentate the two arrays below and save it to a variable named "combinedArrays" */

let arr1 = ['dog', 'chameleon', 'monkey'];
let arr2 = ['bear', 'tiger', 'liger'];

// code here