<script setup>
import { useShare } from '@vueuse/core';
import { ref } from 'vue';

const shareObj = ref({
  text: '', // Hier wird der Text für das Teilen gespeichert
});
const { share, isSupported: isShareSupported } = useShare(shareObj);

const startShare = async () => {
  try {
    // Zugriff auf den Quell-Editor
    const quillEditor = document.querySelector('.ql-editor');
    if (!quillEditor) {
      console.error('Quill-Editor nicht gefunden!');
      return;
    }

    // Den Inhalt des Quell-Editors abrufen
    const editorContent = quillEditor.innerHTML;

    // Text in das shareObj einfügen
    shareObj.value.text = editorContent;

    // Teilen aufrufen
    share();
  } catch (err) {
    alert('Ocorreu um erro inesperado, tente novamente mais tarde.');
    console.error(err);
  }
};
</script>

<template>
  <button v-if="isShareSupported" @click="startShare">Compartilhar</button>
</template>