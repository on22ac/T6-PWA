<template>

  <nav>
<router-link to="/"> Home </router-link> |
<router-link to="/feed"> Feed </router-link> |
<router-link to="/register"> Register </router-link> |
<router-link to="/sign-in"> Login </router-link> |
</nav>
  <router-view />
  <QuillEditor toolbar="full" />
</template>
<script>
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';

  export default {
    components: {
      QuillEditor
    }
  };
</script>


