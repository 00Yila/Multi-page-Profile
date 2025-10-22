document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    // Get form elements
    const nameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Get error message elements
    const nameError = document.getElementById('test-contact-error-name');
    const emailError = document.getElementById('test-contact-error-email');
    const subjectError = document.getElementById('test-contact-error-subject');
    const messageError = document.getElementById('test-contact-error-message');
    
    // Get success message element
    const successMessage = document.getElementById('test-contact-success');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop default form submission
        let isValid = validateForm();

        if (isValid) {
            // Hide all error messages
            clearErrors();
            
            // Show success message
            successMessage.textContent = 'Your message has been sent successfully!';
            successMessage.hidden = false;
            
            // Reset the form
            form.reset();
            
            // Optionally hide success message after a few seconds
            setTimeout(() => {
                successMessage.hidden = true;
            }, 5000);
        } else {
            // Hide success message if validation fails
            successMessage.hidden = true;
        }
    });

    function validateForm() {
        let valid = true;
        clearErrors();

        // 1. Name validation (required)
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Full name is required.';
            nameInput.setAttribute('aria-invalid', 'true');
            valid = false;
        }

        // 2. Email validation (required and valid format)
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailInput.setAttribute('aria-invalid', 'true');
            valid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address (e.g., name@example.com).';
            emailInput.setAttribute('aria-invalid', 'true');
            valid = false;
        }

        // 3. Subject validation (required)
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required.';
            subjectInput.setAttribute('aria-invalid', 'true');
            valid = false;
        }

        // 4. Message validation (required and min 10 chars)
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            messageInput.setAttribute('aria-invalid', 'true');
            valid = false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            messageInput.setAttribute('aria-invalid', 'true');
            valid = false;
        }

        return valid;
    }

    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        
        nameInput.setAttribute('aria-invalid', 'false');
        emailInput.setAttribute('aria-invalid', 'false');
        subjectInput.setAttribute('aria-invalid', 'false');
        messageInput.setAttribute('aria-invalid', 'false');
    }

    function isValidEmail(email) {
        // Simple regex for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});