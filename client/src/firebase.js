import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZLpviMo71JlhHM5Xc9TMI32u_iaJ11sA",
  authDomain: "deltakabab.firebaseapp.com",
  projectId: "deltakabab",
  storageBucket: "deltakabab.appspot.com",
  messagingSenderId: "247348033448",
  appId: "1:247348033448:web:09a88d6156fb2af18b8f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app,auth };
