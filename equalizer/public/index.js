document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn");
  const guestBtn = document.getElementById("guest-btn");
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const expenseForm = document.getElementById("expense-form");
  const addParticipantBtn = document.getElementById("add-participant-btn");
  const participantNameInput = document.getElementById("participant-name");
  const participantsList = document.getElementById("participants-list");
  const equalizeBtn = document.getElementById("equalize-btn");
  const resultsContainer = document.getElementById("results");
  const header = document.querySelector("header");
  const loginButtons = document.getElementById("login"); // all 3 buttons
  const loginFrm = document.getElementById("login-form");
  const loginEmailInput = document.getElementById("login-email");
  const loginPasswordInput = document.getElementById("login-password");
  const loginConfPasswordInput = document.getElementById("confirm-password");
  const loginSubmitBtn = document.getElementById("login-submit");
  const signupSubmitBtn = document.getElementById("signup-submit");
  const signupName = document.getElementById("signup-name");
  // const newUserExpenseBtn = document.getElementById("new-expense-btn");

  // Reload the page to return to the home screen
  homeBtn.addEventListener("click", () => {
    //window.location.reload();
    window.location.href = "/"; 
  });

  guestBtn.addEventListener("click", () => {
    header.style.display = "none";
    loginButtons.style.display = "none";
    expenseForm.style.display = "block";
    expenseForm.classList.add("fade-in");
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
      const expenses = Array.from(item.querySelectorAll(".expense-input")).map(
        (expenseInput) => parseFloat(expenseInput.value)
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
          <p><span class="font-bold">Total expenses:</span> $${
            results.totalExpenses
          }</p>
          <p><span class="font-bold">AVG: </span>$${results.avgExpense}</p>
          ${results.equalizedResult
            .map(
              (transaction) => `
              <p>${transaction.from} <span class="font-bold">owes</span> ${transaction.to}: $${transaction.amount}</p>
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

  //Login
  loginBtn.addEventListener("click", function () {
    header.style.display = "none";
    loginButtons.style.display = "none";
    loginFrm.style.display = "block";
  });

  loginSubmitBtn.addEventListener("click", () => {
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    // Simple validation
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
    axios
      .post("/auth/login", { email, password })
      .then((response) => {
        // Handle successful login
        console.log("Login successful:", response.data);
        // Store the JWT token
        localStorage.setItem("token", response.data.token);
        window.location.href = "/profile.html";
      })
      .catch((error) => {
        // Handle login error
        console.error("Login error:", error);
        alert("Incorrect email / password.");
      return;
      });
  });

  //Sign UP
  signupBtn.addEventListener("click", function () {
    header.style.display = "none";
    loginButtons.style.display = "none";
    loginFrm.style.display = "block";
    loginConfPasswordInput.style.display = "block";
    loginSubmitBtn.style.display = "none";
    signupSubmitBtn.style.display = "block";
    signupName.style.display = "block";
    document.getElementById("washington").style.display = "block";
  });

  signupSubmitBtn.addEventListener("click", () => {
    const name = signupName.value;
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    const confirmPassword = loginConfPasswordInput.value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Perform signup process
    axios
      .post("/auth/signup", { name, email, password })
      .then((response) => {
        // Handle successful signup
        console.log("Signup successful:", response.data);
        alert("Congratulations! Please use LOG IN button");
        homeBtn.click();
      })
      .catch((error) => {
        // Handle signup error
        console.error("Signup error:", error);
      });
  });

  // Event listener for the "New Expense" button
// document.getElementById("new-expense-btn").addEventListener("click", () => {
//   // const expenseForm2 = document.getElementById("expense-form2");
//   expenseForm.style.display = expenseForm.style.display === "none" ? "block" : "none";
//     expenseForm.classList.add("fade-in");
// });
});




