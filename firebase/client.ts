// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgoT3c-Ujfb-jDmm3hp-fESGERMrhAfg4",
  authDomain: "prep-view.firebaseapp.com",
  projectId: "prep-view",
  storageBucket: "prep-view.firebasestorage.app",
  messagingSenderId: "959962170219",
  appId: "1:959962170219:web:057bdb268361363095422e",
  measurementId: "G-SPNGQ3782Y"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);