<template>

  <div class="navBar">

    <!-- FILE NAME  ---------------------------------------------------- -->
    <input type="text" v-model="fileName" placeholder="Unbenannt.pdf" />

    <!-- DOWNLOAD BUTTON ----------------------------------------------- -->
    <div>
      <button @click="downloadFile">Datei herunterladen</button>
    </div>

  </div>

</template>


<script setup>

// imports -------------------------------------------------------
import { defineProps } from "vue";
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

// set ref for file name -----------------------------------------
const fileName = ref('');

const props = defineProps({ quillContent: String });

// download function ---------------------------------------------
const downloadFile = () => {
  console.log(props.quillContent)
  const fileNameValue = fileName.value;

  // pdf ----------------------------------------------------------
  const pdfContent = `
       <html>
         <head>
           <title>${fileNameValue}</title>
         </head>
         <body>
           <pre>${props.quillContent}</pre>
       </body>
       </html>
     `;

  // set pdf form options ------------------------------------------
  const options = {
    filename: fileNameValue + 'pdf',
    html2canvas: {},
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // generate pdf and download ------------------------------------
  html2pdf().from(pdfContent).set(options).save();

  console.error('Quill editor wurde nicht gefunden -.-')

};

</script>


<style scoped>
button {
  padding: 7px 12px;
  background-color: #218087;
  color: #fff;
  font-size: small;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #376782;
}

.navBar {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>