// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0L0KtvgoQmtPnA_aEv_agARQ-1iasH1U",
  authDomain: "react-auth-integration-116ea.firebaseapp.com",
  projectId: "react-auth-integration-116ea",
  storageBucket: "react-auth-integration-116ea.appspot.com",
  messagingSenderId: "258696551701",
  appId: "1:258696551701:web:698b6ab20592b3fd971d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;