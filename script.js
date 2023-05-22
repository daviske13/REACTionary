    // Handle navigation highlighting
    const navigationLinks = document.querySelectorAll('nav ul li a');

    navigationLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove 'active' class from all links
        navigationLinks.forEach(link => {
        link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Get the target section ID from the href attribute
        const targetSectionId = this.getAttribute('href').substring(1);

        // Scroll to the target section smoothly
        document.getElementById(targetSectionId).scrollIntoView({
        behavior: 'smooth'
        });
    });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate name field
    if (nameField.value.trim() === '') {
        displayErrorMessage(nameField, 'Name is required.');
    } else {
        removeErrorMessage(nameField);
    }

    // Validate email field
    if (emailField.value.trim() === '') {
        displayErrorMessage(emailField, 'Email is required.');
    } else if (!isValidEmail(emailField.value)) {
        displayErrorMessage(emailField, 'Invalid email address.');
    } else {
        removeErrorMessage(emailField);
    }

    // If all fields are valid, submit the form
    if (!nameField.classList.contains('error') && !emailField.classList.contains('error')) {
        contactForm.submit();
    }
    });

    function displayErrorMessage(field, message) {
    removeErrorMessage(field);
    field.classList.add('error');

    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.innerText = message;

    field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    function removeErrorMessage(field) {
    field.classList.remove('error');

    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    }

    function isValidEmail(email) {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
    }
