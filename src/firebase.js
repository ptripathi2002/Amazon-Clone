import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAhsZ0U-SBeiG4B0KjnPisijtlS2URpZGM",
    authDomain: "challenge-7720d.firebaseapp.com",
    projectId: "challenge-7720d",
    storageBucket: "challenge-7720d.appspot.com",
    messagingSenderId: "364104641918",
    appId: "1:364104641918:web:02f093cd55d2b2bcb2972f",
    measurementId: "G-5MQG69KJHT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};

