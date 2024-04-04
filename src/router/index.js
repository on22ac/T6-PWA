import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

import Vue from 'vue'
import App from './App.vue'
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
export default router