// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVSxN5RTzxvZICXyjAAaZmAX2_lg_HUsU",
  authDomain: "nanomart-2c12c.firebaseapp.com",
  projectId: "nanomart-2c12c",
  storageBucket: "nanomart-2c12c.appspot.com",
  messagingSenderId: "351320317884",
  appId: "1:351320317884:web:6dd42f96d3cb07231dd5b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
