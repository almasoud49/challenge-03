// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlGZUBq3fb_0ogUB9uKaZQDeElZek44Q",
  authDomain: "technet-bed1d.firebaseapp.com",
  projectId: "technet-bed1d",
  storageBucket: "technet-bed1d.appspot.com",
  messagingSenderId: "892900785250",
  appId: "1:892900785250:web:57a7a6a905d5ca40ab253b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);