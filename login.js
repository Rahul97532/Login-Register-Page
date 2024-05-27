// login.js

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful');
            window.location.href = 'https://web.whatsapp.com/';
            // Redirect to another page or perform actions upon successful login
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});
