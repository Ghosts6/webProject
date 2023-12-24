function submitAnswer() {
  const adminNote = document.getElementById('adminNote').value;
  const selectedStatus = document.getElementById('status').value;

  // Perform actions with admin note and selected status
  console.log('Admin Note:', adminNote);
  console.log('Selected Status:', selectedStatus);
  // Add further logic for handling the answer and status

  // Redirect to admin_main.html
  window.location.href = 'admin_main.html';
}

function redirectToAdminMain() {
  // Redirect to admin_main.html
  window.location.href = 'admin_main.html';
}
