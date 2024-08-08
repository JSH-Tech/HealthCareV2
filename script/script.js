document.addEventListener("DOMContentLoaded", () => {
    let formulaire = document.forms.mode;
    console.log("Formulaire:", formulaire);

    // Regex pour validation
    const nameRegex = /^[a-zA-Z\s-]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    // Validation des champs individuels
    function validerChamps(champ) {
        const { name, value } = champ;

        switch (name) {
            case "nom":
            case "prenoms":
                if (!nameRegex.test(value.trim())) {
                    return "Ce champ doit contenir uniquement des lettres, des espaces ou des tirets.";
                }
                break;
            case "email":
                if (value.trim() && !emailRegex.test(value.trim())) {
                    return "Veuillez entrer une adresse email valide.";
                }
                break;
            case "tel":
                if (value.trim() && !phoneRegex.test(value.trim())) {
                    return "Le numéro de téléphone doit comporter exactement 10 chiffres.";
                }
                break;
            case "cp":
                if (value.trim() && !postalCodeRegex.test(value.trim())) {
                    return "Veuillez entrer un code postal valide.";
                }
                break;
        }
        return "";
    }

    formulaire.addEventListener('input', function (event) {
        event.preventDefault();
        console.log("Form submitted");

        const inputFields = document.querySelectorAll('.modeForm input');
        const selectFields = document.querySelectorAll('.modeForm select');
        let allEmpty = true;
        let errors = [];

        inputFields.forEach(function (input) {
            const errorMessage = validerChamps(input);
            const errorDiv = input.nextElementSibling;
            
            if (input.value.trim() !== '') {
                allEmpty = false;
            }
            
            if (errorMessage) {
                errors.push({ field: input.name, message: errorMessage });
                if (errorDiv) {
                    errorDiv.textContent = errorMessage;
                    errorDiv.style.color = "red";
                }
            } else {
                if (errorDiv) {
                    errorDiv.textContent = "";
                }
            }
        });

        selectFields.forEach(function (select) {
            if (select.value.trim() !== '' && select.value.trim() !== 'null' && select.value.trim() !== '0') {
                allEmpty = false;
            }
        });

        const errorDiv = document.querySelector('#titreErreur');
        if (allEmpty) {
            errorDiv.textContent = "Veuillez remplir au moins un champ pour modifier vos informations.";
        } else if (errors.length > 0) {
            errorDiv.textContent = "Veuillez corriger les erreurs ci-dessus avant de soumettre le formulaire.";
        } else {
            errorDiv.textContent = "";
            event.target.submit();
        }
    });

    formulaire.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Form submitted");

        const inputFields = document.querySelectorAll('.modeForm input');
        const selectFields = document.querySelectorAll('.modeForm select');
        let allEmpty = true;
        let errors = [];

        inputFields.forEach(function (input) {
            const errorMessage = validerChamps(input);
            const errorDiv = input.nextElementSibling;
            
            if (input.value.trim() !== '') {
                allEmpty = false;
            }
            
            if (errorMessage) {
                errors.push({ field: input.name, message: errorMessage });
                if (errorDiv) {
                    errorDiv.textContent = errorMessage;
                    errorDiv.style.color = "red";
                }
            } else {
                if (errorDiv) {
                    errorDiv.textContent = "";
                }
            }
        });

        selectFields.forEach(function (select) {
            if (select.value.trim() !== '' && select.value.trim() !== 'null' && select.value.trim() !== '0') {
                allEmpty = false;
            }
        });

        const errorDiv = document.querySelector('#titreErreur');
        if (allEmpty) {
            errorDiv.textContent = "Veuillez remplir au moins un champ pour modifier vos informations.";
        } else if (errors.length > 0) {
            errorDiv.textContent = "Veuillez corriger les erreurs ci-dessus avant de soumettre le formulaire.";
        } else {
            errorDiv.textContent = "";
            event.target.submit();
        }
    });
});
