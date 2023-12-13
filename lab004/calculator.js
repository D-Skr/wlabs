function calculate(expression) {
  let arr = expression.split(' ');
  if (arr.length === 2) {
    if (arr[0] === 'sqrt') return sqrt(arr[1]);
    if (arr[0] === '!') return factorial(arr[1]);
  }
  if (arr.length > 3) {
    alert('too many arguments');
    return;
  }
  let a = Number(arr[0]);
  let b = Number(arr[2]);
  let operator = arr[1];
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert('invalid number');
    return;
  }
  // if (operator === '+') {
  //   return add(parseInt(arr[0]), parseInt(arr[2]));
  //}
  switch (operator) {
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case '*':
      return multiply(a, b)

    case '/':
      return divide(a, b);

    case '**':
    case '^':
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
function factorial(a) {
  if (a < 0) return alert('number should > 0');
  if (a % 1 > 0) return alert('number should not be desimal');
  if (a === 0 || a === 1) return a;
  let result = 1;
  for (i = 1; i < a; i++) {
    result *= i;
  }
  return result * a;
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
