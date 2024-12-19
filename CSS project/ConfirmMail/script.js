// Haal de knop op via de ID
const resendBtn = document.getElementById('resend-btn');

// Voeg een event listener toe aan de knop
resendBtn.addEventListener('click', function() {
    // Toon een popup met de tekst "test" wanneer de knop wordt ingedrukt
    alert('A new mail has been sent ');
});

// Haal de knop op via de ID
const logoutBtn = document.getElementById('logout-btn');

// Voeg een event listener toe aan de knop
logoutBtn.addEventListener('click', function() {
    // Redirect de gebruiker naar de login pagina (of een andere pagina naar keuze)
    window.location.href = '../LoginPage/Login.html';  // Vervang 'login.html' door de URL van je keuze
});
