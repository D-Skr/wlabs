//LOGGED USER
document.addEventListener("DOMContentLoaded", () => {
  const expenseForm2 = document.getElementById("expense-form2");
  const newUserExpenseBtn = document.getElementById("new-expense-btn");
  const addParticipantBtn = document.getElementById("add-participant-btn");
  const participantNameInput = document.getElementById("participant-name");
  const participantsList = document.getElementById("participants-list");
  const equalizeBtn = document.getElementById("equalize-btn");
  const resultsContainer = document.getElementById("results");
  const deleteAccountBtn = document.getElementById("delete-account-btn");
  const clearHistoryBtn = document.getElementById("clear-history-btn");
  const historyBtn = document.getElementById("history-btn");
  const historyContainer = document.getElementById("history-container");

  // Check if the user is authenticated
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // If no token is found, redirect to the home page
  if (!token) {
    window.location.href = "/";
  }

  axios
    .get(`/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const user = response.data.user;
      displayUserProfile(user);
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
      alert("Failed to fetch user's profile, please retry");
    });

  function displayUserProfile(user) {
    const profileHeader = document.getElementById("profile-header");
    profileHeader.textContent = `Profile: ${user.name}`;

  deleteAccountBtn.addEventListener("click", async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      try {
        const response = await axios.delete(`/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert(response.data.message);
        window.location.href = "/"; // Redirect to the login page
      } catch (error) {
        console.error("Error deleting account:", error);
        alert("Error deleting account.");
      }
    }
  });

  // Add event listeners for other buttons (New, Clear History, Log Out) with similar logic
  newUserExpenseBtn.addEventListener("click", () => {
    // const expenseForm2 = document.getElementById("expense-form2");
    toggleButtons(newUserExpenseBtn);
    expenseForm2.style.display =
      expenseForm2.style.display === "none" ? "block" : "none";
    expenseForm2.classList.add("fade-in");
  });

  addParticipantBtn.addEventListener("click", () => {
    const name =
      participantNameInput.value.trim()[0].toUpperCase() +
      participantNameInput.value.trim().slice(1).toLowerCase();
    if (name) {
      const participantDiv = document.createElement("div");
      participantDiv.classList.add(
        "participant-item",
        "bg-gray-200",
        "flex",
        "flex-col",
        "p-4",
        "rounded-lg",
        "shadow",
        "mb-4",
        "fade-in"
      );

      const topRowDiv = document.createElement("div");
      topRowDiv.classList.add("flex", "items-center", "mb-4");
      participantDiv.appendChild(topRowDiv);

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = name;
      nameInput.classList.add(
        "border",
        "border-gray-300",
        "p-2",
        "rounded",
        "mr-2",
        "flex-grow",
        "font-bold",
        "fade-in"
      );
      topRowDiv.appendChild(nameInput);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "-";
      deleteBtn.classList.add(
        "bg-orange-500",
        "text-white",
        "w-8",
        "h-8",
        "rounded",
        "hover:bg-orange-600"
      );
      deleteBtn.addEventListener("click", () => {
        participantDiv.remove();
        updateEqualizeButtonState();
      });
      topRowDiv.appendChild(deleteBtn);

      const expensesDiv = document.createElement("div");
      expensesDiv.classList.add("flex", "flex-col");
      participantDiv.appendChild(expensesDiv);

      addExpenseInput(expensesDiv, participantDiv);

      participantsList.appendChild(participantDiv);
      participantNameInput.value = "";

      updateEqualizeButtonState();
    }
  });

  function addExpenseInput(expensesDiv, participantDiv) {
    const expenseInputDiv = document.createElement("div");
    expenseInputDiv.classList.add("flex", "items-center", "mb-4", "fade-in");
    expensesDiv.appendChild(expenseInputDiv);

    const expenseInput = document.createElement("input");
    expenseInput.type = "number";
    expenseInput.placeholder = "Add expense";
    expenseInput.classList.add(
      "expense-input",
      "border",
      "border-gray-300",
      "p-2",
      "rounded-full",
      "mr-2",
      "flex-grow"
    );
    expenseInputDiv.appendChild(expenseInput);

    const addExpenseBtn = document.createElement("button");
    addExpenseBtn.textContent = "+";
    addExpenseBtn.classList.add(
      "add-expense-btn",
      "bg-green-500",
      "text-white",
      "w-8",
      "h-8",
      "rounded-full",
      "hover:bg-green-600"
    );
    addExpenseBtn.addEventListener("click", () => {
      const expenseValue = parseFloat(expenseInput.value);
      if (!isNaN(expenseValue) && expenseValue > 0) {
        expenseInput.setAttribute("readonly", "readonly");
        addExpenseBtn.textContent = "-";
        addExpenseBtn.classList.remove("bg-green-500", "hover:bg-green-600");
        addExpenseBtn.classList.add("bg-red-500", "hover:bg-red-600");
        addExpenseBtn.removeEventListener("click", addExpenseBtn.clickEvent);
        addExpenseBtn.addEventListener("click", () => {
          expenseInputDiv.remove();
          // Check if there are no more expense inputs, then add a new empty input field
          if (
            expensesDiv.querySelectorAll(".expense-input[readonly]").length ===
            0
          ) {
            addExpenseInput(expensesDiv, participantDiv);
          }
        });

        // Check if there is already an empty input field, if not, add a new one
        const emptyInputs = expensesDiv.querySelectorAll(
          ".expense-input:not([readonly])"
        );
        if (emptyInputs.length === 0) {
          addExpenseInput(expensesDiv, participantDiv);
        }
      }
    });
    addExpenseBtn.clickEvent = addExpenseBtn.onclick;

    expenseInputDiv.appendChild(addExpenseBtn);
  }

  equalizeBtn.addEventListener("click", () => {
    const participants = Array.from(
      participantsList.querySelectorAll(".participant-item")
    ).map((item) => {
      const name = item.querySelector("input[type='text']").value;
      const expenses = Array.from(item.querySelectorAll(".expense-input"))
        .map((expenseInput) => parseFloat(expenseInput.value))
        .filter((expense) => !isNaN(expense) && expense > 0);
      return { name, expenses };
    });

    const date = document.getElementById("expense-date").value;
    const description = document.getElementById("expense-description").value;

    axios
      .post(
        `/api/users/${userId}/expenses`,
        { participants, date, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data;
        if (
          data.message ===
          `Expenses equalized successfully for user_id: ${userId}`
        ) {
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
    if (participantCount > 1) equalizeBtn.classList.remove("hidden");
    else equalizeBtn.classList.add("hidden");
  }

  function displayResults(results) {
    resultsContainer.innerHTML = `
              <p><span class="font-bold">Total expenses:</span> $${
                results.totalExpenses
              }</p>
              <p><span class="font-bold">AVG: </span>$${results.avgExpense}</p>
              ${results.equalizedResult
                .map(
                  (transaction) => `
                  <p><span class="font-bold">${transaction.from}</span> owes <span class="font-bold">${transaction.to}</span>: $${transaction.amount}</p>
              `
                )
                .join("")}
          `;
    resultsContainer.style.display = "block";
    resultsContainer.classList.add(
      "fade-in",
      "participant-item",
      "bg-gray-200",
      "p-8",
      "rounded-lg",
      "shadow",
      "mb-4"
    );
  }

  //logout
  document.getElementById("logout-btn").addEventListener("click", () => {
    // Get the token from local storage
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not logged in.");
      return;
    }

    // Send a POST request to the logout endpoint
    axios
      .post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle successful logout
        console.log("Logout successful:", response.data);
        // Remove the token from local storage
        localStorage.removeItem("token");
        // Redirect to the login page or home page
        window.location.href = "/";
      })
      .catch((error) => {
        // Handle logout error
        console.error("Logout error:", error);
      });
  });

  clearHistoryBtn.addEventListener("click", () => {
    console.log("Clear history button clicked");
    if (confirm("Are you sure you want to delete your history?")) {
      try {
        // delete all expenses for a specific user
        axios
          .delete(`/api/users/${userId}/expenses`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log("Expenses cleared successfully");
          });
      } catch (error) {
        console.error("Error clearing expenses:", error);
      }
    }
  });

  //History
  historyBtn.addEventListener("click", () => {
    toggleButtons(historyBtn);
    if (historyContainer.style.display === "block") {
      historyContainer.style.display = "none";
      return;
    }

    axios
      .get(`/api/users/${userId}/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const expenses = response.data.expenses;

        // Clear existing history
        historyContainer.innerHTML = "";

        expenses.forEach((expense) => {
          const date = new Date(expense.date).toISOString().split("T")[0];
          const expenseElement = document.createElement("div");
          expenseElement.className =
            "expense-item mb-4 px-2 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md shadow-sm fade-in ease-in duration-300";
          // Initial display: Date & Description
          const summary = document.createElement("p");
          summary.textContent = `${date} : ${expense.description}`;
          summary.classList.add("font-semibold");
          expenseElement.appendChild(summary);

          // Create details container (initially hidden)
          const details = document.createElement("div");
          details.className = "expense-details";
          details.style.display = "none";

          // Add Total and Average
          const totalElement = document.createElement("p");
          totalElement.textContent = `Total: ${expense.total}`;
          details.appendChild(totalElement);

          const avgElement = document.createElement("p");
          avgElement.textContent = `AVG: ${expense.avg.toFixed(2)}`;
          details.appendChild(avgElement);

          // Add who owes whom
          const owesList = document.createElement("ul");
          expense.equalizedResult.forEach((item) => {
            const oweItem = document.createElement("li");
            oweItem.textContent = `${item.from} owes ${item.to}: ${item.amount}`;
            owesList.appendChild(oweItem);
          });
          details.appendChild(owesList);

          // Add details to the main element
          expenseElement.appendChild(details);

          // Add click event to toggle details
          expenseElement.addEventListener("click", () => {
            if (details.style.display === "none") {
              details.style.display = "block";
            } else {
              details.style.display = "none";
            }
          });

          historyContainer.appendChild(expenseElement);
        });

        historyContainer.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
      });
  });

  // Toggle visibility
  function toggleButtons(clickedButton) {
    const allButtons = document.querySelectorAll("button"); // Get all buttons

    allButtons.forEach((button) => {
      if (button !== clickedButton) {
        button.style.display =
          button.style.display === "none" ? "inline-block" : "none";
      }
    });
  }
});
