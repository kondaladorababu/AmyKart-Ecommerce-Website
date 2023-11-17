
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyARTvq5nDIz3NpkXa_CDefRj_1TgZS95H4",
  authDomain: "clone-app-69347.firebaseapp.com",
  projectId: "clone-app-69347",
  storageBucket: "clone-app-69347.appspot.com",
  messagingSenderId: "334305844013",
  appId: "1:334305844013:web:d89a4dcb3687a7f72d51a4",
  measurementId: "G-HMHFVEWR00"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
