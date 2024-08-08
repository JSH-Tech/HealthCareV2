// Fonction pour valider l'adresse e-mail
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Fonction pour valider le mot de passe
function validatePassword(password) {
    return password.length >= 8;
}

// Fonction pour afficher un message d'erreur
function displayError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
}

// Écouteur d'événement pour le formulaire
document.getElementById('monForm2').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('motDePasse').value;

    if (!validateEmail(email) || !validatePassword(password)) {
        displayError('Veuillez entrer une adresse e-mail valide et un mot de passe d\'au moins 8 caractères.');
    } else {
        // Envoyer le formulaire
        // ...
    }
});
