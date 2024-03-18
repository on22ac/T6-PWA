<script setup>
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  import './assets/toolbar.css'; 
  import downloadBtn from './components/downloadBtn.vue';

</script>

<template>
  <QuillEditor toolbar="full" />
  <downloadBtn />
</template>


<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b9b5;
}

</style>

