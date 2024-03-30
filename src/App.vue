<script setup>
// imports -------------------------------------------------------------------------------------------
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import './assets/toolbar.css';

import downloadFile from './components/downloadFile.vue';
import { ref } from "vue";


// text editor content -------------------------------------------------------------------------------
const quillContent = ref("")

</script>

<template>

  <!-- Download button and file name input field --------------------------------------------------- -->
  <div class="navBar">
    <downloadFile :quill-content="quillContent" />
  </div>

  <!-- Quill Text Editor --------------------------------------------------------------------------- -->
  <QuillEditor class="ql-editor" v-model:content="quillContent" toolbar="full" ref="quill" content-type="html" />

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

.navBar {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>