function addToZero(nums) {
  const checked = new Set();
  for (let num of nums) {
    if (checked.has(-num)) {
      return true;
    }
    checked.add(num);
  }
  return false;
}

console.log(addToZero([1, 2, 3, 4])); //false
console.log(addToZero([1, 2, 3, -2])); //true
