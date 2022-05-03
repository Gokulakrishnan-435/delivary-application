import firebase from "firebase";
// Authondication
import "firebase/auth";
// fire store database
import "firebase/firestore";
// realtime database
import "firebase/database";
// storage
import "firebase/storage";
// function
import "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyBvWa1XEOchKUIXT1Ux4GKmfgU-Xj2fsy0",
  authDomain: "delivery-app-fea60.firebaseapp.com",
  projectId: "delivery-app-fea60",
  storageBucket: "delivery-app-fea60.appspot.com",
  messagingSenderId: "502036197403",
  appId: "1:502036197403:web:9d204bd07e18833694c8be",
  measurementId: "G-H5FVN395TG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
