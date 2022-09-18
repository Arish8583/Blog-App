// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXtkeqEMeOddIzAMefr14f0i7Qv8AVPmE",
  authDomain: "restaurantapp-9849d.firebaseapp.com",
  databaseURL: "https://restaurantapp-9849d-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-9849d",
  storageBucket: "restaurantapp-9849d.appspot.com",
  messagingSenderId: "407205071460",
  appId: "1:407205071460:web:f40aff22c5441bbe926d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
