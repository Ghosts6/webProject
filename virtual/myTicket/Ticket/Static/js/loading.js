function createTicket() {
    // Replace this with your ticket creation logic or redirection to the ticket creation page
    alert('Redirect to ticket creation page!');
  }
function redirectToMain() {
  window.location.href = "main.html"; // Redirect to main.html
} 
function updateClock() {
  const clockElement = document.getElementById('clock');
  const today = new Date();
  
  // Set timezone to Iran/Tehran
  const options = { timeZone: 'Asia/Tehran' };
  const currentTime = today.toLocaleTimeString('en-US', options);
  const currentDate = today.toLocaleDateString('en-US', { timeZone: 'Asia/Tehran' });

  clockElement.innerHTML = `Today's Date: ${currentDate}<br>Current Time: ${currentTime}`;
}

// Update clock every second
setInterval(updateClock, 1000);
