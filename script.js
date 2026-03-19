// ===== LOGIN =====
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const role = document.getElementById("role").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.role === role && u.email === email && u.password === password);
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            if(role==="admin") window.location.href="admin_dashboard.html";
            if(role==="teacher") window.location.href="teacher_dashboard.html";
            if(role==="student") window.location.href="student_dashboard.html";
        } else { alert("Invalid login credentials"); }
    });
}

// ===== TEACHER REGISTRATION =====
const teacherRegisterForm = document.getElementById("teacherRegisterForm");
if(teacherRegisterForm){
    teacherRegisterForm.addEventListener("submit", e=>{
        e.preventDefault();
        const fullname=document.getElementById("fullname").value;
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const subjects=document.getElementById("subjects").value.split(",").map(s=>s.trim());
        let users=JSON.parse(localStorage.getItem("users"))||[];
        if(users.some(u=>u.email===email)){ alert("Email already registered!"); return; }
        users.push({role:"teacher",fullname,email,password,subjects,students:[]});
        localStorage.setItem("users",JSON.stringify(users));
        alert("Teacher registered successfully!");
        window.location.href="index.html";
    });
}

// ===== ADMIN DASHBOARD =====
const addAdminForm=document.getElementById("addAdminForm");
const teachersTable=document.getElementById("teachersTable")?.querySelector("tbody");
const studentsTable=document.getElementById("studentsTable")?.querySelector("tbody");
const logoutBtn=document.getElementById("logoutBtn");
if(logoutBtn){ logoutBtn.addEventListener("click",()=>{ localStorage.removeItem("currentUser"); window.location.href="index.html"; }); }
if(addAdminForm){
    addAdminForm.addEventListener("submit", e=>{
        e.preventDefault();
        const fullname=document.getElementById("adminName").value;
        const email=document.getElementById("adminEmail").value;
        const password=document.getElementById("adminPassword").value;
        let users=JSON.parse(localStorage.getItem("users"))||[];
        if(users.some(u=>u.email===email)){ alert("Email already registered!"); return; }
        users.push({role:"admin",fullname,email,password});
        localStorage.setItem("users",JSON.stringify(users));
        alert("Admin added successfully!"); addAdminForm.reset(); renderTeachersAndStudents();
    });
}
function renderTeachersAndStudents(){
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let teachers=users.filter(u=>u.role==="teacher");
    if(teachersTable){ teachersTable.innerHTML=teachers.length?teachers.map(t=>`<tr><td>${t.fullname}</td><td>${t.email}</td><td>${t.subjects.join(", ")}</td></tr>`).join(''):'<tr><td colspan="3">No teachers yet</td></tr>'; }
    let students=users.filter(u=>u.role==="student");
    if(studentsTable){ studentsTable.innerHTML=students.length?students.map(s=>`<tr><td>${s.fullname}</td><td>${s.email}</td><td>${s.class||''}</td></tr>`).join(''):'<tr><td colspan="3">No students yet</td></tr>'; }
}
renderTeachersAndStudents();

// ===== DUMMY USERS =====
if(!localStorage.getItem("users")){
    const users=[
        {role:"admin",email:"admin@adue.com",password:"admin123"},
        {role:"teacher",email:"teacher@adue.com",password:"teacher123",subjects:[],students:[]},
        {role:"student",email:"student@adue.com",password:"student123",class:"",subjects:[]}
    ];
    localStorage.setItem("users",JSON.stringify(users));
}
