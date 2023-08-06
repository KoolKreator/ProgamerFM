// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuztJIZjS7PpSKuk3zxZMUkaGXxfZsFcQ",
  authDomain: "progameerfm.firebaseapp.com",
  projectId: "progameerfm",
  storageBucket: "progameerfm.appspot.com",
  messagingSenderId: "758268911726",
  appId: "1:758268911726:web:88698d07a78fc86b80467f",
  measurementId: "G-GM8VFWDZ18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
