// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmiLDtyyFTPb853odVctG9B1q6ghTkdPI",
  authDomain: "ispb-45444.firebaseapp.com",
  projectId: "ispb-45444",
  storageBucket: "ispb-45444.firebasestorage.app",
  messagingSenderId: "505477961016",
  appId: "1:505477961016:web:bb58f51afc84d7e9219dcd",
  measurementId: "G-HGZBW9308T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider }; 