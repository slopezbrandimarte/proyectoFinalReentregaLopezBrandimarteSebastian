// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDExXwhKhYUX9qGLqHKb8Bz_vm-dFbxjo",
    authDomain: "om-shanti-3f21d.firebaseapp.com",
    projectId: "om-shanti-3f21d",
    storageBucket: "om-shanti-3f21d.appspot.com",
    messagingSenderId: "334396196032",
    appId: "1:334396196032:web:2aab6377a4b447a3881925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
