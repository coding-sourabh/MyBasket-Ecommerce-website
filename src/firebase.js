import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGjnasAQXFpKEK5E3qQt40_9QOOqdIC1k",
  authDomain: "clone-80abb.firebaseapp.com",
  projectId: "clone-80abb",
  storageBucket: "clone-80abb.appspot.com",
  messagingSenderId: "318316285667",
  appId: "1:318316285667:web:657f0b061af3010269ffd6",
  measurementId: "G-7L81380K6D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); // Its like a variable for the use of sighning in and out.

export {db , auth};