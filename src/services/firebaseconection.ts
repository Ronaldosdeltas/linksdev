import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC7YUP72CHe5Ssl7IfSZ9MRDn50MPTOkbE",
  authDomain: "personal-links-eba25.firebaseapp.com",
  projectId: "personal-links-eba25",
  storageBucket: "personal-links-eba25.firebasestorage.app",
  messagingSenderId: "90176234385",
  appId: "1:90176234385:web:09e3a3e34ba9ed035ab030"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export {app};