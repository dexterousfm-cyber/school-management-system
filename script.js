document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // ADMIN LOGIN
    if (userId === "admin@adue.com" && password === "12345678") {
        window.location.href = "admin_dashboard.html";
        return;
    }

    // TEACHER LOGIN
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    let foundTeacher = teachers.find(t => t.teacherID === userId && t.password === password);

    if (foundTeacher) {
        localStorage.setItem('loggedInTeacher', JSON.stringify(foundTeacher));
        window.location.href = "teacher_dashboard.html";
        return;
    }

    // STUDENT LOGIN
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let foundStudent = students.find(s => s.studentID === userId && s.password === password);

    if (foundStudent) {
        localStorage.setItem('loggedInStudent', JSON.stringify(foundStudent));
        window.location.href = "student_dashboard.html";
        return;
    }

    alert("Invalid Login Details!");
});
