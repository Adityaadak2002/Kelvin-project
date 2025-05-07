import { auth } from './firebase'; // Ensure this path is correct
import firebase from "firebase/compat/app"; 
import "firebase/compat/auth"; // Import Firebase authentication

// Sign Up Function
export const signUp = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Sign-up error:", error.message);
  }
};

// Login Function
export const signIn = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Login error:", error.message);
  }
};

// Sign In with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    console.log("User signed in with Google:", result.user);
  } catch (error) {
    console.error("Google sign-in error:", error.message);
  }
};

// Sign In with Facebook
export const signInWithFacebook = async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const result = await auth.signInWithPopup(provider);
    console.log("User signed in with Facebook:", result.user);
  } catch (error) {
    console.error("Facebook sign-in error:", error.message);
  }
};
