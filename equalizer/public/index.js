// Array to store participants and their expenses
let participants = [];

// Function to add a new participant
function addParticipant(name) {
  participants.push({ name, expenses: [] });
  renderParticipants();
}

// Function to add an expense to a participant
function addExpense(participantName, amount, description) {
  const participant = participants.find((p) => p.name === participantName);
  if (participant) {
    participant.expenses.push({ amount, description });
    renderParticipants();
  }
}

// Function to render participants and their expenses
function renderParticipants() {
  const participantsContainer = document.querySelector("#participants");
  participantsContainer.innerHTML = "";

  participants.forEach((participant) => {
    const participantDiv = document.createElement("div");
    participantDiv.className = "participant";
    participantDiv.innerHTML = `<strong>${participant.name}</strong>`;

    const expensesList = document.createElement("ul");
    participant.expenses.forEach((expense) => {
      const expenseItem = document.createElement("li");
      expenseItem.innerHTML = `${expense.description}: $${expense.amount}`;
      expensesList.appendChild(expenseItem);
    });

    participantDiv.appendChild(expensesList);
    participantsContainer.appendChild(participantDiv);
  });
}

// Function to calculate total expenses
function calculateTotalExpenses() {
  let total = 0;
  participants.forEach((participant) => {
    participant.expenses.forEach((expense) => {
      total += expense.amount;
    });
  });
  return total;
}

// Function to calculate average expense per person
function calculateAverageExpense() {
  const total = calculateTotalExpenses();
  return total / participants.length;
}

// Example usage
const totalExpenses = calculateTotalExpenses();
const averageExpense = calculateAverageExpense();
console.log(`Total Expenses: $${totalExpenses}`);
console.log(`Average Expense: $${averageExpense}`);

// Function to determine how much each person should pay or receive
function settleExpenses() {
  const averageExpense = calculateAverageExpense();
  const settlements = participants.map((participant) => {
    const totalExpense = participant.expenses.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    const balance = totalExpense - averageExpense;
    return { name: participant.name, balance };
  });

  // Sorting settlements by balance
  settlements.sort((a, b) => a.balance - b.balance);

  const transactions = [];
  let i = 0;
  let j = settlements.length - 1;

  // Matching payers with receivers
  while (i < j) {
    const payer = settlements[i];
    const receiver = settlements[j];
    const amount = Math.min(-payer.balance, receiver.balance);

    payer.balance += amount;
    receiver.balance -= amount;

    transactions.push({ from: payer.name, to: receiver.name, amount });

    if (payer.balance === 0) {
      i++;
    }
    if (receiver.balance === 0) {
      j--;
    }
  }

  return transactions;
}

// Example usage
const transactions = settleExpenses();
console.log(transactions);

// Function to render settlements
function renderSettlements() {
  const settlementsContainer = document.querySelector("#settlements");
  settlementsContainer.innerHTML = "";

  const transactions = settleExpenses();
  transactions.forEach((transaction) => {
    const transactionDiv = document.createElement("div");
    transactionDiv.innerHTML = `${transaction.from} owes ${
      transaction.to
    } $${transaction.amount.toFixed(2)}`;
    settlementsContainer.appendChild(transactionDiv);
  });
}

function updateAverageExpenseDisplay() {
    const averageExpense = calculateAverageExpense();
    const averageExpenseElement = document.querySelector('#averageExpense');
    averageExpenseElement.innerHTML = `Average Expense: $${averageExpense.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Example usage
  addParticipant("John");
  addExpense("John", 120, "Cafe");
  addParticipant("Bill");
  addExpense("Bill", 65.5, "Cafe");
  addParticipant("Anna");
  addExpense("Anna", 34.5, "Cafe");
  addParticipant("Ted");
  addExpense("Tedl", 0, "Cafe");
  updateAverageExpenseDisplay();

  // Add a div to display participants in index.html
  // Just before the closing </body> tag, add:
  /*
<div id="participants"></div>
*/
  // Call this function whenever you want to update the settlements display
  renderSettlements();

  // Add a div to display settlements in index.html
  // Just after the <div id="participants"></div>, add:
  /*
<div id="settlements"></div>
*/
});
