// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1acbc.firebaseapp.com",
  projectId: "mern-estate-1acbc",
  storageBucket: "mern-estate-1acbc.appspot.com",
  messagingSenderId: "381847786281",
  appId: "1:381847786281:web:3923f6efbac5f78df75d38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);