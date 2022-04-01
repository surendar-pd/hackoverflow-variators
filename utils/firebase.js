import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAjhaWzQxd7MS-VhrzDPcud6sDjSgADsQI",
  authDomain: "hackoverflow-e8593.firebaseapp.com",
  projectId: "hackoverflow-e8593",
  storageBucket: "hackoverflow-e8593.appspot.com",
  messagingSenderId: "651019159665",
  appId: "1:651019159665:web:8539c7cc0a57fb0eedf3d0",
  measurementId: "G-Q9RDH7KEG5",
});

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export {
  app,
  auth,
  signInWithPopup,
  googleProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,sendEmailVerification
};
