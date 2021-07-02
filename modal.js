function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose= document.querySelector("span.close");
//--------Validation du formulaire et message de validation--------//
const Formulaire = document.getElementById("formulaire");
const formChild = Formulaire.children;

//----Gestion de l'affichage de la modale-----//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
modalClose.addEventListener("click",closeModal);
function closeModal() {
  modalbg.style.display = "none"; //permet de ne pas 'rendre visible' la modale"
}

//----Conditions remplissage du formulaire et affichage des différents messages-----//

function validationBorderFalse (element, element_error) {
  console.log("Entré dans la fonction validationBorderFalse-- Modification mise en page CSS");
  element_error.style.fontSize = '12px';
  element_error.style.color = 'red';
  element.style.border = 'solid 2px red';
}

function validationBorderTrue (element, element_error) {
  console.log("Entré dans la fonction validationBorderTrue-- Modification mise en page CSS");
  element_error.innerText = "";
  element.style.border = '';
}

//Check prénom
var prenom = document.getElementById("first");
var prenom_error = document.getElementById("first-error");

//Check nom
var nom = document.getElementById("last");
var nom_error = document.getElementById("last-error");

function validationNomPrenom (element, element_error) {
  console.log("Entré dans la fonction validationNomPrenom");
  if (element.value.length <2 || element.value.match(/^ /) || element.value.length == 0) {
    console.log("Entré dans la fonction validationNomPrenom -- Condition si faux");
    element_error.innerText = "Veuillez entrer 2 caractères ou plus pour dans ce champ.";
    validationBorderFalse (element, element_error);
    formulaireIncorrect++;
  } else {
    console.log("Entré dans la fonction validationNomPrenom -- Condition si vrai");
    validationBorderTrue (element, element_error);    
  }
}

//Check email
var mail = document.getElementById("email");
var mail_error = document.getElementById("email-error");
var regMail = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;

function validationMail () {
  console.log("Entré dans la fonction validationMail");
  if (regMail.exec(mail.value)) {
    console.log("Entré dans la fonction validationMail -- Condition si vrai");
    validationBorderTrue (mail, mail_error); 
  } else {
    console.log("Entré dans la fonction validationMail -- Condition si faux");
    mail_error.innerText = "Veuillez saisir une adresse mail valide.";
    validationBorderFalse (mail, mail_error);
    formulaireIncorrect++;
  }
}

//Check birthdate
var birthdate = document.getElementById("birthdate");
var birthdate_error = document.getElementById("birthdate-error");

function validationBirthdate () {
  console.log("Entré dans la fonction validationBirthdate");
  if (birthdate.value !=="") {
    console.log("Entré dans la fonction validationBirthdate -- Condition si vrai");
    validationBorderTrue (birthdate, birthdate_error); 
  } else {
    console.log("Entré dans la fonction validationBirthdate -- Condition si faux");
    birthdate_error.innerText = "Veuillez saisir une date.";
    validationBorderFalse (birthdate, birthdate_error);
    formulaireIncorrect++; 
  }
}

//Check quantity
var quantity = document.getElementById("quantity");
var quantity_error = document.getElementById("quantity-error");

function validationQuantity () {
  console.log("Entré dans la fonction validationQuantity");
  if (quantity.value >=0 && quantity.value<100 && quantity.value != "") {
    console.log("Entré dans la fonction validationQuantity -- Condition si vrai");
    validationBorderTrue (quantity, quantity_error); 
  } else {
    console.log("Entré dans la fonction validationQuantity -- Condition si faux");
    quantity_error.innerText = "Veuillez saisir une valeur comprise entre 0 et 99.";
    validationBorderFalse (quantity, quantity_error);
    formulaireIncorrect++; 
  }
}

//Check boutons radios -- villes
var location1 = document.getElementById("location1");
var location2 = document.getElementById("location2");
var location3 = document.getElementById("location3");
var location4 = document.getElementById("location4");
var location5 = document.getElementById("location5");
var location6 = document.getElementById("location6");
var location_error = document.getElementById("location-error");

function validationLocation () {
  console.log("Entré dans la fonction validationLocation");
  if (location1.checked||
    location2.checked||
    location3.checked||
    location4.checked||
    location5.checked||
    location6.checked) {
    console.log("Entré dans la fonction validationLocation -- Condition si vrai");
    location_error.innerText = ""; 
  } else {
    console.log("Entré dans la fonction validationLocation -- Condition si faux");
    location_error.innerText = "Veuillez sélectionner une ville."; 
    location_error.style.fontSize = '12px';
    location_error.style.color = 'red';
    formulaireIncorrect++;
  }
}

// Check case condition
var checkbox1 = document.getElementById("checkbox1");
var checkbox_error = document.getElementById("checkbox-error");

function validationConditions () {
  console.log("Entré dans la fonction validationConditions");  
  if(checkbox1.checked) {
    console.log("Entré dans la fonction validationConditions -- Condition si vrai");
    checkbox_error.innerText = "";
  } else {
    console.log("Entré dans la fonction validationConditions -- Condition si faux");
    checkbox_error.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
    checkbox_error.style.fontSize = '12px';
    checkbox_error.style.color = 'red';
    formulaireIncorrect++;
  }
}

//Bouton btnSubmit et validation du formulaire
var btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", validationFormulaire);

function validationFormulaire(event){

  event.preventDefault();
  formulaireIncorrect = 0;
  console.log("validation formulaire");
  validationNomPrenom (prenom, prenom_error);
  validationNomPrenom (nom, nom_error);
  validationMail ();
  validationBirthdate ();
  validationQuantity ();
  validationLocation ();
  validationConditions ();
  console.log("Nombre de champs incorrects : " + formulaireIncorrect);
  afficherMessage (formulaireIncorrect);
}

function afficherMessage (formulaireIncorrect) {
  console.log("entré dans afficher message");
  if (formulaireIncorrect == 0) {
    console.log("nous sommes presque dans le texte")
    for (child of formChild) {
      child.classList.add("select-hide");
    }
    console.log("Entré dans l'affichage du message de remerciement")
    messageRemerciement ();
  }  
}

function messageRemerciement () { //ajout du message de remerciement
  console.log("Entré dans la fonction messageRemerciement")
  var textValid = document.createElement("p");
  Formulaire.appendChild(textValid).innerText = "Merci ! Votre réservation a été reçue.";
  textValid.setAttribute('id', 'Text-validation');
}
