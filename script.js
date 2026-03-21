// script.js

// Real login credentials
const users = [
    { id: "admin@adue.com", password: "12345678", role: "admin" },
    { id: "phemmyallen1@gmail.com", password: "12345678", role: "staff" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check credentials
    const user = users.find(u => u.id === userId && u.password === password);

    if(user) {
        // Redirect based on role
        if(user.role === "admin") {
            window.location.href = "admin_dashboard.html";
        } else if(user.role === "staff") {
            window.location.href = "teacher_dashboard.html";
        }
    } else {
        alert("Invalid login credentials. Please try again.");
    }
});
