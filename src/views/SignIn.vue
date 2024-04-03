<template>

    <div class="navBar">
        <img src="../assets/NotizenAppLogo.svg" alt="logo" class="logo">
    </div>

    <div class="content">
        <nav>
            <router-link to="/"> Sign In </router-link> |
            <!-- <router-link to="/feed"> Feed </router-link> | -->
            <router-link to="/register"> Register </router-link> |
            <!-- <router-link to="/sign-in"> Login </router-link> | -->
        </nav>

        <div>
            <img src="../assets/img.png" class="imgLogin">
        </div>

        <p><button @click="home">Home</button></p>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router'

// css import
import '../assets/login.css';

const router = useRouter()
const home = () => {
    router.push('/home')
}
</script>