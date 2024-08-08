document.addEventListener("DOMContentLoaded", () => {
    const formulaire = document.forms.mode;
    console.log("Formulaire:", formulaire);

    formulaire.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        console.log("Form submitted");

        // Get all input fields and select fields
        const inputFields = document.querySelectorAll('.modeForm input');
        const selectFields = document.querySelectorAll('.modeForm select');
        let allEmpty = true;

        // Check if all input fields are empty
        inputFields.forEach(function(input) {
            console.log("Input value:", input.value);
            if (input.value.trim() !== '') {
                allEmpty = false;
            }
        });

        // Check if all select fields are empty
        selectFields.forEach(function(select) {
            console.log("Select value:", select.value);
            if (select.value.trim() !== '' && select.value.trim() !== 'null' && select.value.trim() !== '0') {
                allEmpty = false;
            }
        });

        // Show error message if all fields are empty
        const errorDiv = document.querySelector('#titreErreur');
        console.log("Error div:", errorDiv); // Check if the errorDiv is correctly selected

        if (allEmpty) {
            errorDiv.textContent = "Veuillez remplir au moins un champ pour modifier vos informations.";
        } else {
            errorDiv.textContent = "";
            // Uncomment the next line to allow form submission if needed
            event.target.submit();
        }
    });
});
