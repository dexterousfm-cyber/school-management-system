const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const email = document.getElementById('email') ? document.getElementById('email').value : '';
    const password = document.getElementById('password') ? document.getElementById('password').value : '';

    // Simple validation
    if (email === '' || password === '') {
        alert('Please fill in both email and password!');
        return;
    }

    // Fake login logic (for testing only)
    if (email === 'admin@adue.com' && password === '123456') {
        alert('Login successful! Welcome Admin.');
        // Redirect to dashboard page if needed
        window.location.href = 'admin_dashboard.html';
    } else {
        alert('Incorrect email or password!');
    }
});
