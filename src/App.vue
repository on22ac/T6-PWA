<script setup>
// imports --------------------------------------------------------------------------------------------
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import './assets/toolbar.css';
import { ref } from "vue";

// css import
import './assets/style.css';

// download module import
import downloadFile from './components/downloadFile.vue';

// text editor content --------------------------------------------------------------------------------
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