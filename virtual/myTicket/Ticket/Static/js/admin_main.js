document.addEventListener("DOMContentLoaded", function () {
  let selectedTicketID = null;
  const ticketData = [
    { TicketID: 1, FirstName: 'John', LastName: 'Doe', DateTime: '2023-12-01 10:00:00', Department: 'IT', RequestType: 'Software Installation', Description: 'Need software installed on workstation', PriorityLevel: 2 },
    { TicketID: 2, FirstName: 'Alice', LastName: 'Smith', DateTime: '2023-12-02 11:30:00', Department: 'HR', RequestType: 'Leave Request', Description: 'Requesting vacation leave for next week', PriorityLevel: 1 },
  ];

  function displayTickets() {
    const adminTableBody = document.getElementById('adminTableBody');
    if (adminTableBody) {
      ticketData.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><input type="radio" name="selectedTicket" value="${ticket.TicketID}"></td>
          <td>${ticket.TicketID}</td>
          <td>${ticket.FirstName}</td>
          <td>${ticket.LastName}</td>
          <td>${ticket.DateTime}</td>
          <td>${ticket.Department}</td>
          <td>${ticket.RequestType}</td>
          <td>${ticket.Description}</td>
          <td>${ticket.PriorityLevel}</td>
        `;
        adminTableBody.appendChild(row);
      });
    }
  }

  window.getSelectedTicket = function () {
    const selectedTicket = document.querySelector('input[name="selectedTicket"]:checked');
    if (selectedTicket) {
      selectedTicketID = selectedTicket.value;
      console.log('Selected Ticket ID:', selectedTicketID);
      window.location.href = '/admin/request/'; 
    } else {
      console.log('Please select a ticket.');
    }
  }

  displayTickets();

  const loginLink = document.getElementById('loginLink');
  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '{% url "login" %}';
  });
});
