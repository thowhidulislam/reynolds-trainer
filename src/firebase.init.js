// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAebWGUyicu7OYGueKVR3ouY99QMd9bn9Q",
    authDomain: "reynolds-trainer.firebaseapp.com",
    projectId: "reynolds-trainer",
    storageBucket: "reynolds-trainer.appspot.com",
    messagingSenderId: "117679842647",
    appId: "1:117679842647:web:7d7918b1823f5a3bac4a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth