document.addEventListener("DOMContentLoaded", ()=>{
    // Recuperation du formulaire
    const form = document.forms.form_inscription
    const thankYouMessage= document.getElementById('thankYouMessage');
    
    // Recuperation des champs du formulaire par leur nom
    const { name, Surname, age, ville, province, celibataire,
             marie, telephone,nombre_enfant, Email,postcode,mot_passe } = form         
    const champs = { name, Surname, age, homme, femme,autre, ville, province, celibataire,
                    marie, telephone,nombre_enfant, Email,postcode,mot_passe } 
    
    // Recuperation des valeurs des champs
    const valeurs = { name: name.value, Surname: Surname.value, age:age.value, homme: homme.value ,femme: femme.value ,autre:autre.value,ville: ville.value, province: province.value, celibataire: celibataire.value,
                    marie: marie.value, telephone: telephone.value,nombre_enfant: nombre_enfant.value, Email: Email.value, postcode: postcode.value } 
    
     //Creation d'un objet pour retenir les erreurs de validation
    const erreur = { name: "", Surname:"", age:"", ville:"", province:"", celibataire:"",
                    marie: "", telephone:"",nombre_enfant:"", Email:"",postcode:"" } 
    
    // Les expressions regulieres utiles pour la validation
    const nameRegex = /^[a-zA-Z]{2,}$/
    const SurnameRegex = /^[a-zA-Z]{2,}$/
    const postRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/
    const telephoneRegex = /^\d{10}$/
    const villeRegex = /^[a-zA-Z]{4,}$/
    const provinceRegex= /^[a-zA-Z]{2,}$/
    
    // La fonction pour valider le champ courant
    function validerChamp(champ){
    const {name, value }=champ
    switch (name){
        case "name":{
            if(!nameRegex.text(value)){
                erreur.name= "le nom doit contenir au moins deux lettres"
                return false
            }else{
                erreur.name=""
                return true
            }
        }
        case "Surname":{
            if (!SurnameRegex.test(value)){
                erreur.Surname = "le prenom doit contenir au moins deux lettres"
                return false
            }else{
                erreur.Surname=""
                return true
            
            }
        }
        case "postcode":{
            if (!postRegex.test(value)) {
                erreur.postcode = "Pas du canada!"
                return false
            } else {
                erreur.postcode = ""
                return true
            }
        }
        case "telephone":{
            if (!telephoneRegex.test(value)){
                erreur.telephone= "entrer un numero valide"
                return false
            }else {
                erreur.telephone =""
                return true
            }
        }
        case "ville":{
            if (!villeRegex.test(value)){
                erreur.ville = "entrer une ville valide"
                return false
            }else{
                erreur.ville =""
                return true
            }
        }
        case "province":{
            if (!provinceRegex.test(value)){
                erreur.province = "la province doit contenir au moins deux lettre"
                return false
            }
            else{
                erreur.province=""
                return true
            }
        }
        default :
        break
    }
    }
     // Fonction pour valider les cases à cocher
     function validerCheckboxes() {
        if (!homme.checked && !femme.checked && !autre.checked) {
            erreur.genre = "Veuillez sélectionner un genre";
            return false;
        } else {
            erreur.genre = "";
            return true;
        }
        
    }

     // Recuperation des elements de la page a afficher
     const message = document.querySelector("#remerciement")
     form.addEventListener("soumis", (e) => {
    
        // Eviter le rafraichissement de la page
        e.preventDefault()
    
        // Verifier si toutes les valeurs des champs sont valides
        for (let champ in champs) {
    
            let test = validerChamp(champs[champ])
            if (!test) {
    
                // Afficher le message d'erreur dans le div qui suit le champ
                champs[champ].nextElementSibling.innerHTML = erreur[champ]
    
                // Mettre le message d'erreur en rouge
                champs[champ].nextElementSibling.style.color = "red"
    
                //Sortir de la fonction
                return
    
            }
    
        }
    
        // Si aucune erreur, envoyer au serveur / Ici on affiche juste une div
    
        //Rendre la div visible
        message.style.display = "block"
    
    })
    
    for (let champ in champs) {
        champs[champ].addEventListener("input", () => {
            // Recuperer la valeur entree
            const { name, value } = champs[champ]
            /*const {Surname, valeurs} = champs[champ]
            const {ville, value } = champs[champ]
            const{postcode, value} = champs[champ]
            const {province, value} = champs[champ]*/
    
            //Mettre a jour la variable valeurs
            valeurs[name] = value
            valeurs[Surname]= value
            valeurs [ville]= value
            valeurs [postcode]= value
            valeurs [province]=value
    
            //Validation comme vue precedemment
            let test = validerChamp(champs[champ])
            if (!test) {
                champs[champ].nextElementSibling.innerHTML = erreur[champ]
                champs[champ].nextElementSibling.style.color = "red"
            } else {
                champs[champ].nextElementSibling.innerHTML = ""
            }
            // Si aucune erreur, afficher le message de remerciement
            thankYouMessage.classList.remove('remerciement');
        form.reset(); // Réinitialiser le formulaire
    
        })
    
        form.addEventListener('soumis', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page
    
            // Simule l'envoi du formulaire avec une animation
            setTimeout(() => {
                thankYouMessage.classList.remove('remerciement'); // Affiche le message de succès
            }, 500); // Délai pour simuler l'envoi
        });
    
        // Ajoute une animation aux champs lors du focus
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                input.style.transform = 'scale(1.02)';
            });
    
            input.addEventListener('blur', function() {
                input.style.transform = 'scale(1)';
            });
        });
    
    }
    })
    