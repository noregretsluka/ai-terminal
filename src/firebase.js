// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDdNiFBARM27r6nDwW0OBxooBEuQRCkS4",
  authDomain: "ai-terminal-66064.firebaseapp.com",
  projectId: "ai-terminal-66064",
  storageBucket: "ai-terminal-66064.firebasestorage.app",
  messagingSenderId: "829270660122",
  appId: "1:829270660122:web:e54224949608f3cb706da3",
  measurementId: "G-V0YTC3LHHF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { getAuth } from "firebase/auth";

const auth = getAuth();
console.log("✅ Firebase initialized:", auth.app.name); // Should log '[DEFAULT]'
console.log("Current user:", auth.currentUser);