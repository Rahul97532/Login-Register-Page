  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5oaiPE9vf1vZiCUPxLYNgQ8sUsPVD8vs",
    authDomain: "girkin-line-generation.firebaseapp.com",
    projectId: "girkin-line-generation",
    storageBucket: "girkin-line-generation.appspot.com",
    messagingSenderId: "739007689979",
    appId: "1:739007689979:web:1f71d7fbd237e516016c5e",
    measurementId: "G-1G91K1YXHF"
  };

  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const auth= app.auth();
  const database= firebase.database();



  function register(){
    email= document.getElementById('register-email');
    password= document.getElementById('register-password');

    if(validateEmail(email)==false||validate_password(password)==false){
      alert("Email or password is out of line.");
      return;
    } 

    auth.createUserWithEmailAndPassword(email,password).then(function(){
      var user=auth.currentUser

      var database_ref= database.ref();
      var user_data={
        email:email,
        last_login:Date.now()
      }
      database_ref.child('users/'+user.uid).set(user_data);

      alert("User Created!!");

    }).catch(function(error){
      var error_code=error.code;
      var error_message=error.message;
      alert(error_message);
    })

  }

  function validateEmail(){
    return XPathExpression.test(/^[^@]+@\w+(\.\w+)+w$/);
  }

  function validate_password(password){
    return password>=6;
  }

  function validateField(field){
    if(field==null) return false;
    if(field.length<=0) return false;
    return true;
  }