function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    // Validation for empty fields
    if (name === "" || email === "" || message === "") {
        showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
        valid = false;
    }

    // Name validation
    if (!validateName(name)) {
        showMessage('Veuillez entrer un nom valide.', 'error');
        valid = false;
    }

    // Email validation
    if (!validateEmail(email)) {
        showMessage('Veuillez entrer une adresse e-mail valide.', 'error');
        valid = false;
    }

    // Phone validation (optional)
    if (phone !== "" && !validatePhone(phone)) {
        showMessage('Veuillez entrer un numéro de téléphone valide.', 'error');
        valid = false;
    }

    if (valid) {
        showMessage('Merci de nous avoir contacté. Nous vous répondrons dès que possible.', 'success');
        return true; // Allow form submission
    }

    return false; // Prevent form submission
}

function validateName(name) {
    const re = /^[a-zA-ZàâäéèêëïîôöùûüÿçÀÂÄÉÈÊËÏÎÔÖÙÛÜŸÇ' -]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(phone);
}

function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = type;
    formMessage.classList.remove('hidden');
    formMessage.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            form.reset(); // Reset form fields
        }
    });
});
