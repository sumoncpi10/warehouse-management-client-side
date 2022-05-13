import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    // measurementId: process.env.REACT_APP_measurementId
    apiKey: "AIzaSyCkjTm97AtHB6QhzS-SDminBB57i8ezn48",
    authDomain: "xcn-warehouse.firebaseapp.com",
    projectId: "xcn-warehouse",
    storageBucket: "xcn-warehouse.appspot.com",
    messagingSenderId: "710385020410",
    appId: "1:710385020410:web:887e3662f96327b6234843",
    measurementId: "G-5PW9BJQR7S"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
