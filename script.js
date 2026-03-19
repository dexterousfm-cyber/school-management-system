// ===== DEFAULT ADMINS =====
if (!localStorage.getItem("users")) {
    const users = [
        {
            role: "admin",
            email: "admin@adue.com",
            password: "admin123",
            fullname: "Default Admin"
        },
        {
            role: "admin",
            email: "phemmyallen1@gmail.com",
            password: "Ayomide@123",
            fullname: "Phemmy Allen"
        }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

// ===== LOGIN =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));

            if (user.role === "admin") window.location.href = "admin_dashboard.html";
            else if (user.role === "teacher") window.location.href = "teacher_dashboard.html";
            else window.location.href = "student_dashboard.html";
        } else {
            alert("Invalid login!");
        }
    });
}

// ===== LOGOUT =====
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });
}

// ===== ADD TEACHER =====
const addTeacherForm = document.getElementById("addTeacherForm");

if (addTeacherForm) {
    addTeacherForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const fullname = document.getElementById("teacherName").value;
        const email = document.getElementById("teacherEmail").value;
        const password = document.getElementById("teacherPassword").value;
        const subjects = document.getElementById("teacherSubjects").value
            .split(",")
            .map(s => s.trim());

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(u => u.email === email)) {
            alert("Email already exists!");
            return;
        }

        users.push({
            role: "teacher",
            fullname,
            email,
            password,
            subjects,
            students: []
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Teacher added successfully!");
        addTeacherForm.reset();
    });
}

// ===== ADD STUDENT =====
const addStudentForm = document.getElementById("addStudentForm");

if (addStudentForm) {
    addStudentForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const fullname = document.getElementById("studentName").value;
        const email = document.getElementById("studentEmail").value;
        const password = document.getElementById("studentPassword").value;
        const studentClass = document.getElementById("studentClass").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(u => u.email === email)) {
            alert("Email already exists!");
            return;
        }

        users.push({
            role: "student",
            fullname,
            email,
            password,
            class: studentClass,
            subjects: []
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Student added successfully!");
        addStudentForm.reset();
    });
}
