// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8NTshwRT3PpTnsOeoznCp_bcRLHklit0",
  authDomain: "pokemon-app-aa0f8.firebaseapp.com",
  projectId: "pokemon-app-aa0f8",
  storageBucket: "pokemon-app-aa0f8.appspot.com",
  messagingSenderId: "273729512545",
  appId: "1:273729512545:web:2ced2b61c0a36b45d6b620",
  measurementId: "G-0WGRVGKEWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
