<script>
// ---------------- Data ----------------
let admins = JSON.parse(localStorage.getItem('admins')) || [
    { email: "admin@adue.com", password: "12345678", name: "Admin", profilePicture: "admin.png" }
];
let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
let students = JSON.parse(localStorage.getItem('students')) || [];

// ---------------- Save to localStorage ----------------
function saveAll(){
    localStorage.setItem('admins', JSON.stringify(admins));
    localStorage.setItem('teachers', JSON.stringify(teachers));
    localStorage.setItem('students', JSON.stringify(students));
}

// ---------------- Admin Dashboard ----------------
function renderTeachersTable(){
    const table = document.getElementById('teachersTable');
    let html = `<tr>
        <th>Picture</th><th>Name</th><th>Email</th><th>Teacher ID</th><th>Department</th><th>Edit</th>
    </tr>`;
    teachers.forEach((t,i)=>{
        html += `<tr>
            <td><img src="${t.profilePicture}" class="avatar-small"></td>
            <td>${t.name}</td>
            <td>${t.email}</td>
            <td>${t.teacherID}</td>
            <td>${t.department}</td>
            <td><button onclick="editTeacher(${i})">Edit/Delete</button></td>
        </tr>`;
    });
    table.innerHTML = html;
}

function renderStudentsTable(){
    const table = document.getElementById('studentsTable');
    let html = `<tr>
        <th>Picture</th><th>Name</th><th>Email</th><th>Student ID</th><th>Class</th><th>Year</th><th>Edit</th>
    </tr>`;
    students.forEach((s,i)=>{
        html += `<tr>
            <td><img src="${s.profilePicture}" class="avatar-small"></td>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.studentID}</td>
            <td>${s.studentClass}</td>
            <td>${s.studentYear}</td>
            <td><button onclick="editStudent(${i})">Edit/Delete</button></td>
        </tr>`;
    });
    table.innerHTML = html;
}

// Show tables
function showTable(table){
    document.getElementById('teachersTable').style.display = (table==='teachers')?'':'none';
    document.getElementById('studentsTable').style.display = (table==='students')?'':'none';
}

// ---------------- Register Teacher ----------------
function registerTeacher(){
    let name = document.getElementById('teacherNameInput').value;
    let email = document.getElementById('teacherEmailInput').value;
    let id = document.getElementById('teacherIDInput').value;
    let dept = document.getElementById('teacherDeptInput').value;
    let password = document.getElementById('teacherPasswordInput').value;
    let file = document.getElementById('teacherPicInput').files[0];

    if(!name || !email || !password){ alert('Name, Email and Password required'); return; }

    let reader = new FileReader();
    reader.onload = function(e){
        let pic = e.target.result;
        teachers.push({profilePicture: pic, name, email, teacherID:id, department:dept, password});
        saveAll();
        renderTeachersTable();
        closeTeacherForm();
    };
    if(file) reader.readAsDataURL(file);
    else {
        teachers.push({profilePicture:'teacher.png', name, email, teacherID:id, department:dept, password});
        saveAll();
        renderTeachersTable();
        closeTeacherForm();
    }
}

// ---------------- Register Student ----------------
function registerStudent(){
    let name = document.getElementById('studentNameInput').value;
    let email = document.getElementById('studentEmailInput').value;
    let id = document.getElementById('studentIDInput').value;
    let studentClass = document.getElementById('studentClassInput').value;
    let year = document.getElementById('studentYearInput').value;
    let password = document.getElementById('studentPasswordInput').value;
    let file = document.getElementById('studentPicInput').files[0];

    if(!name || !email || !password){ alert('Name, Email and Password required'); return; }

    let reader = new FileReader();
    reader.onload = function(e){
        let pic = e.target.result;
        students.push({profilePicture: pic, name, email, studentID:id, studentClass, studentYear:year, password});
        saveAll();
        renderStudentsTable();
        closeStudentForm();
    };
    if(file) reader.readAsDataURL(file);
    else {
        students.push({profilePicture:'student.png', name, email, studentID:id, studentClass, studentYear:year, password});
        saveAll();
        renderStudentsTable();
        closeStudentForm();
    }
}

// ---------------- Edit/Delete ----------------
function editTeacher(i){
    let t = teachers[i];
    if(confirm(`Edit or Delete teacher: ${t.name}?\nPress OK to Edit, Cancel to Delete`)){
        // Prompt for editing
        let name = prompt("Name", t.name);
        let email = prompt("Email", t.email);
        let id = prompt("Teacher ID", t.teacherID);
        let dept = prompt("Department", t.department);
        let password = prompt("Password", t.password);
        if(name && email && password){
            teachers[i] = { ...t, name, email, teacherID:id, department:dept, password};
            saveAll();
            renderTeachersTable();
        }
    } else {
        // Delete
        if(confirm("Are you sure you want to delete this teacher?")){
            teachers.splice(i,1);
            saveAll();
            renderTeachersTable();
        }
    }
}

function editStudent(i){
    let s = students[i];
    if(confirm(`Edit or Delete student: ${s.name}?\nPress OK to Edit, Cancel to Delete`)){
        let name = prompt("Name", s.name);
        let email = prompt("Email", s.email);
        let id = prompt("Student ID", s.studentID);
        let studentClass = prompt("Class", s.studentClass);
        let year = prompt("Year", s.studentYear);
        let password = prompt("Password", s.password);
        if(name && email && password){
            students[i] = { ...s, name, email, studentID:id, studentClass, studentYear:year, password};
            saveAll();
            renderStudentsTable();
        }
    } else {
        if(confirm("Are you sure you want to delete this student?")){
            students.splice(i,1);
            saveAll();
            renderStudentsTable();
        }
    }
}

// ---------------- Logout ----------------
function logout(){
    window.location.href = 'index.html';
}

// ---------------- Initial Load ----------------
renderTeachersTable();
renderStudentsTable();
showTable('teachers');
</script>
