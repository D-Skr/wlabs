/// ////////////// PROBLEM 1 ////////////////////

// Modify the function below to return the firstName property of the person object.

function personName() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person.firstName; // Code here
}

/// ////////////// PROBLEM 2 ////////////////////

// Modify the function below to return the location property of the person object.  Use bracket notation

function personLocation() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person.location; // Code Here
}

/// ////////////// PROBLEM 3 ////////////////////

/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here

const favoriteThings = {
  band: 'Run CMD',
  food: 'Cooked',
  person: 'Jesus',
  book: 'Bible',
  movie: 'Back To The Future',
  holiday: 'Programmer\'s day'
}

/// ////////////// PROBLEM 4 ////////////////////

//Create a variable called userFirstName.  Assign it the value of the person's firstName property, using dot notation.

const person = {};

person['firstName'] = 'sally';

// Code Here

const userFirstName = person.firstName;

/// ////////////// PROBLEM 5 ////////////////////

// In the function updateUser, change the user parameter's name to Ryan, change the value of pwHash to superSafe
// and change the value of username to ryan2020. After you have updated all the values return the object.

// The existing user looks like this:
// const someUser = {
//   name: 'Sally Rally',
//   pwHash: 'U+Ldlngx2BYQk',
//   username: 'SallyRally801'
// };

function updateUser(user) {
  // Code Here
  user = {
    name: 'Ryan',
    pwHash: 'U+Ldlngx2BYQkU+Ldlngx2BYQkU+Ldlngx2BYQk',
    username: 'ryan2020'
  }
  return user;
}

/// ////////////// PROBLEM 6 ////////////////////

// In the function updateProfile, update the value of the given property to the given value. Return the updated object.
//
// The existing profile looks like this:
// const userProfile = {
//    email: 'test@google.com',
//    pwHash: 'V-9n5bQyu81z0',
//    location: 'Denver, CO'
// }
//
// So updateProfile(userProfile, 'email', 'blah@yahoo.com') would update the email to 'blah@yahoo.com'

function updateProfile(profile, property, value) {
  // Code here
  profile.property = value;
  return profile;
}

/// ////////////// PROBLEM 7 ////////////////////

// Inside the maxedOut function, loop over the given object using a for...in loop
// to change all the object property values to "max".
// Return the updated object.


function maxedOut(obj) {
  for (i in obj) {
    // i is index
    obj[i] = 'max';
  }
  return obj;
}
// check
// let fruits = { apple: 6, berry: 12, cherry: 8 };
// maxedOut(fruits);
// console.log(fruits);

/// ////////////// PROBLEM 8 ///////////////////

/*
  Write a function called double that takes in an object.
  Write a for...in loop that loops over the object and changes every value to be itself multiplied by 2.
  Return the updated object.
*/

//Code Here
function double(obj) {
  for (i in obj) {
    obj[i] *= 2;
  }
  return obj;
}
// check the function
// let fruits = { apple: 6, berry: 12, cherry: 8 };
// double(fruits);
// console.log(fruits);


/// ////////////// PROBLEM 9 ///////////////////

/*
  Write a function called removePassword that takes in an object.
  Delete the property password and return the object.
*/

//Code Here
function removePassword(user) {
  delete user.password;
  return user;
}

/// ////////////// PROBLEM 10 ////////////////////

// Here we have a function called getValues that will take in an object.
// Return an array containing all the object's values.

function getValues(obj) {
  return Object.values(obj);
}
// check the function
// let fruits = { apple: 6, berry: 12, cherry: 8 };
// const val = getValues(fruits);
// console.log(val);

/// ////////////// PROBLEM 11 ////////////////////

// Use the spread operator to copy the given array.
// Then, add the string "copy" to the end of the copy and return the copy.

function copyArray(arr) {
  const deepCopy = { ...arr };
  return deepCopy;
}

/// ////////////// PROBLEM 12 ////////////////////

// Use the spread operator to copy the given object.
// Then, add a new key-value pair {copy: true} to the end of the copy and return the copy.

function copyObject(obj) {
  let deepCopy = { ...obj };
  deepCopy.copy = true;
  return deepCopy;
}

//check the function
// let fruits = { apple: 6, berry: 12, cherry: 8 };
// const val = copyObject(fruits);
// console.log(val);

/// ////////////// PROBLEM 13 ////////////////////

// Do not edit the code below.
const animalCount = {
  cats: 2,
  dogs: 5,
  mice: 0,
};
// Do not edit the code above.

// Use object destructuring syntax to create variables for each of the properties of the
// animalCount object.

const [animal0, animal1, animal2] = Object.keys(animalCount); //for keys only
//const [animal0, animal1, animal2] = Object.entries(animalCount); // for key:value pairs
//console.log(animal0);

/// ////////////// PROBLEM 14 ////////////////////

// Write a function called addition that takes in an array containing 2 numbers.
// In the function, use array destructuring to create variables for each of the numbers.
// Then return the sum of the two numbers.

function addition(array) {
  const [a, b] = array;
  return a + b;
}

/// ////////////// PROBLEM 15 ////////////////////

// Create a function called zooAnimals that will take an object parameter
// The object passed to this function will have the property names lion, tiger, and bear
// The values of these properties will be a number representing the count of that animal in the zoo
// Using object destructuring, return the total sum of the counts of these animals

function zooAnimals(object) {
  const [lion, tiger, bear] = Object.values(object);
  return lion + tiger + bear;
}
//check
//console.log(zooAnimals(animalCount)); //7

/// ////////////// PROBLEM 16 ///////////////////

// Do not edit the code below.
const myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true,
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true,
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true,
    },
  ],
};
// Do not edit the code above.

/*
  Above is some information about my car. As you can see, I am not the best driver.
  I have caused a few accidents.
  Please update this driving record so that I can feel better about my driving skills.
    1. Write a function called recordCleaner.
    2. Loop over the accidents array (which is a property of the myCar object).
    3. For each accident, change atFaultForAccident from true to false.
*/

function recordCleaner(anyCar) {
  for (accident of anyCar.accidents) {
    accident.atFaultForAccident = false;
    //quick check
    //console.log(accident);
  }
}

// recordCleaner(myCar);
// console.log(myCar);