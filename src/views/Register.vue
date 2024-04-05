<script setup>
/**
 * @author Marie Bleickert <github: MaryScarBit>
 */

import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' // import router

// css import
import '../assets/login.css';

const email = ref("");
const password = ref("");
const errMsg = ref("");

const router = useRouter() // get a reference to our vue router

const register = () => {
  // need value because ref()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push('/') // redirect to the sign in page on successful registration
    })
    .catch((error) => {

      //Registration error messages

      console.log(error.code);
            switch (error.code) {
                case "auth/missing-password":
                    errMsg.value = "Please enter a password";
                    break;
                case "auth/missing-email":
                    errMsg.value = "Please enter an valid e-mail to register";
                    break;
                case "auth/weak-password":
                    errMsg.value = "Password should be at least 6 characters";
                    break;
                case "auth/email-already-in-use":
                    errMsg.value = "Sorry, this email address is already in use, please enter another email address";
                    break;
                default:
                    errMsg.value = "Error: Something went wrong. User Registration failed";
                    break;
            }
            alert(error.message);
    });

}
const signIn = () => {
  router.push('/')
}

</script>

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
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>

    <div class="btnContainer">
      <p class="btns submitBtn"><button @click="register">Registrieren</button></p>
    </div>


  </div>

</template>

