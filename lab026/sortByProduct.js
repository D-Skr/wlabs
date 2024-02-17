function sortByProduct(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * (i + 1));
  }
  return result.sort((a, b) => a - b);
}

let arr1 = [1, 2, 3, 4, 5];
console.log(sortByProduct(arr1));
