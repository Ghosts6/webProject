function createTicket() {

    alert('Redirect to ticket creation page!');
  }
function redirectToMain() {
  window.location.href = "main.html"; 
} 
function updateClock() {
  const clockElement = document.getElementById('clock');
  const today = new Date();
  

  const options = { timeZone: 'Asia/Tehran' };
  const currentTime = today.toLocaleTimeString('en-US', options);
  const currentDate = today.toLocaleDateString('en-US', { timeZone: 'Asia/Tehran' });

  clockElement.innerHTML = `Today's Date: ${currentDate}<br>Current Time: ${currentTime}`;
}


setInterval(updateClock, 1000);
