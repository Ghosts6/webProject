document.addEventListener("DOMContentLoaded", function () {
  const itRequestForm = document.getElementById('itRequestForm');


  function getCurrentIranTime() {
    const options = { timeZone: 'Asia/Tehran', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date().toLocaleTimeString('en-US', options);
  }


  function updateClock() {
    const clockElement = document.getElementById('clock');
    clockElement.textContent = getCurrentIranTime();
  }


  setInterval(updateClock, 1000);

  itRequestForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const departmentName = document.getElementById('departmentName').value.trim();
    const date = document.getElementById('date').value.trim(); // Retrieve date value


    if (firstName !== '' && lastName !== '' && departmentName !== '' && date !== '') {
  
      window.location.href = "redirect.html";
    } else {

      alert('Please fill in First Name, Last Name, Department Name, and Date to submit.');
    }
  });
});
