// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdU-rmJbWabnkIxSlypc7-I_XjpO_YA44",
  authDomain: "chatappreact-fa2e5.firebaseapp.com",
  projectId: "chatappreact-fa2e5",
  storageBucket: "chatappreact-fa2e5.appspot.com",
  messagingSenderId: "345929409596",
  appId: "1:345929409596:web:9849cdcddebc549d938f39",
  measurementId: "G-D28302W20H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);