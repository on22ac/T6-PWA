<template>
    <div class="wrapper">
      <!-- <QuillEditor
        class="ql-editor"
        v-model:content="content"
        contentType="html"
        toolbar="full"
        :options="options"
        ref="quillEditor"
        
      /> -->
      <!-- -->

      <!-- @editor-change="autoSave" -->
      <div class="action-row">
        <button @click="save">Save</button>
      </div>
      <!-- <h1> {{ content }} </h1> -->
    </div>
  </template>
  
  <script setup>
//   import { QuillEditor } from '@vueup/vue-quill';
//   import '@vueup/vue-quill/dist/vue-quill.snow.css';
  // import { db } from '../firebase/firebase.js'; // Import your Firebase configuration
  // import { doc, setDoc } from 'firebase/firestore'; // Import Firestore modularly
  

  
//   const quillEditor = ref(null);
  // const docRef = doc(db, 'notes', 'data');
  

//   //---------------AutoSave and Sync------------------------------------------------------------------

  // const save = async () => {
  //   try {
  //     // Get the HTML content of the Quill editor using document.querySelector
  //     const htmlContent = document.querySelector(".ql-editor").innerHTML;
  //     console.log (htmlContent)
  
  //     // Save the HTML content to Firestore
  //     await setDoc(docRef, { content: htmlContent });
  
  //     console.log('Content saved successfully to Firestore!');
  //   } catch (error) {
  //     console.error('Error saving content:', error);
  //   }
  // };
//   // const save = async () => {
//   //   // Trigger auto-save function to save the content
//   //   await autoSave();
//   // };
//   //---------------AutoSave and Sync------------------------------------------------------------------
  
  </script>
<!--   
  <style>
  .ql-editor {
    height: 72vh;
  }
  </style> -->
  