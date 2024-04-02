<template>
  <div class="wrapper">
    <QuillEditor
      v-model:content="content"
      contentType="html"
      toolbar="full"
      :options="options"
      ref="quillEditor"
      
    />
    <!-- @editor-change="autoSave" -->
    <div class="action-row">
      <button @click="save">Save</button>
    </div>
    <!-- <h1> {{ content }} </h1> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { db } from '@/firebase'; // Import your Firebase configuration
import { doc, setDoc, onSnapshot } from 'firebase/firestore'; // Import Firestore modularly

const content = ref('');
const options = {
  debug: 'info',
  placeholder: 'Etwas hier schreiben...',
  readOnly: false,
  theme: 'snow'
};

const quillEditor = ref(null);
const docRef = doc(db, 'notes', 'data');

onMounted(() => {
  // try {
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     // Get the HTML content from Firestore
  //     const htmlContent = docSnap.data().content;
  //     // Set the retrieved content to the 'content' variable
  //     content.value = htmlContent;
  //   } else {
  //     console.log("No such document!");
  //   }
  // } catch (error) {
  //   console.error('Error retrieving content:', error);
  // }
  onSnapshot(docRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      // Get the HTML content from the Firestore document
      const htmlContent = docSnapshot.data().content;
      // Set the retrieved content to the 'content' variable
      content.value = htmlContent;
    } else {
      console.log("No such document!");
    }
  });

  // // Unsubscribe from real-time updates when component is unmounted
  // return () => unsubscribe();
});

// const autoSave = async () => {
//   try {
//     // Get the HTML content of the Quill editor using document.querySelector
//     const htmlContent = document.querySelector(".ql-editor").innerHTML;

//     // Save the HTML content to Firestore
//     await setDoc(docRef, { content: htmlContent });

//     console.log('Content saved successfully to Firestore!');
//   } catch (error) {
//     console.error('Error saving content:', error);
//   }
// };


const save = async () => {
  try {
    // Get the HTML content of the Quill editor using document.querySelector
    const htmlContent = document.querySelector(".ql-editor").innerHTML;

    // Save the HTML content to Firestore
    await setDoc(docRef, { content: htmlContent });

    console.log('Content saved successfully to Firestore!');
  } catch (error) {
    console.error('Error saving content:', error);
  }
};

// const save = async () => {
//   // Trigger auto-save function to save the content
//   await autoSave();
// };
</script>

<style>
.ql-editor {
  height: 72vh;
}
</style>
