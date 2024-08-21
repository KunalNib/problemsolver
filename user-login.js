document.getElementById('user-login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Hardcoded credentials for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'user123';

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === validUsername && password === validPassword) {
        // Save username in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify({ name: username }));

        // Redirect to the home page if credentials are correct
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});
