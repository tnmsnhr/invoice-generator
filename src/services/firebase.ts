// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3v567046sugqPZ7E6oakIMfUWpr3-81I",
    authDomain: "invoicefy-7c184.firebaseapp.com",
    projectId: "invoicefy-7c184",
    storageBucket: "invoicefy-7c184.appspot.com",
    messagingSenderId: "806738455295",
    appId: "1:806738455295:web:485bb4ee52dd469e457aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
export default app;
