document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example hardcoded admin credentials (for demonstration purposes)
    const validAdminUsername = 'kunal';
    const validAdminPassword = 'kunal@123';

    // Simple validation
    if (username === validAdminUsername && password === validAdminPassword) {
        // Save username in localStorage
        localStorage.setItem('loggedInAdmin', username);

        // Redirect to the admin dashboard
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

