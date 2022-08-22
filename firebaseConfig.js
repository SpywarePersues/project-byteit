import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-p48u-V-yNJwf2WXkcwR_8CMo6wH9PaQ",
    authDomain: "byte-it-project.firebaseapp.com",
    projectId: "byte-it-project",
    storageBucket: "byte-it-project.appspot.com",
    messagingSenderId: "18304181492",
    appId: "1:18304181492:web:5a371054a1b2b03f50eaa1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)