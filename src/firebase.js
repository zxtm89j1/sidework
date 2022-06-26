// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAHaqcEzW62qKDZoBQb9ziAUm1khz1Ai4",
  authDomain: "auth-sw.firebaseapp.com",
  projectId: "auth-sw",
  storageBucket: "auth-sw.appspot.com",
  messagingSenderId: "680203056249",
  appId: "1:680203056249:web:7ae4e4cca9710c3faa10a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
