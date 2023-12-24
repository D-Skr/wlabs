////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name (a string), and shifts (a string).

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on that instance.
*/

//CODE HERE



/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: "Jess"
    shifts: "weekday mornings"
*/

//CODE HERE

/*
    Call the `getSchedule` method on the
    `empOne` instance.
*/

//CODE HERE




//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employee names that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on that instance.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE



/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: "weekday afternoons"
    employees: "Cece" and "Schmidt"
*/

//CODE HERE


/*
    Call the `getEmployees` method on the
    `manager` variable.  
*/

//CODE HERE

/*
    Call the `addEmployee` method on the 
    `manager` variable passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 

/*
    Call the `getEmployees` method on the
    `manager` varible again to confirm 
    that an employee was added.
*/

//CODE HERE