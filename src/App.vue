<template>
  <div>
    <!-- Hier wird der Quill-Editor geladen -->
    <QuillEditor v-model="editorContent" toolbar="full" />

    <!-- Button zum Teilen des Inhalts des Quell-Editors -->
    <button @click="shareContent">Text teilen</button>
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
      editorContent: '', // Hier wird der Inhalt des Editors gespeichert
    };
  },
  methods: {
    shareContent() {
      // Den Quill-Editor finden
      const quillEditor = document.querySelector('.ql-editor');

      // Überprüfen, ob der Quill-Editor gefunden wurde
      if (quillEditor) {
        // Den Inhalt des Quill-Editors abrufen
        const editorContent = quillEditor.innerHTML;

        // Text zum Teilen erstellen
        const shareData = {
          text: editorContent.trim()
        };

        // Versuchen, den Text zu teilen
        try {
          navigator.share(shareData);
          console.log('Inhalt erfolgreich geteilt!');
        } catch(err) {
          console.error('Fehler beim Teilen:', err);
        }
      } else {
        // Fehlerbehandlung, wenn der Quill-Editor nicht gefunden wurde
        console.error('Quill-Editor nicht gefunden!');
      }
    }
  }
}
</script>

<style>
/* Hier können Sie Stile für Ihre Komponente definieren */
</style>
