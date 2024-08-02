// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnu2IFryAzmF4S6ofapIeZG5ikME_xWLs",
  authDomain: "webtekdi-21847.firebaseapp.com",
  projectId: "webtekdi-21847",
  storageBucket: "webtekdi-21847.appspot.com",
  messagingSenderId: "594810420418",
  appId: "1:594810420418:web:b6176064848081f603cf5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
