// Configuration Firebase — remplace les valeurs ci-dessous par les tiennes
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyADjrKZJdm1rcAaKJbub-Jk06VsrIvuNkA",
  authDomain: "tableau-de-bord-c1248.firebaseapp.com",
  projectId: "tableau-de-bord-c1248",
  storageBucket: "tableau-de-bord-c1248.firebasestorage.app",
  messagingSenderId: "66602259795",
  appId: "1:66602259795:web:8315db1a7191d2fcd5fda6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase connecté ✅");
