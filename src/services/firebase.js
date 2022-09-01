import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firebase-auth';
import "firebase/firestore"
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAoLapGbuLUzFnCMydlkotxCJ6IWXNnZ0U",
    authDomain: "app-teste-4851a.firebaseapp.com",
    projectId: "app-teste-4851a",
    storageBucket: "app-teste-4851a.appspot.com",
    messagingSenderId: "60039221457",
    appId: "1:60039221457:web:fdeb7d080262ee1e1cb5f0",
    measurementId: "G-M70VDKS2E7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;