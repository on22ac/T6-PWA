<template>
  <div class="navBar">
    <img src="../assets/NotizenAppLogo.svg" alt="logo" class="logo">
    <nav class="links">
      <router-link to="/">Anmelden</router-link> |
      <router-link to="/register"> Registrieren </router-link>
    </nav>
  </div>

  <div class="content">

    <div class="userInfo">
      <h1 align="center" class="loginInfo">Neuen Account erstellen</h1>
      <p align="center">Willkommen! Bitte gib eine gültige E-Mail-Adresse und ein sicheres Passwort an! <br>
        Danach kannst du dich<span id="clickMe" @click="signIn"> hier einloggen</span>!</p>
    </div>

    <div>
      <img src="../assets/img.png" class="imgLogin">
    </div>

    <div>
      <p><input class="loginInput" type="text" placeholder="Email" v-model="email" /></p>
      <p><input class="loginInput" type="password" placeholder="Password" v-model="password" /></p>
    </div>

    <div class="btnContainer">
      <p class="btns submitBtn"><button @click="register">Anmelden</button></p>
      <p class="btns"><button @click="signInWithGoogle">Mit Google anmelden</button></p>
    </div>


  </div>

</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' // import router

// css import
import '../assets/login.css';

const email = ref("");
const password = ref("");
const router = useRouter() // get a reference to our vue router

const register = () => {
  // need value because ref()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push('/') // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });

}
const signIn = () => {
  router.push('/')
}

const signInWithGoogle = () => {
}
</script>