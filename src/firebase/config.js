import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACBrp1sYucTAmZrOX-F8InAl9KkdHbomc",
  authDomain: "vuex4-auth-64fc4.firebaseapp.com",
  projectId: "vuex4-auth-64fc4",
  storageBucket: "vuex4-auth-64fc4.appspot.com",
  messagingSenderId: "1037901143868",
  appId: "1:1037901143868:web:af1fa063f2a9702d424839",
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };
