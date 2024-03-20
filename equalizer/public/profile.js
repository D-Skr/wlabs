document.addEventListener("DOMContentLoaded", () => {
    const userId = 'your-user-id';  // You'll need to retrieve the user's ID, possibly from localStorage or a cookie

    const historyBtn = document.getElementById("history-btn");
    historyBtn.addEventListener("click", () => {
        window.location.href = `/profile/${userId}/history`;  // Redirect to the history page
    });

    const deleteAccountBtn = document.getElementById("delete-account-btn");
    deleteAccountBtn.addEventListener("click", async () => {
        if (confirm("Are you sure you want to delete your account?")) {
            try {
                const response = await axios.delete(`/api/users/${userId}`);
                alert(response.data.message);
                window.location.href = "/login.html";  // Redirect to the login page
            } catch (error) {
                console.error("Error deleting account:", error);
                alert("Error deleting account.");
            }
        }
    });

    // Add event listeners for other buttons (New, Clear History, Log Out) with similar logic
});