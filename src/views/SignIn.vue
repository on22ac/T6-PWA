<template>

    <nav>
        <router-link to="/"> Sign In </router-link> |
        <!-- <router-link to="/feed"> Feed </router-link> | -->
        <router-link to="/register"> Register </router-link> |
        <!-- <router-link to="/sign-in"> Login </router-link> | -->
    </nav>
    <p><button @click="home">Home</button></p>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const home = () => {
  router.push('/home')
}
</script>