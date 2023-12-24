document.addEventListener("DOMContentLoaded", function () {
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission

    // Replace these with actual login validation logic
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // Simulating a simple login validation
    if (enteredUsername === 'user' && enteredPassword === 'password') {
      // Redirect to the loading page upon successful user login
      alert('User login successful! Redirecting to the loading page...');
      // Replace 'loading.html' with the actual loading page URL for regular users
      window.location.href = 'loading.html';
    } else if (enteredUsername === 'admin' && enteredPassword === 'admin123') {
      // Redirect to the admin main page upon successful admin login
      alert('Admin login successful! Redirecting to the admin main page...');
      // Replace 'admin_main.html' with the actual admin main page URL for admin users
      window.location.href = 'admin_main.html';
    } else {
      // Show an error message for incorrect credentials
      alert('Invalid username or password. Please try again.');
      // Clear the input fields (optional)
      usernameInput.value = '';
      passwordInput.value = '';
    }
  }

  // Event listener for form submission
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleFormSubmit);
  }
});
