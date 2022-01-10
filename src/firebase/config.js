import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBk-NyMDEvk3_7Wmsg66msXhN1tiZEysBc",
    authDomain: "photo-gallery-fe629.firebaseapp.com",
    projectId: "photo-gallery-fe629",
    storageBucket: "photo-gallery-fe629.appspot.com",
    messagingSenderId: "651207517785",
    appId: "1:651207517785:web:935c7612724537bef17348"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };