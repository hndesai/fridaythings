{/* <script type="module" >
    // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
    // https://firebase.google.com/docs/web/setup#available-libraries
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
    import { getFirestore, collection, query, where, doc, setDoc, getDoc, getDocs, getDocFromCache } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCg-z5qQJgi1n-WVF31Zyt1_u75tTQrb2s",
        authDomain: "desai-fam.firebaseapp.com",
        projectId: "desai-fam",
        // storageBucket: "desai-fam.appspot.com",
        // messagingSenderId: "1059350980291",
        appId: "1:1059350980291:web:65f8cf9c595d192773a476",
        measurementId: "G-XSW8R0B4M8",
    };
    // https://console.firebase.google.com/project/desai-fam/firestore
    // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const analytics = getAnalytics(app);
     const auth = getAuth();
     const db = getFirestore();
   </script>




<script>
      let firebaseApp = null;
      let firebaseAuth = null;
      let firebaseDb = null;
    </script>
    <script type="module">
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
      // https://firebase.google.com/docs/web/setup#available-libraries
      import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
      import { getFirestore, collection, query, where, doc, setDoc, getDoc, getDocs, getDocFromCache } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCg-z5qQJgi1n-WVF31Zyt1_u75tTQrb2s",
        authDomain: "desai-fam.firebaseapp.com",
        projectId: "desai-fam",
        // databaseURL: "https://desai-fam.firebaseio.com",
        // storageBucket: "desai-fam.appspot.com",
        // messagingSenderId: "1059350980291",
        appId: "1:1059350980291:web:65f8cf9c595d192773a476",
        measurementId: "G-XSW8R0B4M8",
      };
      // https://console.firebase.google.com/project/desai-fam/firestore
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      firebaseApp = app;
      const analytics = getAnalytics(app);
      const auth = getAuth(app);
      firebaseAuth = auth;
      const db = getFirestore(app);
      firebaseDb = db;
    </script> */}