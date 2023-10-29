
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBUgXVc-hFCTpLzZaH9jowg3hqX-LalxCI",
    authDomain: "clone-5379b.firebaseapp.com",
    projectId: "clone-5379b",
    storageBucket: "clone-5379b.appspot.com",
    messagingSenderId: "198619341728",
    appId: "1:198619341728:web:6081b1dcc0b29eea87fac5",
    measurementId: "G-ZC4G2GR20E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
