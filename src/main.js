import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

const firebaseConfig = {
    apiKey: "YAIzaSyBSMxKueWaa5cEMtWZB7O-FAxDjQSI6URM",
    authDomain: "896099446638",
    databaseURL: "eur3 (europe-west)",
    projectId: "notizen-app-pwa-4afb6",
    storageBucket: "project-896099446638",
    messagingSenderId: "dotterweich.lea@gmail.com",
    appId: "1:896099446638:web:27f5d3e43a743ccff7db7f"
  };

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

new Vue({
  render: h => h(App),
}).$mount('#app')


createApp(App).use(store).use(router).mount('#app')
