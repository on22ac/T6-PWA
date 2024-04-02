import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSMxKueWaa5cEMtWZB7O-FAxDjQSI6URM",
  authDomain: "notizen-app-pwa-4afb6.firebaseapp.com",
  projectId: "notizen-app-pwa-4afb6",
  storageBucket: "notizen-app-pwa-4afb6.appspot.com",
  messagingSenderId: "896099446638",
  appId: "1:896099446638:web:27f5d3e43a743ccff7db7f"
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app');