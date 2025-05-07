// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Authentication
import "firebase/compat/database"; // Realtime Database

const firebaseConfig = {
    apiKey: "AIzaSyBZNN2ZyApvqL9RR8TiWFSV_K4jaDk3L5o",
    authDomain: "apaar-sakti.firebaseapp.com",
    databaseURL: "https://apaar-sakti-default-rtdb.firebaseio.com",
    projectId: "apaar-sakti",
    storageBucket: "apaar-sakti.firebasestorage.app",
    messagingSenderId: "813725474901",
    appId: "1:813725474901:web:e62e5b62d1a7fda89bf4dc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export authentication and database
export const auth = app.auth(); // Declare and export auth
export const database = app.database(); // Declare and export database

// Google and Facebook providers
export const googleProvider = new firebase.auth.GoogleAuthProvider(); // Declare and export googleProvider
export const facebookProvider = new firebase.auth.FacebookAuthProvider(); // Declare and export facebookProvider

export default app; // Export the app