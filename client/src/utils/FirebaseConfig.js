import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBigvrFxaUXe_T1bpDXpcmATQsMLsQ7aKk",
    authDomain: "messaging-app-c76af.firebaseapp.com",
    projectId: "messaging-app-c76af",
    storageBucket: "messaging-app-c76af.appspot.com",
    messagingSenderId: "879501073815",
    appId: "1:879501073815:web:4a141b05df524d5061b8d2",
    measurementId: "G-CECWP45GXH"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);