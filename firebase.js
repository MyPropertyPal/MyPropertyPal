// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLOemS_I1VO-2FztJW2Tiqz81lKjms7ag",
  authDomain: "my-property-pal-337e2.firebaseapp.com",
  projectId: "my-property-pal-337e2",
  storageBucket: "my-property-pal-337e2.appspot.com",
  messagingSenderId: "735822899863",
  appId: "1:735822899863:web:ad2355b966c523e7ed17d2",
  measurementId: "G-FBGV2P0DET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
