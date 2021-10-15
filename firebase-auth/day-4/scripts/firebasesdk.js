// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, sendPasswordResetEmail, sendEmailVerification, reload, signInWithPhoneNumber } from 'firebase/auth';
import { getFirestore, collection, query, where, doc, setDoc, getDoc, getDocs, getDocFromCache } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCg-z5qQJgi1n-WVF31Zyt1_u75tTQrb2s",
  authDomain: "desai-fam.firebaseapp.com",
  projectId: "desai-fam",
  storageBucket: "desai-fam.appspot.com",
  messagingSenderId: "1059350980291",
  appId: "1:1059350980291:web:65f8cf9c595d192773a476",
  measurementId: "G-XSW8R0B4M8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();