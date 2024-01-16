document.addEventListener("DOMContentLoaded", function () {

  function getCurrentTimeInTehran() {
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
      const options = { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tehran' };
      currentTimeElement.textContent = new Date().toLocaleTimeString('en-US', options);
    }
  }


  setInterval(getCurrentTimeInTehran, 1000);


  function displayTickets() {
    const ticketListElement = document.getElementById('ticketList');

  
    const ticketData = [
      { ticketNumber: 1, description: "This is the first ticket." },
      { ticketNumber: 2, description: "This is the second ticket." },

    ];


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


  displayTickets();


  function logout() {
    window.location.href = "login.html";
  }

 
  const logoutButton = document.querySelector('.logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', logout);
  }
});
