document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.setAttribute('aria-label', 
            type === 'password' ? 'Show password' : 'Hide password'
        );
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            if (!email) {
                emailInput.setAttribute('aria-invalid', 'true');
                emailInput.focus();
            }
            if (!password) {
                passwordInput.setAttribute('aria-invalid', 'true');
                passwordInput.focus();
            }
            return;
        }

        emailInput.setAttribute('aria-invalid', 'false');
        passwordInput.setAttribute('aria-invalid', 'false');
    });

    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            input.setAttribute('aria-invalid', 'false');
        });
    });
});