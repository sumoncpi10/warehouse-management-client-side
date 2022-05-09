// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYq-tVrVQKhnY7_IOFXjYd5-tm8o0IxMU",
    authDomain: "ema-john-simple-mine.firebaseapp.com",
    projectId: "ema-john-simple-mine",
    storageBucket: "ema-john-simple-mine.appspot.com",
    messagingSenderId: "66975535767",
    appId: "1:66975535767:web:07297fc2bc11e14ff64fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
