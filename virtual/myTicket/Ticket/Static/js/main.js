document.addEventListener("DOMContentLoaded", function () {
  const itRequestForm = document.getElementById('itRequestForm');

  // Function to get current Iran/Tehran time
  function getCurrentIranTime() {
    const options = { timeZone: 'Asia/Tehran', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date().toLocaleTimeString('en-US', options);
  }

  // Update clock every second
  function updateClock() {
    const clockElement = document.getElementById('clock');
    clockElement.textContent = getCurrentIranTime();
  }

  // Set up the clock interval
  setInterval(updateClock, 1000);

  itRequestForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Fetch form input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const departmentName = document.getElementById('departmentName').value.trim();
    const date = document.getElementById('date').value.trim(); // Retrieve date value

    // Check if required fields are filled
    if (firstName !== '' && lastName !== '' && departmentName !== '' && date !== '') {
      // Redirect to redirect.html upon successful validation
      window.location.href = "redirect.html";
    } else {
      // If any of the required fields are empty, prevent form submission
      alert('Please fill in First Name, Last Name, Department Name, and Date to submit.');
    }
  });
});
