import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBV8SAyJyATYuBCIk8HhnnG5WFoRXNZBOQ",
  authDomain: "linked-in-clone-4acd7.firebaseapp.com",
  projectId: "linked-in-clone-4acd7",
  storageBucket: "linked-in-clone-4acd7.appspot.com",
  messagingSenderId: "725110244764",
  appId: "1:725110244764:web:d3f8257009d96ae0f37459",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
