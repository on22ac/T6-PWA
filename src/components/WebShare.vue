<script setup>
import { useShare } from '@vueuse/core';
import { ref } from 'vue';

const shareObj = ref({
  text: '', // This is where the text is saved for sharing
});
const { share, isSupported: isShareSupported } = useShare(shareObj);

const startShare = async () => {
  try {
    // Access to Quill-Editor
    const quillEditor = document.querySelector('.ql-editor');
    if (!quillEditor) {
      console.error('Quill-Editor not found!');
      return;
    }

    // Get the text content of the Quill-Editor
    const plainTextContent = quillEditor.innerText;

    // Insert plain text into the shareObj
    shareObj.value.text = plainTextContent.trim();

    // Call Share
    share();
  } catch (err) {
    alert('It was an undisputed mistake.');
    console.error(err);
  }
};

</script>

<template>
  <button v-if="isShareSupported" @click="startShare">Compartilhar</button>
</template>

