import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEigbzXw8IgpTIzqFJCatsHc6hCMvnjqE",
    authDomain: "dashboard-34e4a.firebaseapp.com",
    projectId: "dashboard-34e4a",
    storageBucket: "dashboard-34e4a.appspot.com",
    messagingSenderId: "1026717846531",
    appId: "1:1026717846531:web:56006738ca081aa8ab9236"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app,auth };
