// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "abdul-hamid-9c784.firebaseapp.com",
  projectId: "abdul-hamid-9c784",
  storageBucket: "abdul-hamid-9c784.appspot.com",
  messagingSenderId: "908623593807",
  appId: "1:908623593807:web:b01f37d1a38ddb4b2b453a",
  measurementId: "G-7LX46L87W3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);