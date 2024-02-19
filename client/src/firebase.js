// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-7f012.firebaseapp.com",
  projectId: "auth-mern-7f012",
  storageBucket: "auth-mern-7f012.appspot.com",
  messagingSenderId: "990593365087",
  appId: "1:990593365087:web:ba5638cb6f80dc3883d7ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
