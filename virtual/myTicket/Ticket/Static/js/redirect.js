
function getCurrentTimeInTehran() {
  const currentTimeElement = document.getElementById('currentTime');
  if (currentTimeElement) {
    const options = { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tehran' };
    currentTimeElement.textContent = new Date().toLocaleTimeString('en-US', options);
  }
}


function updateUserName() {
  const userNameElement = document.querySelector('.user-info h2');
  if (userNameElement) {

    userNameElement.textContent = 'John Doe'; 

  }
}


function redirectToMain() {
  window.location.href = "main.html"; 
}


function redirectToStatus() {
  window.location.href = "status.html"; 
}


document.addEventListener("DOMContentLoaded", function () {
 
  getCurrentTimeInTehran();
  updateUserName();

  setInterval(getCurrentTimeInTehran, 1000);
});
