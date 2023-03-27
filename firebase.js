import { initializeApp } from "@firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoHr6kTfh2yARsZ7611AhS_LtdhU2iptI",
  authDomain: "fir-login-fa21e.firebaseapp.com",
  projectId: "fir-login-fa21e",
  storageBucket: "fir-login-fa21e.appspot.com",
  messagingSenderId: "29452499055",
  appId: "1:29452499055:web:4cb71c88b9ec851b3f759a",
  measurementId: "G-KBMTQFF0MC"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {auth,app};

