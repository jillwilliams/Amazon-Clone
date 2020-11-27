import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: ",
    authDomain: ",
    databaseURL: ",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};
// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initialize database
const db = firebaseApp.firestore();
// 
const auth = firebase.auth();

export { db, auth }; 
