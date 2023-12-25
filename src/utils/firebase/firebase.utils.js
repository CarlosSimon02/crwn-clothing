// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCaNQf12eRIAD1F0JiqWAJ4QBp2vBplUFw",
  authDomain: "crwn-clothing-db-38724.firebaseapp.com",
  projectId: "crwn-clothing-db-38724",
  storageBucket: "crwn-clothing-db-38724.appspot.com",
  messagingSenderId: "632776773283",
  appId: "1:632776773283:web:ec416f66e8871b0840f916",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
 