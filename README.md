# ADUE Portal

A simple school portal built with **HTML, CSS, and JavaScript**.  
This portal allows admins to manage teachers and students, teachers to add students and assign subjects, and students to view their results. Data is stored in **localStorage** for simplicity.

## Features

- **Admin**
  - Register other admins
  - View all teachers
  - View all students

- **Teacher**
  - Register themselves
  - Add students
  - Assign class and subjects
  - Input student scores

- **Student**
  - Login and view personal results
  - See class and subject information

## Folder Structure

ADUE-Portal/
│
├─ index.html                  # Login page
├─ register_teacher.html       # Teacher registration
├─ admin_dashboard.html        # Admin dashboard
├─ teacher_dashboard.html      # Teacher dashboard
├─ student_dashboard.html      # Student dashboard
├─ styles.css                  # Global styles
├─ script.js                   # Shared JavaScript
├─ README.md                   # Project README & MIT license
└─ LICENSE                     # MIT License file

## How to Run

1. Download or clone the repository.
2. Open `index.html` in your browser.
3. Login as admin, teacher, or student.
4. Admin can add other admins, teachers can add students, and students can view their results.

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- localStorage for data persistence

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
