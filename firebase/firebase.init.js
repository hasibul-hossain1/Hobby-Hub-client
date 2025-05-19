import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCwulT3hpKLHFKKKPajdRCPsP9tDs3SzKc",
  authDomain: "assignment-10-7a507.firebaseapp.com",
  projectId: "assignment-10-7a507",
  storageBucket: "assignment-10-7a507.firebasestorage.app",
  messagingSenderId: "197764035216",
  appId: "1:197764035216:web:cfbeb86c7f30ad2d0f1e15"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)