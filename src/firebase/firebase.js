import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD0eQ7xAGom6gGdY8NJ8TIwN2mX2QhxQuc",
    authDomain: "facebook-clone-8106f.firebaseapp.com",
    projectId: "facebook-clone-8106f",
    storageBucket: "facebook-clone-8106f.appspot.com",
    messagingSenderId: "973516452216",
    appId: "1:973516452216:web:e7366c42d44af51dcbd88d",
    measurementId: "G-4JBXSBQDWC"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
