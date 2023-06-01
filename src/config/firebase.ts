import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqA7raXTceivhZH3clLZqdd8jGGI_bkmU",
  authDomain: "typing-speed-test-48d2d.firebaseapp.com",
  projectId: "typing-speed-test-48d2d",
  storageBucket: "typing-speed-test-48d2d.appspot.com",
  messagingSenderId: "942647953212",
  appId: "1:942647953212:web:4f62d90209497d18f90039",
  measurementId: "G-3TEE27YRBE",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
