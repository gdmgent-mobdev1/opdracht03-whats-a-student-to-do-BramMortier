// ------------------------------------------- //
// module imports
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
// ------------------------------------------- //

export const firebaseConfig = {
    apiKey: "AIzaSyBqZde_q0ihx9Ob-vPoeYcLq9JytNJeSVY",
    authDomain: "timewarp-61a12.firebaseapp.com",
    projectId: "timewarp-61a12",
    storageBucket: "timewarp-61a12.appspot.com",
    messagingSenderId: "543139666364",
    appId: "1:543139666364:web:548d0d53315c64a67433b9",
    measurementId: "G-5CYZQFQNZK",
};

// init firebase backend
export const app: FirebaseApp = initializeApp(firebaseConfig);

// init app stats
export const analytics: Analytics = getAnalytics(app);
