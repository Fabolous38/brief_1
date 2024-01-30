function openForm() {
  var popup = document.getElementById("myForm");
  popup.style.display = "block";
}


function closeForm() {
  var popup = document.getElementById("myForm");
  popup.style.display = "none";
}



window.onclick = function(event) {
  var popup = document.getElementById('myForm');
  if (event.target == popup) {
    closeForm();
  }
}

document.querySelector('.form-container').addEventListener('submit', function (event) {
  event.preventDefault();
// event.preventDefault() empêche le comportement par défaut de la soumission du formulaire, qui est de recharger la page. 
// En appelant event.preventDefault(), on s'assure que la soumission du formulaire ne déclenche pas un rechargement complet de la page.


  var password = document.getElementsByName('psw')[0].value;
  
// Vérifie si le mot de passe ne respecte pas les critères suivants :
// - La longueur du mot de passe est inférieure à 6 caractères
// - Le mot de passe ne contient pas au moins une lettre majuscule (A-Z)
// - Le mot de passe ne contient pas au moins un chiffre (\d)
if (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
  // Affiche une alerte indiquant les critères non respectés
  alert('Le mot de passe doit avoir au moins 6 caractères, une lettre majuscule et un chiffre.');
  // Interrompt l'exécution du reste du code
  return;
}


  // Clear the form
  document.querySelector('.form-container').reset();

  // Replace form with a success message
  document.querySelector('.form-container').innerHTML = `
    <div>
      <button type="button" class="btn cancel" onclick="closeForm()">✖</button>
      <h2>Inscription</h2>
    </div>
    <p>Nous avons bien pris en compte votre demande, veuillez vérifier votre boîte mail pour valider votre inscription.</p>
    <p>Cette fenêtre se fermera automatiquement dans 5 secondes.</p>
  `;

  // Close the form automatically after 5 seconds
  setTimeout(function () {
    closeForm();
  }, 5000);
});