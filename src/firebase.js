import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMp5mmLLriASeI4uZeGOzeuu4uTlOz_2k",
    authDomain: "clone-ccc0d.firebaseapp.com",
    databaseURL: "https://clone-ccc0d.firebaseio.com",
    projectId: "clone-ccc0d",
    storageBucket: "clone-ccc0d.appspot.com",
    messagingSenderId: "586690927509",
    appId: "1:586690927509:web:af2d1a2490b8dcb64b749c",
    measurementId: "G-2SNFFHHTZP",
};
// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initialize database
const db = firebaseApp.firestore();
// 
const auth = firebase.auth();

export { db, auth }; 