<script setup>
/**
 * @author Thi Tuong Vy Nguyen <github: on22vy>
 */

  //------------------------Imports----------------------------- //
    // Import CSS files for styling the component
    import '../assets/style.css';
    import '../assets/toolbar.css';

    // Import useRouter function from vue-router for navigation
    import { useRouter } from 'vue-router'

    // Import components for file download and sharing
    import downloadFile from '../components/downloadFile.vue';
    import Share from '../components/Share.vue'

    // Import functions and hooks from Vue for use in the component
    import { ref, onMounted } from 'vue';

    // Import Quill Editor and its associated CSS file
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.snow.css';

    // Import functions and database references from Firebase
    import { reference } from '@/firebase/firebase'
    import { onValue, set } from 'firebase/database';

    // Import debounce function from lodash for debouncing
    import { debounce } from 'lodash-es';
    
    // // Import useRefHistory function from the "@vueuse/core" package for using undo/redo functionality
    import { useRefHistory } from "@vueuse/core";

  

/**
 * @author Thi Tuong Vy Nguyen <github: on22vy>
 * @author Lea Dotterweich <github: lea_dtwh>
 */

  //------------------------Undo/Redo Function----------------------------- //
    // Define a reactive reference named 'content', initialized with an empty string.
    const content = ref('');

    // Declaration of 'undo' and 'redo' by destructuring the result of the useRefHistory function applied to 'content'
    const {
      undo,
      redo

    } = useRefHistory(content)

  

/**
 * @author Thi Tuong Vy Nguyen <github: on22vy>
 */
    // Options for the Quill Editor
    const options = {
      debug: 'info',
      placeholder: 'Etwas hier schreiben...',
      readOnly: false,
      theme: 'snow'
    };

  //------------------------Sync & AutoSave Function----------------------------- //
    // Reference to the Quill Editor
    const quillEditor = ref(null);

    // Debounced function for listening to changes in the Firebase database
    const debouncedOnValue = debounce(onValue, 1000); // Debounce with a wait time of 1000 milliseconds

    // Once the component is mounted, start listening for changes in the Firebase database
    onMounted(() => {
    debouncedOnValue(reference, (snapshot) => {
      content.value = snapshot.val().content;
      console.log(content.value);
    });
    });


    // Debounced the autosave function with a delay of 1000 milliseconds for automatically saving content to the Firebase database
    const autoSave = debounce(() => {
    set(reference, {
      content: document.querySelector(".ql-editor").innerHTML
    }).then(() => {
      console.log("Data Auto-Saved Successfully");
    }).catch(() => {
      console.error("Auto-Save Unsuccessful");
    });
    }, 1000);

  //------------------------Sign out function----------------------------- //
    // Instantiate the router
    const router = useRouter()
    // Function to sign out the user, by sign out user will be redirected back to Login Page
    const signOut = () => {
    router.push('/')
    }

</script>

<template>

<!-- @author Thi Tuong Vy Nguyen <github: on22vy> -->

    <!-- Navigation bar with logo and logout button -->
    <div class="navBar">
      <img src="../assets/NotizenAppLogo.svg" alt="logo" class="logo">
      <a class="logout" @click=signOut>Log Out</a>
    </div>   
    
    <!-- Container for file download and sharing buttons -->
    <div class="btnContainer">
      <downloadFile />
      <Share/>
    </div>
    
    <!-- Undo/Redo buttons for editor -->
    <!-- These two buttons trigger the "Undo" and "Redo" functions respectively when clicked. -->
    <!-- @Lorena: Assets src: https://www.flaticon.com/free-icon/undo_3502539?term=undo&page=1&position=3&origin=tag&related_id=3502539 -->
    <div class="undoRedo">
      <button class="urdoBtn" @click="undo"><img src="../assets/undo.png" height="17px"></button>
      <button class="urdoBtn" @click="redo"><img src="../assets/redo.png" height="17px"></button>
    </div>
    
    <!-- Wrapper for Quill Editor component -->
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
    
   
</template>
    

<style scoped>
/* @author Lorena Horvat <github: Lorena-Hrvt> */

    /* Scoped styles for the component */
    html {
      background-color: aliceblue;
    }

    body {
      background-color: aliceblue;
    }

</style>


