// Function to get current time in Tehran timezone
function getCurrentTimeInTehran() {
  const currentTimeElement = document.getElementById('currentTime');
  if (currentTimeElement) {
    const options = { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tehran' };
    currentTimeElement.textContent = new Date().toLocaleTimeString('en-US', options);
  }
}

// Function to update user's name
function updateUserName() {
  const userNameElement = document.querySelector('.user-info h2');
  if (userNameElement) {
    // Replace 'John Doe' with the actual user's name
    userNameElement.textContent = 'John Doe'; // Replace with the fetched user's name
    // You can fetch the user's name from your backend or any other source here
  }
}

// Function to redirect to main.html
function redirectToMain() {
  window.location.href = "main.html"; // Redirect to main.html
}

// Function to redirect to status.html
function redirectToStatus() {
  window.location.href = "status.html"; // Redirect to status.html
}

// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Call functions to get current time and update user's name
  getCurrentTimeInTehran();
  updateUserName();

  // Update current time in Tehran timezone every second
  setInterval(getCurrentTimeInTehran, 1000);
});