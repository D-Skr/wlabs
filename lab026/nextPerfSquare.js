function perfectSquare(i) {
  let result = -1;
  let root = Math.sqrt(i);
  if (Number.isInteger(root)) {
    root += 1;
    result = root * root;
  }
  console.log(result);
  return result;
}

perfectSquare(16); //25
