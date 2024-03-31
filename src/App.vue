<template>
  <div>
    <!-- The Quill editor is loaded here -->
    <QuillEditor v-model="editorContent" toolbar="full" />

    <!-- Button for sharing the contents of Quill-Editor -->
    <button @click="shareContent" class="share-button">Text teilen</button>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  components: {
    QuillEditor
  },
  data() {
    return {
      editorContent: '', // The content of the editor is stored here
    };
  },
  methods: {
    shareContent() {
      // Find the Quill-Editor
      const quillEditor = document.querySelector('.ql-editor');

      // Verify that the Quill editor was found
      if (quillEditor) {
        // Get the contents of the Quill editor
        const editorContent = quillEditor.innerHTML;

        // Create text to share
        const shareData = {
          text: editorContent.trim()
        };

        // Try to share the content
        try {
          navigator.share(shareData);
          console.log('Inhalt erfolgreich geteilt!');
        } catch(err) {
          console.error('Fehler beim Teilen:', err);
        }
      } else {
        // Error handling when the Quill editor was not found
        console.error('Quill-Editor nicht gefunden!');
      }
    }
  }
}
</script>

<style scoped>
/* Button styles */
.share-button {
  background-color: #2b672d; /* Dark green background */
  color: white; /* White text color */
  padding: 10px 20px; /* Padding */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Cursor style */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
}

/* Hover effect */
.share-button:hover {
  background-color: #9fdba1; /* Lighter green background on hover */
  color: black; /* Black text color on hover */
}
</style>