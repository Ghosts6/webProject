function submitAnswer() {
  const adminNote = document.getElementById('adminNote').value;
  const selectedStatus = document.getElementById('status').value;


  console.log('Admin Note:', adminNote);
  console.log('Selected Status:', selectedStatus);



  window.location.href = 'admin_main.html';
}

function redirectToAdminMain() {

  window.location.href = 'admin_main.html';
}
