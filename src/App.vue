<script>
  import { QuillEditor, onMounted } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  import { collection, query, where, getDocs } from 'firebase/firestore';
  import { db } from '@/firebase'

  export default {
    components: {
      QuillEditor
    }
  }
</script>

<template>
  <QuillEditor toolbar="full" />
</template>

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db,'notes'));
  let fbnotes = []
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  const notes = {
    id: doc.id,
    content: doc.data().content,
  }
  fbnotes.push(notes)
});
QuillEditor.value = fbnotes
})

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

