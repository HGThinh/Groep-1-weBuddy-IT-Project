document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (name && email && password && confirmPassword) {
        window.location.href = '../ConfirmMail/index.html'; // Redirect after account creation
    } else {
        alert("Please fill in all fields.");
    }
});
