// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-ba3a1.firebaseapp.com",
  projectId: "mern-estate-ba3a1",
  storageBucket: "mern-estate-ba3a1.appspot.com",
  messagingSenderId: "722070985083",
  appId: "1:722070985083:web:4780138c57e8c4486585de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);