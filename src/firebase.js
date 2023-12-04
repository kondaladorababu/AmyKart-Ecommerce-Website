
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANwGA_BEA7ZHhhSQ8fUid4MYhXvya2V0s",
  authDomain: "amykart-176e7.firebaseapp.com",
  projectId: "amykart-176e7",
  storageBucket: "amykart-176e7.appspot.com",
  messagingSenderId: "268328753417",
  appId: "1:268328753417:web:8c790f00f1062b163c1bd8",
  measurementId: "G-K27FPZXCL8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
