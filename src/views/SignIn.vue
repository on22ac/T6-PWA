<script setup>
/**
 * @author Marie Bleickert <github: MaryScarBit>
 */

import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router'

// css import
import '../assets/login.css';

const email = ref("");
const password = ref("");
const errMsg = ref("");

const router = useRouter()
// Email and password authentication
const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully signed in!");
            console.log(auth.currentUser);
            router.push("/home"); // Redirect to home page on successful login
        })
        .catch((error) => {
            //Login error messages
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
            alert(error.message);
        });
};

//Google OAuth authentication
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then ((result) => {
    console.log(result.user);
    router.push("/home");
  })
  .catch((error) => {
    //handle error
  });
};
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
            <h1 align="center" class="loginInfo">Willkommen zurück!</h1>
            <p align="center">Schön, dass du zurück bist. Hier kannst du dich wieder mit deinen Anmeldedaten anmelden.</p>
        </div>

        <div>
            <img src="../assets/hello.svg" class="imgLogin">
        </div>

        <div>
            <p><input class="loginInput" type="text" placeholder="Email" v-model="email" /></p>
            <p><input class="loginInput" type="password" placeholder="Password" v-model="password" /></p>
            <p v-if="errMsg">{{ errMsg }}</p>
        </div>

        <div class="btnContainer">
            <p class="btns"><button @click="signIn">Einloggen</button></p>
            <p class="btns"><button @click="signInWithGoogle">Sign In With Google</button></p>
        </div>

    </div>

</template>

