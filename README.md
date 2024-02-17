# HackBright Academy Labs

### 001 Mars Adventure:

- alerts, prompts, consol logs.

This exercise will walk you through building an interactive text adventure game about traveling to
the planet, Mars. You’ll practice capturing user input, producing dynamic output, using
conditional statements and comparison operators, and converting data types.

### 002 Bashcrowl

- bash commands

is a game that you can play to practice using a UNIX shell and to learn some new and useful shell commands. Adapted from https://gitlab.com/slackermedia/bashcrawl under the GNU GPLv3 License.

### 003 Arrays Lab

- solve array problems and push to GitHub.

### 004 Calculator Lab

This project is a building a simple calculator. The calculator will receive a string representing a mathematical expression (e.g. “2 + 3”) and return the answer (e.g. 5).
**index.html** is the file to run the calculator.
**calculator.js** is the file with code.
**Operations:** add, subtract, multiply, divide, power, mod(remainder), sqrt, factorial.

- Step 1: Writing Functions for Operations
- Step 2: Tokenizing a String
- Step 3: Converting to Numbers
- Step 4: Square Roots
- Step 5: Too Many / Too Few Inputs
- Step 6: Factorial

### 005 Objects Lab

- Solve problems in the objects.js file

### 006 Problem Solving Lab

- Lucky Numbers

Given a number, n, return an array containing n unique random numbers between 1-10, inclusive.
That is, do not repeat any numbers in the returned list.
You can trust that this function will never be called with n < 0 or n > 10.

- Is Palindrome

Return true if this word is a palindrome. false if it is not.
A palindrome is a word that is spelled the same backwards and forwards.
Case sensitive.

- Callback And Higher Order

Practice using of callback functions

- Array Methods with Arrow Function Expression

Inline arrow functions for callbacks. Methods **map(), forEach(), reduce(), filter(), sort()**.

### 007 Higher Order Methods

Solve problems, practice arrow function expression.

### 008 Animal Shelter Lab

In this project, we’ll be using classes to organize data about animals in an animal shelter.

### 009 HTML & CSS 1

In this lab exercise, you will be creating your own page using HTML & CSS.

### 010 Homework

### 011 HTML & CSS 2

In this lab exercise, you will re-create four different layouts using HTML and CSS presented in the screenshot of each task in separate HTML documents.

- Drill 01 - The Red DIV

- Drill 02 - The Flag

- Drill 03 - Neighboring Boxes

- Drill 04 - Header and Footer

- Games for practice:
  - CSS selectors: https://flukeout.github.io
  - Flexbox: https://flexboxfroggy.com

### 012 Problem solving

- Stock Prices

This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock. The best function will be given an array of stock prices in the order they happened throughout the day.
It should return the maximum possible profit on the stock for that day. For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

```
best([15, 10, 20, 22, 1, 9])
12
```

- Print Digits Backwards

Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1

```
printDigits(1)
// 1

printDigits(314)
// 4
// 1
// 3
```

### 013 Movie List

In this lab, you’ll practice more vanilla JS DOM manipulation by creating a simple Movie List project. The basic HTML and CSS have been provided for you, and you will be adding in the JavaScript to make the interface interactive. Users should be able to type in a movie title and click ‘add’ to add a movie onto the list. Clicking on the movie’s title should cross it off. Clicking the ‘x’ button next to the title should remove the movie from the list. We’ll also be making a dynamic notification.

### 014 Requests in JavaScript

In the following lab, you will be practicing making use of event listeners to trigger events in JavaScript. You will combine this knowledge with what we just learned about making JavaScript requests using the axios library.

- Part 1 - Start your lab server

  Navigate to folder with **_ package.json _** install packages with command

```
npm install
```

- Part 2 - open HTML file in browser

  In the client folder find index.html and open in browser.

- Part 3 - the fun stuff!

  Open the script.js file and follow the instructions inside to complete the lab.

### 015 Back End 1 : Users & Weather

- Create a folder called server

1. Inside the server folder create an index.js file

2. Use npm to install express, then require it at the top of your index.js file

3. Create a variable called app and set its value equal to express invoked

4. Set your server up to accept JSON object responses

5. Set your express server to listen to requests on port 4000, test with nodemon

6. Create a get request for the endpoint ‘/api/users’ and another to get weather information

7. Start your server up and check its functionality using the given HTML file

### 016 Back End 2 : Realty App

- Application should be able to add a new house, including an address, a price, and an image url. It should be able to show all the houses in the database, as well as edit the prices (+- $10,000). It should also be able to delete houses from the database.

### 017 Problem solving

1.  Make Unique String
    Write a function to remove all duplciate letters from a provided string.
2.  T-Shirt Sorter
    Write a function that will take in a string containing only s, m, and l characters. Ex input:

```
  slsmmsllsmsmlmsls
```

Ex output:

```
sssssssmmmmmlllll
```

### 018 APIs

1. SWAPI
2. Social Mountain

### 019 Cybersecurity and Cryptography Lab

Building a basic signup/login system — first an unsecure version without hashing passwords, and then a secure version with hashing passwords.

### 020 SQL Basics

### 021 Data Modeling

### 022 Problem solving

1. Create a Phone Number from array of numbers
2. Guess the Gifts
   You wrote a wishlist and now you’re trying to guess which gift is which before you open it.
   You will be given a wishlist (array), containing all possible items. Each item is in the format:

```
{name: "toy car",
size: "medium",
clatters: "a bit",
weight: "medium"}
```

You also get a list of presents (array) which have the following format each:

```
{size: "small",
clatters: "no",
weight: "light"}
```

Your task is to return the names of all wishlisted presents that you might have gotten.

```
guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
```

### 023 Sequelize Intro

In this lab, you’ll continue using the database we set up during the demo for Clark County Construction. You’ll be writing in a new app though, this time one that’s for admin.

### 024 Testing Lab

### 025 Automation Lab

### 026 Problem Solving

1. Next Perfect Square

Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
For example:

```
perfectSquare(9) // should return 16 (3x3=9, 4x4=16)

perfectSquare(289) // should return 324 (17x17=289 18x18=324)

perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)
```

2. Sort by Product
   Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.
   For sorting the index starts at 1, NOT at 0! The sorting has to be ascending. The array will never be null and will always contain numbers.
   Sample input:

```
[23, 2, 3, 4, 5]
```

Product of value and index:

```
23 => 23 * 1 = 23 -> Output-Pos 4
2 => 2 * 2 = 4 -> Output-Pos 1
3 => 3 * 3 = 9 -> Output-Pos 2
4 => 4 * 4 = 16 -> Output-Pos 3
5 => 5 * 5 = 25 -> Output-Pos 5
```

Sample output:

```
[2, 3, 4, 23, 5]
```
