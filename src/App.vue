<template>
  <div>
    <QuillEditor ref="editor" v-model="editorContent" toolbar="full" />
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
    async shareContent() {
      // Prüfen, ob die Web Share API verfügbar ist
      if (navigator.share) {
        const text = this.editorContent; // Inhalt des Editors abrufen
        const shareData = {
          text: text // Teildaten erstellen
        };

        try {
          // Versuchen, die Daten zu teilen
          await navigator.share(shareData);
          console.log('Inhalt erfolgreich geteilt!');
        } catch(err) {
          // Fehlerbehandlung bei Problemen beim Teilen
          console.error('Fehler beim Teilen:', err);
        }
      } else {
        // Wenn die Web Share API nicht verfügbar ist
        console.log('Die Web Share API ist nicht verfügbar');
      }
    }
  }
}
</script>

<!-- Stile können hier definiert werden -->
<style>
/* Hier können Sie Stile für Ihre Komponente definieren */
</style>
