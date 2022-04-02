import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
  
} from "firebase/auth";
import {doc,setDoc,getFirestore, onSnapshot,collection } from "firebase/firestore";

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
const db = getFirestore();


export {
  app,
  auth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,sendEmailVerification,
  setDoc,doc,db, onSnapshot,collection
};
