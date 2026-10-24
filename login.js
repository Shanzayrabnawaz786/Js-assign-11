import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAekadwS6mtFiBMa4ZyIj4zJ2qovMLgnM",
  authDomain: "websites-com.firebaseapp.com",
  projectId: "websites-com",
  storageBucket: "websites-com.firebasestorage.app",
  messagingSenderId: "1044705574166",
  appId: "1:1044705574166:web:94e478e4cf5cee73de6437",
  measurementId: "G-N9X5YZP6E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const auth = getAuth(); 

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
    
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value; 

  // Firebase Sign-In Method
  signInWithEmailAndPassword(auth, email, pass) 
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You are successfuly login")
      // ... 
      
      window.location.href = "todo.html"; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      alert("Error: " + errorMessage);
    });
  // console.log("working ");
  
});



