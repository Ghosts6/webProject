document.addEventListener("DOMContentLoaded", function () {

  function handleFormSubmit(event) {
    event.preventDefault(); 


    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();


    if (enteredUsername === 'user' && enteredPassword === 'password') {

      alert('User login successful! Redirecting to the loading page...');

      window.location.href = 'loading.html';
    } else if (enteredUsername === 'admin' && enteredPassword === 'admin123') {

      alert('Admin login successful! Redirecting to the admin main page...');

      window.location.href = 'admin_main.html';
    } else {

      alert('Invalid username or password. Please try again.');

      usernameInput.value = '';
      passwordInput.value = '';
    }
  }


  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleFormSubmit);
  }
});
