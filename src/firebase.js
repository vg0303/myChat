import firebase from "firebase/app";
import "firebase/auth";

export const auth= firebase.initializeApp( {
    apiKey: "AIzaSyClz2MMc78XsWA2leA-lXrQovGB5cGoets",
    authDomain: "mychat-1bc3f.firebaseapp.com",
    projectId: "mychat-1bc3f",
    storageBucket: "mychat-1bc3f.appspot.com",
    messagingSenderId: "532565879574",
    appId: "1:532565879574:web:e08e7a46f1e466b933fe37"
  }).auth();