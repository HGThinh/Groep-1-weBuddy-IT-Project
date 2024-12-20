document.addEventListener('DOMContentLoaded', () => {
    console.log("Resource Details Page Loaded");
  
    // interaction buttons when downloading and giving feedback
// add the comments or feedback on the page and delete points when user downloads the resource
    const downloadButton = document.querySelector('.download-btn');
    downloadButton.addEventListener('click', () => {
      alert('Resource downloaded successfully!');
    });
  
    const feedbackButton = document.querySelector('.feedback-btn');
    feedbackButton.addEventListener('click', () => {
      const feedback = document.querySelector('textarea').value;
      if (feedback.trim() === '') {
        alert('Please enter your feedback before sending.');
      } else {
        alert('Thank you for your feedback!');
      }
    });
  });
  //add route to report page
  function redirectToReport() {
    window.location.href = "../Report/report.html";
  }