import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyC05K_bvfVkCxHe6Gf1yB_FK6CRCsbFDb8",
    authDomain: "chatty-d881e.firebaseapp.com",
    projectId: "chatty-d881e",
    storageBucket: "chatty-d881e.appspot.com",
    messagingSenderId: "1074821239331",
    appId: "1:1074821239331:web:aebd8175c983bec6ad9796"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();