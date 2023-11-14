
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAgnqXqoRbxiPSsvfv1_DX24x7iQOWT538",
    authDomain: "clone-70561.firebaseapp.com",
    projectId: "clone-70561",
    storageBucket: "clone-70561.appspot.com",
    messagingSenderId: "110574297426",
    appId: "1:110574297426:web:55bac4ab6e4fe1189e9a8b",
    measurementId: "G-JVTDP73Q98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
