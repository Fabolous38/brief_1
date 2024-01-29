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
  // event.preventDefault() prevents the default behavior of the form submission, which is to reload the page. 
  // By calling event.preventDefault(), the developer ensures that the form submission does not trigger a full page reload.
  var lastname = document.getElementById('lastname');
  var firstname = document.getElementById('firstname');
  var email = document.getElementsByName('email')[0];
  var password = document.getElementsByName('psw')[0].value;
  


  // // Create an array of form fields
  // var formFields = [lastname, firstname, email, password];

  // // Flag to check if any field is empty
  // var isEmpty = false;

  // // Loop through form fields
  // for (var i = 0; i < formFields.length; i++) {
  //   // Check if the field is empty
  //   if (!formFields[i].value.trim()) {
  //     // Replace placeholder with an error message in red
  //     formFields[i].setAttribute('placeholder', 'Veuillez remplir ce champ');
  //     formFields[i].style.color = 'red';
  //     isEmpty = true;
  //   } else {
  //     // Reset placeholder and text color if the field is not empty
  //     formFields[i].setAttribute('placeholder', ''); // Reset placeholder
  //     formFields[i].style.color = ''; // Reset text color
  //   }
  // }

  // Check if password meets the criteria
  if (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
    alert('Le mot de passe doit avoir au moins 6 caractères, une lettre majuscule et un chiffre.');
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