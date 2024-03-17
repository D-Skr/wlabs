// document.addEventListener("DOMContentLoaded", () => {
//   const guestBtn = document.getElementById("guest-btn");
//   const loginBtn = document.getElementById("login-btn");
//   const signupBtn = document.getElementById("signup-btn");
//   const expenseForm = document.getElementById("expense-form");
//   const addParticipantBtn = document.getElementById("add-participant-btn");
//   const participantNameInput = document.getElementById("participant-name");
//   const participantsList = document.getElementById("participants-list");
//   const equalizeBtn = document.getElementById("equalize-btn");
//   const results = document.getElementById("results");

//   guestBtn.addEventListener("click", () => {
//     expenseForm.style.display = "block";
//     expenseForm.classList.add("fade-in");
//   });

//   addParticipantBtn.addEventListener("click", () => {
//     const name = participantNameInput.value.trim();
//     if (name) {
//       const listItem = document.createElement("li");
//       listItem.textContent = name;
//       participantsList.appendChild(listItem);
//       participantNameInput.value = "";
//     }
//     if (participantsList.childElementCount >= 2) {
//       equalizeBtn.disabled = false;
//     }
//   });

//   equalizeBtn.addEventListener("click", () => {
//     // Example equalization logic
//     results.textContent = "Equalization results will be displayed here.";
//     results.style.display = "block";
//     results.classList.add("fade-in");
//   });
// });

// import axios from "axios";
document.addEventListener("DOMContentLoaded", () => {
  const guestBtn = document.getElementById("guest-btn");
  const expenseForm = document.getElementById("expense-form");
  const addParticipantBtn = document.getElementById("add-participant-btn");
  const participantNameInput = document.getElementById("participant-name");
  const participantsList = document.getElementById("participants-list");
  const equalizeBtn = document.getElementById("equalize-btn");
  const resultsContainer = document.getElementById("results");
  // const axios = require("axios");

  guestBtn.addEventListener("click", () => {
    expenseForm.style.display = "block";
    expenseForm.classList.add("fade-in");
  });

  // addParticipantBtn.addEventListener("click", () => {
  //   const name = participantNameInput.value.trim();
  //   if (name) {
  //     const listItem = document.createElement("li");
  //     listItem.classList.add("participant-item");
  //     listItem.textContent = name;
  //     participantsList.appendChild(listItem);
  //     participantNameInput.value = "";

  //     updateEqualizeButtonState();
  //   }
  // });

  addParticipantBtn.addEventListener("click", () => {
    const name = participantNameInput.value.trim();
    if (name) {
      const listItem = document.createElement("div");
      listItem.classList.add(
        "participant-item",
        "bg-gray-200",
        "p-4",
        "rounded-lg",
        "shadow",
        "mb-4"
      );
      listItem.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="participant-name">${name}</span>
                <div>
                    <button class="edit-btn bg-blue-500 text-white p-1 rounded">✏️</button>
                    <button class="delete-btn bg-red-500 text-white p-1 rounded">🗑️</button>
                </div>
            </div>
            <ul class="expenses-list list-disc pl-4"></ul>
            <div class="flex mt-2">
                <input type="number" class="expense-input border border-gray-300 p-1 rounded w-full mr-2" placeholder="Add expenses">
                <button class="add-expense-btn bg-green-500 text-white p-1 rounded">+</button>
            </div>
        `;
      participantsList.appendChild(listItem);
      participantNameInput.value = "";

      listItem.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm(`Are you sure you want to remove ${name}?`)) {
          listItem.remove();
          updateEqualizeButtonState();
        }
      });

      const addExpenseBtn = listItem.querySelector(".add-expense-btn");
      addExpenseBtn.addEventListener("click", () => {
        const expenseInput = listItem.querySelector(".expense-input");
        const expenseValue = parseFloat(expenseInput.value);
        if (!isNaN(expenseValue) && expenseValue > 0) {
          const expenseItem = document.createElement("li");
          expenseItem.classList.add("expense-item");
          expenseItem.textContent = `$${expenseValue.toFixed(2)}`;
          listItem.querySelector(".expenses-list").appendChild(expenseItem);

          expenseInput.value = "";
        }
      });

      updateEqualizeButtonState();
    }
  });

  // equalizeBtn.addEventListener("click", () => {
  //   const participants = Array.from(
  //     participantsList.querySelectorAll(".participant-item")
  //   ).map((item) => {
  //     return {
  //       name: item.textContent,
  //       expense:
  //         parseFloat(prompt(`Enter expense for ${item.textContent}:`, "0")) ||
  //         0,
  //     };
  //   });

  //   fetch("/guest/manageExpenses", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ participants }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.message === "Expenses equalized successfully for guest") {
  //         displayResults(data);
  //       } else {
  //         console.error("Error equalizing expenses:", data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // });

  equalizeBtn.addEventListener("click", () => {
    const participants = Array.from(
      participantsList.querySelectorAll(".participant-item")
    ).map((item) => {
      const name = item.querySelector(".participant-name").textContent;
      const expenses = Array.from(item.querySelectorAll(".expense-item")).map(
        (expenseItem) => parseFloat(expenseItem.textContent.slice(1))
      );
      return { name, expenses };
    });

    axios
      .post("/guest/expenses", { participants })
      .then((response) => {
        console.log("inside!!axios");
        const data = response.data;
        if (data.message === "Expenses equalized successfully for guest") {
          displayResults(data);
        } else {
          console.error("Error equalizing expenses:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  function updateEqualizeButtonState() {
    const participantCount =
      participantsList.querySelectorAll(".participant-item").length;
    equalizeBtn.disabled = participantCount < 2;
  }

  function displayResults(results) {
    resultsContainer.innerHTML = `
          <p>Total expenses: $${results.totalExpenses}</p>
          <p>AVG: $${results.avgExpense}</p>
          ${results.equalizedResult
            .map(
              (transaction) => `
              <p>${transaction.from} owes ${transaction.to}: $${transaction.amount}</p>
          `
            )
            .join("")}
      `;
    resultsContainer.style.display = "block";
    resultsContainer.classList.add(
      "fade-in",
      "participant-item",
      "bg-gray-200",
      "p-12",
      "rounded-lg",
      "shadow",
      "mb-4"
    );
  }
});
