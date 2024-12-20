const reportForm = document.getElementById('reportForm');

reportForm.addEventListener('submit', (event) => {
  event.preventDefault(); // to prevent form from reloading the page
  const reason = document.querySelector('input[name="reason"]:checked').value;
  const complaint = document.getElementById('complaintText').value;

  console.log(`Reason: ${reason}`);
  console.log(`Complaint: ${complaint}`);

  alert('Your report has been submitted. Thank you!');
});
function redirectToResourceDetails() {
    window.location.href = "../ResourceDetails/resourcedetails.html";
  }
