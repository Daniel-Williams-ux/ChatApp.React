// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6OIidos2IwHu8-jkf2Qbcex3VCyo83uE",
  authDomain: "chatapp-4694a.firebaseapp.com",
  projectId: "chatapp-4694a",
  storageBucket: "chatapp-4694a.appspot.com",
  messagingSenderId: "600934600105",
  appId: "1:600934600105:web:7bd547344361f8415ac8b8",
  measurementId: "G-8JH7QKNEQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);