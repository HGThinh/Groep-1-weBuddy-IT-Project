document.getElementById("mentorForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const roles = document.querySelectorAll('input[name="role"]:checked');
    const resume = document.getElementById("resume").files[0];
    const needsResume = Array.from(roles).some((role) =>
      ["tutor", "ebuddy"].includes(role.value)
    );
  
    if (needsResume && (!resume || resume.type !== "application/pdf")) {
      alert("For Tutor or eBuddy roles, uploading a valid PDF is mandatory.");
      return;
    }
  });

  document.querySelector('.mentor-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation
  
    const roles = document.querySelectorAll('input[name="role"]:checked');
    const courses = document.querySelectorAll('input[name="course"]:checked');
    const mode = document.querySelector('input[name="mode"]:checked');
    const motivation = document.getElementById('motivation').value.trim();
    const resumeInput = document.getElementById('resume');
    const selectedRoleValues = Array.from(roles).map(role => role.value);
  
    let isValid = true;
    let errorMessage = '';
  
    if (roles.length === 0) {
      isValid = false;
      errorMessage += 'Please select at least one role.\n';
    }
  
    if (courses.length === 0) {
      isValid = false;
      errorMessage += 'Please select at least one course.\n';
    }
  
    if (!mode) {
      isValid = false;
      errorMessage += 'Please select a mode of study.\n';
    }
  
    if (motivation === '') {
      isValid = false;
      errorMessage += 'Motivation letter cannot be empty.\n';
    }
  
    // Validate resume upload if Tutor or Buddy role is selected
    if (selectedRoleValues.includes('tutor') || selectedRoleValues.includes('ebuddy')) {
      if (!resumeInput.files.length) {
        isValid = false;
        errorMessage += 'Uploading a resume or score sheet is mandatory for Tutors and eBuddies.\n';
      }
    }
  
    if (!isValid) {
      alert(errorMessage);
    } else {
      alert('Form submitted successfully!');
      e.target.submit();
    }
  });
  //add route to the previous page or home page when form submitted 
  // add arrow to the previous page 
  