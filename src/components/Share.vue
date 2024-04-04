<script setup>
/**
 * @author Acelya Cagan <github: on22ac>
 */

import '../assets/style.css';

const shareContent = ()=>{
  const editorElement = document.querySelector('.editor');

      // Verify that the Quill editor was found
      if (editorElement) {
        // Get the text content of the Quill editor (without HTML tags)
        const editorContent = editorElement.innerText;

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
</script>


<template>
    <!-- Button for sharing the contents of Quill-Editor -->
    <button id="share" @click="shareContent">Notiz Teilen</button>
  
</template>

