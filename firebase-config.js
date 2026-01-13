import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"; 

// Sua configuração
const firebaseConfig = {
    apiKey: "AIzaSyDYS2rUC3dhYwOxqs3XmmmMTFD5s8UqsmY",
    authDomain: "trabalho-diogo.firebaseapp.com",
    projectId: "trabalho-diogo",
    storageBucket: "trabalho-diogo.firebasestorage.app",
    messagingSenderId: "237439879104",
    appId: "1:237439879104:web:bf3aff765bb4ede3396a25",
    measurementId: "G-FQL3T89CBH"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
export const db = getFirestore(app);

// Cria a referência para a coleção de postagens (Posts)
export const postsCol = collection(db, "posts"); 

// Opcional: Inicializa o Analytics
const analytics = getAnalytics(app);