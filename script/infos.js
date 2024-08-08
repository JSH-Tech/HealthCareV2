// Exemple de données des clients
const clients = [
    {
        nom: "DIALLO",
        prenom: "HABIB",
        email: "habib@gmail.com",
        dateCreation: "2024-08-01",
        adresse: "576 boulevard de la cite des jeunes, Appt 411",
        telephone: "5814475890",
        dateNaissance: "1990-01-01",
        genre: "Homme"
    },
];

function afficherClients() {
    const container = document.getElementById('client-container');
    container.innerHTML = ''; // Vider le contenu précédent

    clients.forEach(client => {
        const clientCard = document.createElement('div');
        clientCard.className = 'client-card';

        const nomLabel = document.createElement('label');
        nomLabel.textContent = 'Nom:';
        const nomInput = document.createElement('input');
        nomInput.type = 'text';
        nomInput.value = client.nom;
        nomInput.readOnly = true;

        const prenomLabel = document.createElement('label');
        prenomLabel.textContent = 'Prénom:';
        const prenomInput = document.createElement('input');
        prenomInput.type = 'text';
        prenomInput.value = client.prenom;
        prenomInput.readOnly = true;

        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.value = client.email;
        emailInput.readOnly = true;

        const dateCreationLabel = document.createElement('label');
        dateCreationLabel.textContent = 'Date de création:';
        const dateCreationInput = document.createElement('input');
        dateCreationInput.type = 'text';
        dateCreationInput.value = client.dateCreation;
        dateCreationInput.readOnly = true;

        const adresseLabel = document.createElement('label');
        adresseLabel.textContent = 'Adresse:';
        const adresseInput = document.createElement('textarea');
        adresseInput.value = client.adresse;
        adresseInput.readOnly = true;

        const telephoneLabel = document.createElement('label');
        telephoneLabel.textContent = 'Téléphone:';
        const telephoneInput = document.createElement('input');
        telephoneInput.type = 'tel';
        telephoneInput.value = client.telephone;
        telephoneInput.readOnly = true;

        const dateNaissanceLabel = document.createElement('label');
        dateNaissanceLabel.textContent = 'Date de naissance:';
        const dateNaissanceInput = document.createElement('input');
        dateNaissanceInput.type = 'date';
        dateNaissanceInput.value = client.dateNaissance;
        dateNaissanceInput.readOnly = true;

        const genreLabel = document.createElement('label');
        genreLabel.textContent = 'Genre:';
        const genreInput = document.createElement('input');
        genreInput.type = 'text';
        genreInput.value = client.genre;
        genreInput.readOnly = true;

        clientCard.appendChild(nomLabel);
        clientCard.appendChild(nomInput);
        clientCard.appendChild(prenomLabel);
        clientCard.appendChild(prenomInput);
        clientCard.appendChild(emailLabel);
        clientCard.appendChild(emailInput);
        clientCard.appendChild(dateCreationLabel);
        clientCard.appendChild(dateCreationInput);
        clientCard.appendChild(adresseLabel);
        clientCard.appendChild(adresseInput);
        clientCard.appendChild(telephoneLabel);
        clientCard.appendChild(telephoneInput);
        clientCard.appendChild(dateNaissanceLabel);
        clientCard.appendChild(dateNaissanceInput);
        clientCard.appendChild(genreLabel);
        clientCard.appendChild(genreInput);

        container.appendChild(clientCard);

        // Ajouter la classe pour l'animation
        setTimeout(() => {
            clientCard.classList.add('appear');
        }, 100);
    });
}

function showConfirmation() {
    document.getElementById('confirmation').classList.remove('hidden');
}

// Ajouter un événement de clic sur le bouton "MES INFOS"
document.getElementById('mesInfos').addEventListener('click', (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    afficherClients();
});

// Ajouter un événement de clic sur le bouton de confirmation
document.getElementById('viewInfoButton').addEventListener('click', (event) => {
    event.preventDefault();
    afficherClients();
});

