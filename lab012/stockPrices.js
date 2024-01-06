function best(array) {
    let max = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let profit = 0;
        for (let j = i + 1; j < array.length; j++) {
            profit = array[j] - array[i];
            if (profit > max) {
                max = profit;
            }
        }
    }
    return max;
}

let arr = [10, 2, 3, 32, 5]; //30
console.log(best(arr));