document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        // Full Name Validation
        if (fullName.value.length < 5) {
            nameError.textContent = 'Name must not be less than 5 characters';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email Validation
        if (!email.value.includes('@')) {
            emailError.textContent = 'Enter a correct email';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Phone Number Validation
        if (phone.value === '123456789' || phone.value.length !== 10) {
            phoneError.textContent = 'Enter a valid 10-digit phone number';
            valid = false;
        } else {
            phoneError.textContent = '';
        }

        // Password Validation
        if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullName.value.toLowerCase()) {
            passwordError.textContent = 'Password is not strong';
            valid = false;
        } else {
            passwordError.textContent = '';
        }

        // Confirm Password Validation
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            valid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        if (valid) {
            alert('Form submitted successfully!');
            // Perform form submission (e.g., send data to server)
        }
    });

    // Optional: Add event listeners for real-time validation feedback
    fullName.addEventListener('input', () => {
        if (fullName.value.length >= 5) {
            nameError.textContent = '';
        }
    });

    email.addEventListener('input', () => {
        if (email.value.includes('@')) {
            emailError.textContent = '';
        }
    });

    phone.addEventListener('input', () => {
        if (phone.value.length === 10 && phone.value !== '123456789') {
            phoneError.textContent = '';
        }
    });

    password.addEventListener('input', () => {
        if (password.value.length >= 8 && password.value.toLowerCase() !== 'password' && password.value.toLowerCase() !== fullName.value.toLowerCase()) {
            passwordError.textContent = '';
        }
    });

    confirmPassword.addEventListener('input', () => {
        if (password.value === confirmPassword.value) {
            confirmPasswordError.textContent = '';
        }
    });
});
