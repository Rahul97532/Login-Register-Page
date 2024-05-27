// register.js

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Registration successful');
            // Redirect to another page or perform actions upon successful registration
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});
