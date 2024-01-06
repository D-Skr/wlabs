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

const best2 = prices => {
    let maxDiff = 0
    let lowSoFar

    for (let i = 0; i < prices.length; i++) {
        if (lowSoFar === undefined || prices[i] < lowSoFar) {
            lowSoFar = prices[i]
        }

        let diff = prices[i] - lowSoFar

        if (diff > maxDiff) {
            maxDiff = diff
        }
    }

    return maxDiff
}

// best([1, 2, 3, 4, 5])\
// best([2, 3, 10, 6, 4, 8, 1])
// best([5, 4 , 3, 2, 1])
