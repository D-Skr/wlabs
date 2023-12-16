// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive.
// That is, do not repeat any numbers in the returned list.
// You can trust that this function will never be called with n < 0 or n > 10.

function luckyNumbers(count) {
    const numbersRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let result = []; //

    for (i = 0; i < count; i++) {
        let index = Math.floor(Math.random() * numbersRange.length);
        result.push(numbersRange[index]);
        numbersRange.splice(index, 1);
    }
    return result;
}