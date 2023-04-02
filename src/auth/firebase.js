// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  collection,
  getFirestore,
  query,
  where,
  addDoc,
  getDocs,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBheZFK51jp5J2uzpyeJNMyUR1xlUIr_vs",
  authDomain: "web-app-countries.firebaseapp.com",
  projectId: "web-app-countries",
  storageBucket: "web-app-countries.appspot.com",
  messagingSenderId: "506368414321",
  appId: "1:506368414321:web:2e598001096a1ef99541d0",
  measurementId: "G-WRVMEG52S6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
};
