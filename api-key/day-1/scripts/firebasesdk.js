// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, sendPasswordResetEmail, sendEmailVerification, reload, signInWithPhoneNumber } from 'firebase/auth';
import { getFirestore, collection, query, where, doc, setDoc, getDoc, getDocs, getDocFromCache } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// go to project overview and register your app to get ahold of the app config below
// You'd need this to communicate with all firebase services
export const firebaseConfig = {
  apiKey: "AIzaSyB2dgdPeyBxrEPbeXv-6M4Eiw5DkF1d7Ds",
  authDomain: "percenthnd.firebaseapp.com",
  projectId: "percenthnd",
  storageBucket: "percenthnd.appspot.com",
  messagingSenderId: "807018223306",
  appId: "1:807018223306:web:e6ea54acbb1b625a47c633",
  measurementId: "G-XSCXEM5WHQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();