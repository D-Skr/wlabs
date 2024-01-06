const printDigits = number => {
    while (number > 0) {
        console.log(number % 10);
        number = (Math.floor(number / 10));
    }
}

printDigits(312);

//2
//1
//3