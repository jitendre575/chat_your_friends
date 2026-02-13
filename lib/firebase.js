import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCJ7abnOk3orptiBJ0bXm1FGCqjgz-Srw",
    authDomain: "onlinechat-e5ae1.firebaseapp.com",
    projectId: "onlinechat-e5ae1",
    storageBucket: "onlinechat-e5ae1.firebasestorage.app",
    messagingSenderId: "750236278338",
    appId: "1:750236278338:web:53dd618dc6fcac01e697db",
    measurementId: "G-ES8KSRRZJM"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let analytics;
if (typeof window !== 'undefined') {
    isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };