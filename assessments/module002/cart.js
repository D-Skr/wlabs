///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((sum, item) => item.price + sum, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    cartTotal *= 1 - couponValue;
    cartTotal *= tax + 1;
    return cartTotal;
}
console.log(calcFinalPrice(100, 0.2, 0.05)); //84

//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
    Customer object should have 
        unique ID (number), 
        email (string), 
        password hash (string), 
        name (string), 
        phone (string), 
        address (string).
    With email and password user can login, with name, phone, address user can order delivery.
    Unique ID required to store client's data in DB.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObject = {
    ID: 1,
    email: 'user@test.com',
    passwHash: 'password',
    name: 'Bob Jones',
    phone: '+12223334455',
    address: 'New York, NY'
}
