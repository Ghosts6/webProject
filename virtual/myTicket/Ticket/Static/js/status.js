document.addEventListener("DOMContentLoaded", function () {
  // Function to get current time in Tehran timezone and display it
  function getCurrentTimeInTehran() {
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
      const options = { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tehran' };
      currentTimeElement.textContent = new Date().toLocaleTimeString('en-US', options);
    }
  }

  // Update current time in Tehran timezone every second
  setInterval(getCurrentTimeInTehran, 1000);

  // Function to display tickets
  function displayTickets() {
    const ticketListElement = document.getElementById('ticketList');

    // Simulated ticket data (replace this with your actual data retrieval)
    const ticketData = [
      { ticketNumber: 1, description: "This is the first ticket." },
      { ticketNumber: 2, description: "This is the second ticket." },
      // Add more ticket objects as needed
    ];

    // Loop through ticket data and create ticket elements
    ticketData.forEach(ticket => {
      const ticketElement = document.createElement('div');
      ticketElement.classList.add('ticket');
      ticketElement.innerHTML = `
        <h3>Ticket #${ticket.ticketNumber}</h3>
        <p>Description: ${ticket.description}</p>
      `;
      ticketListElement.appendChild(ticketElement);
    });
  }

  // Display tickets when the page loads
  displayTickets();

  // Function to handle logout
  function logout() {
    window.location.href = "login.html"; // Redirect to login page
  }

  // Attach click event to the logout button
  const logoutButton = document.querySelector('.logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', logout);
  }
});
