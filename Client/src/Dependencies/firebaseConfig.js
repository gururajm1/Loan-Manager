import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPeEZuNKFu61EEWiQi_Jz9qF6HXaWeGGs",
  authDomain: "loan-manager-f1a51.firebaseapp.com",
  projectId: "loan-manager-f1a51",
  storageBucket: "loan-manager-f1a51.appspot.com",
  messagingSenderId: "1055830924705",
  appId: "1:1055830924705:web:c64c799ab0a331721c3fe0",
  measurementId: "G-HHKT1GMH02"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
