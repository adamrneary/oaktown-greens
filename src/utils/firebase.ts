// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz67S4IIz6R52UNctEeSjZ-_cF5hRjjzQ",
  authDomain: "oaktown-greens.firebaseapp.com",
  databaseURL: "https://oaktown-greens.firebaseio.com",
  projectId: "oaktown-greens",
  storageBucket: "",
  messagingSenderId: "137528605279",
  appId: "1:137528605279:web:1bff9e5168dd48c2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
