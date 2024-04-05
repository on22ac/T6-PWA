/**
 * @author Thi Tuong Vy Nguyen <github: on22vy>
 */

import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, set, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSMxKueWaa5cEMtWZB7O-FAxDjQSI6URM",
  authDomain: "notizen-app-pwa-4afb6.firebaseapp.com",
  databaseURL: "https://notizen-app-pwa-4afb6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notizen-app-pwa-4afb6",
  storageBucket: "notizen-app-pwa-4afb6.appspot.com",
  messagingSenderId: "896099446638",
  appId: "1:896099446638:web:27f5d3e43a743ccff7db7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

const db = getDatabase(app);
const reference = ref(db, 'notes/data/')
  



export{
    db,
    reference
}