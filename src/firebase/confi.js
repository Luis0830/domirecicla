// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "domirecicla-c31a6.firebaseapp.com",
  projectId: "domirecicla-c31a6",
  storageBucket: "domirecicla-c31a6.appspot.com",
  messagingSenderId: "64613580047",
  appId: "1:64613580047:web:fee41f17f96c0f5962d27a",
  measurementId: "G-2EX87VVVZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;