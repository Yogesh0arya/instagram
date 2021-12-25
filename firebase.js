// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS14NYQyUa85fGUIowlyQFmaIIgYABe-0",
  authDomain: "instagram-1b9d0.firebaseapp.com",
  projectId: "instagram-1b9d0",
  storageBucket: "instagram-1b9d0.appspot.com",
  messagingSenderId: "323385124778",
  appId: "1:323385124778:web:3ad2cef9ba256e0d412dd3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp() ;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};