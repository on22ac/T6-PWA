<template>

<div class="navBar">
    <img src="../assets/NotizenAppLogo.svg" alt="logo" class="logo">
    <a class="logout" @click=signOut>Log Out</a>
  </div>    

    <!-- <navBar />
    <Editor :content="content"/> -->

<div class="btnContainer">
  <downloadFile />
    <Share/>
    
</div>

<!-- These two buttons trigger the "Undo" and "Redo" functions respectively when clicked. -->
<!-- @Lorena: Assets src: https://www.flaticon.com/free-icon/undo_3502539?term=undo&page=1&position=3&origin=tag&related_id=3502539 -->
    <div class="undoRedo">
      <button class="urdoBtn" @click="undo"><img src="../assets/undo.png" height="17px"></button>
      <button class="urdoBtn" @click="redo"><img src="../assets/redo.png" height="17px"></button>
    </div>

    <div class="wrapper">
      <QuillEditor
      class="editor"
      v-model:content="content"
      contentType="html"
      toolbar="full"
      :options="options"
      ref="quillEditor"
      @editorChange="autoSave"
      />

    </div>



      <!-- <h1> {{ content }} </h1> -->

     <!-- <Save /> -->
 
  </template>
  
  <script setup>
  // css import
  import '../assets/style.css';
  import '../assets/toolbar.css';
  

  import { useRouter } from 'vue-router'



  // import Save from '../components/Save.vue'
  import downloadFile from '../components/downloadFile.vue';
  import Share from '../components/Share.vue'

  import { ref, onMounted } from 'vue';
  import { QuillEditor } from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';

  import { reference } from '@/firebase/firebase'
  import { onValue, update, set } from 'firebase/database';
  import { debounce } from 'lodash-es';

  // This imports the useRefHistory function from the "@vueuse/core" library.
  import { useRefHistory } from "@vueuse/core";

  // import { db } from '../firebase/firebase.js'; // Import your Firebase configuration
  // import { doc, onSnapshot } from 'firebase/firestore'; // Import Firestore modularly

 
// This defines a reactive reference named 'content' initialized with an empty string.
// It also initializes two variables, 'undo' and 'redo', by destructuring the result of the useRefHistory function applied to the 'content'.
  const content = ref('');
  const {
    undo,
    redo

} = useRefHistory(content)

  const options = {
    debug: 'info',
    placeholder: 'Etwas hier schreiben...',
    readOnly: false,
    theme: 'snow'
  };

  const router = useRouter()
  const signOut = () => {
      router.push('/')
  }

  const quillEditor = ref(null);

  // const docRef = doc(db, 'notes', 'data');
  const debouncedOnValue = debounce(onValue, 1000); // Debounce with a wait time of 1000 milliseconds

  onMounted(() => {
  debouncedOnValue(reference, (snapshot) => {
    content.value = snapshot.val().content;
    console.log(content.value);
  });
});


// Debounce the autosave function with a delay of 1000 milliseconds
const autoSave = debounce(() => {
  set(reference, {
    content: document.querySelector(".ql-editor").innerHTML
  }).then(() => {
    console.log("Data Auto-Saved Successfully");
  }).catch(() => {
    console.error("Auto-Save Unsuccessful");
  });
}, 1000);



// onMounted(()=>{
//   onValue(reference, (snapshot) => {
//     content.value = snapshot.val().content
//     console.log(content.value)
//   })
// })
  // onMounted(() => {
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
    // onSnapshot(docRef, (docSnapshot) => {
    //   if (docSnapshot.exists()) {
    //     // Get the HTML content from the Firestore document
    //     const htmlContent = docSnapshot.data().content;
    //     // Set the retrieved content to the 'content' variable
    //     content.value = htmlContent;
    //   } else {
    //     console.log("No such document!");
    //   }
    // });


  
    // // Unsubscribe from real-time updates when component is unmounted
    // return () => unsubscribe();
  // });

  
  

  
  

//   import { ref, onMounted } from 'vue';
//   import { QuillEditor } from '@vueup/vue-quill';
//   import '@vueup/vue-quill/dist/vue-quill.snow.css';
//   import { db } from '../firebase/firebase.js'; // Import your Firebase configuration
//   import { doc, setDoc, onSnapshot } from 'firebase/firestore'; // Import Firestore modularly
//   import { useRouter } from 'vue-router'
//   const router = useRouter()
  
//   const content = ref('');
//   const options = {
//     debug: 'info',
//     placeholder: 'Etwas hier schreiben...',
//     readOnly: false,
//     theme: 'snow'
//   };

//   const logOut = () => {
//   router.push('/')
// }
  
//   const quillEditor = ref(null);
  
//   const docRef = doc(db, 'notes', 'data');
  
//   onMounted(() => {
//     // try {
//     //   const docSnap = await getDoc(docRef);
//     //   if (docSnap.exists()) {
//     //     // Get the HTML content from Firestore
//     //     const htmlContent = docSnap.data().content;
//     //     // Set the retrieved content to the 'content' variable
//     //     content.value = htmlContent;
//     //   } else {
//     //     console.log("No such document!");
//     //   }
//     // } catch (error) {
//     //   console.error('Error retrieving content:', error);
//     // }
//     onSnapshot(docRef, (docSnapshot) => {
//       if (docSnapshot.exists()) {
//         // Get the HTML content from the Firestore document
//         const htmlContent = docSnapshot.data().content;
//         // Set the retrieved content to the 'content' variable
//         content.value = htmlContent;
//       } else {
//         console.log("No such document!");
//       }
//     });
  
//     // // Unsubscribe from real-time updates when component is unmounted
//     // return () => unsubscribe();
//   });
  
//   const save = async () => {
//     try {
//       // Get the HTML content of the Quill editor using document.querySelector
//       const htmlContent = document.querySelector(".ql-editor").innerHTML;
  
//       // Save the HTML content to Firestore
//       await setDoc(docRef, { content: htmlContent });
  
//       console.log('Content saved successfully to Firestore!');
//     } catch (error) {
//       console.error('Error saving content:', error);
//     }
//   };
  // const save = async () => {
  //   // Trigger auto-save function to save the content
  //   await autoSave();
  // };
  </script>
  

<style scoped>

html {
  background-color: aliceblue;
}

body {
  background-color: aliceblue;
}

</style>