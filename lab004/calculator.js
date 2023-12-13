function calculate(expression) {
  let arr = expression.split(' ');
  if (arr.length < 2) {
    return sqrt(arr[0]);
  }
  let a = arr[0];
  let b = arr[2];
  let operator = arr[1];
  // if (operator === '+') {
  //   return add(parseInt(arr[0]), parseInt(arr[2]));
  //}
  switch (operator) {
    case '+':
      return add(parseInt(a), parseInt(b));

    case '-':
      return subtract(a, b);

    case '*':
      return multiply(a, b)

    case '/':
      return devide(a, b);

    case '**':
      return power(a, b);

    case '%':
      return mod(a, b);

    default: "error";
  }

}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function power(a, b) {
  return a ** b;
}
function mod(a, b) {
  return a % b;
}
function sqrt(a) {
  return Math.sqrt(a);
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
