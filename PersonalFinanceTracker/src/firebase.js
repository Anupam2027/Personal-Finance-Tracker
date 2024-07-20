// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5LSpLAoKdIuWlXM9XUPkGeuwPoWUGd44",
  authDomain: "financely-rec-a40a2.firebaseapp.com",
  projectId: "financely-rec-a40a2",
  storageBucket: "financely-rec-a40a2.appspot.com",
  messagingSenderId: "713491635578",
  appId: "1:713491635578:web:41538dff697a667aadcac3",
  measurementId: "G-CXXVR2F2VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };