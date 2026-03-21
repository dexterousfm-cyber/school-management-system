// Define login credentials
const adminCredentials = {
    email: "admin@adue.com",
    password: "12345678"
};

const staffCredentials = {
    email: "phemmyallen1@gmail.com",
    password: "12345678"
};

// Get login form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form refresh

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if(userId === adminCredentials.email && password === adminCredentials.password) {
        alert("Admin login successful!");
        window.location.href = "admin_dashboard.html"; // go to admin dashboard
    } else if(userId === staffCredentials.email && password === staffCredentials.password) {
        alert("Staff login successful!");
        window.location.href = "teacher_dashboard.html"; // go to teacher dashboard
    } else {
        alert("Invalid login credentials!");
    }
});
