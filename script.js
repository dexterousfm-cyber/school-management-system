// ===== DEFAULT ADMINS =====
if (!localStorage.getItem("users")) {
    const users = [
        {
            role: "admin",
            email: "admin@adue.com",
            password: "admin123"
        },
        {
            role: "admin",
            email: "phemmyallen1@gmail.com",
            password: "Ayomide@123"
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

            if (user.role === "admin") {
                window.location.href = "admin_dashboard.html";
            } else if (user.role === "teacher") {
                window.location.href = "teacher_dashboard.html";
            } else {
                window.location.href = "student_dashboard.html";
            }
        } else {
            alert("Invalid login!");
        }
    });
}

// ===== LOGOUT =====
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.onclick = () => {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    };
}

// ===== ADD TEACHER =====
const addTeacherForm = document.getElementById("addTeacherForm");

if (addTeacherForm) {
    addTeacherForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push({
            role: "teacher",
            fullname: teacherName.value,
            email: teacherEmail.value,
            password: teacherPassword.value,
            subjects: teacherSubjects.value.split(",")
        });

        localStorage.setItem("users", JSON.stringify(users));
        alert("Teacher added!");
        addTeacherForm.reset();
    });
}

// ===== ADD STUDENT =====
const addStudentForm = document.getElementById("addStudentForm");

if (addStudentForm) {
    addStudentForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push({
            role: "student",
            fullname: studentName.value,
            email: studentEmail.value,
            password: studentPassword.value,
            class: studentClass.value
        });

        localStorage.setItem("users", JSON.stringify(users));
        alert("Student added!");
        addStudentForm.reset();
    });
}
