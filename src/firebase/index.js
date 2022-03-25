import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSd1V9Hf57TLFFPMKbo5o3uToxYWqOtcc",
  authDomain: "bikescript-2906e.firebaseapp.com",
  projectId: "bikescript-2906e",
  storageBucket: "bikescript-2906e.appspot.com",
  messagingSenderId: "1017351552448",
  appId: "1:1017351552448:web:ca79966747ad50749f9c25"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
