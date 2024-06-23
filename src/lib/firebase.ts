import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAVRiyXP_vV3a7gsuXu5fn6q27vuOKOmNk",
  authDomain: "finance-c4212.firebaseapp.com",
  projectId: "finance-c4212",
  storageBucket: "finance-c4212.appspot.com",
  messagingSenderId: "15715418686",
  appId: "1:15715418686:web:a883fcd34d470011dac76f",
  measurementId: "G-NM2JL65DS4"
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export const firestore = getFirestore(app);

