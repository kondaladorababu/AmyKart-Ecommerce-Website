
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyADtlwcRzQobJDOCGsPcUvVZuik3qLFiu8",
  authDomain: "a-clone-e933b.firebaseapp.com",
  projectId: "a-clone-e933b",
  storageBucket: "a-clone-e933b.appspot.com",
  messagingSenderId: "995635248780",
  appId: "1:995635248780:web:cacc167747f110a5db45a9",
  measurementId: "G-JQNG8XDPQ2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
