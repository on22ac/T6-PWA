<script setup>
/**
 * @author Lorena Horvat <github: Lorena-Hrvt>
 */

// imports 
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

// css import
import '../assets/style.css';

// set ref for file name 
const fileName = ref('');

// download function 
const downloadFile = () => {

  const fileNameValue = fileName.value;

  // get semantic HTML representation of the editor content
  const editorHTML = getEditorHTML();

  // set pdf form options 
  const pdfOptions = {
    margin: 15,
    font: { family: 'inherit' }, 
    /* TODO: 
      - sans serif font is not displayed correctly in the generated PDF
      - solution could not be found yet
    */
    filename: fileNameValue,
    pagebreak: { mode: ['avoid-all'] },
    html2canvas: {},
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    enableLinks: true
  };

  // generate pdf and download 
  html2pdf().from(editorHTML).set(pdfOptions).save();

};


/**
 * @author Lorena Horvat <github: Lorena-Hrvt>
 * @author Thi Tuong Vy Nguyen <github: on22vy>
 */
// get semantic HTML representation of the content 
const getEditorHTML = () => {
  // quill instance
  // return htmlContent
  const editorElement = document.querySelector(".editor"); 

  if (editorElement) {
    // clone the editor element
    const clonedEditor = editorElement.cloneNode(true);

    // remove Quill-specific elements
    clonedEditor.querySelectorAll('.ql-clipboard, .ql-tooltip').forEach(el => el.remove());

    // extract HTML content from the cloned editor
    const htmlContent = clonedEditor.innerHTML;
    return htmlContent;

  } else {
    console.error("Quill editor element not found.");
    return "";
  }
};

</script>


<template>

<!-- @author Lorena Horvat <github: Lorena-Hrvt> -->
 

  <div class="btnContainer">

    <!-- FILE NAME  ---------------------------------------------------- -->

    <input class="filename" type="text" v-model="fileName" placeholder="Unbenannt" />


    <!-- DOWNLOAD BUTTON ----------------------------------------------- -->

    <button style="min-width: 128px;" @click="downloadFile">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M7.49997 10.9115C7.37946 10.9115 7.26728 10.8923 7.16345 10.8538C7.0596 10.8154 6.96088 10.7493 6.8673 10.6557L3.7577 7.54615C3.60898 7.39743 3.53559 7.2234 3.53753 7.02405C3.53944 6.8247 3.61283 6.64746 3.7577 6.49232C3.91283 6.33721 4.09103 6.25708 4.2923 6.25195C4.49358 6.24682 4.67179 6.32182 4.82692 6.47695L6.75 8.40003V0.75C6.75 0.537183 6.82179 0.358984 6.96537 0.215401C7.10896 0.0718007 7.28716 0 7.49997 0C7.71279 0 7.89099 0.0718007 8.03458 0.215401C8.17816 0.358984 8.24995 0.537183 8.24995 0.75V8.40003L10.173 6.47695C10.3217 6.32823 10.4983 6.25483 10.7028 6.25675C10.9073 6.25868 11.0871 6.33721 11.2422 6.49232C11.3871 6.64746 11.4621 6.8231 11.4672 7.01925C11.4724 7.2154 11.3974 7.39103 11.2422 7.54615L8.13265 10.6557C8.03907 10.7493 7.94035 10.8154 7.8365 10.8538C7.73267 10.8923 7.62049 10.9115 7.49997 10.9115ZM1.8077 15C1.30257 15 0.875 14.825 0.525 14.475C0.175 14.125 0 13.6974 0 13.1923V11.2307C0 11.0179 0.0717999 10.8397 0.2154 10.6961C0.358983 10.5525 0.537183 10.4808 0.75 10.4808C0.962817 10.4808 1.14102 10.5525 1.2846 10.6961C1.42818 10.8397 1.49997 11.0179 1.49997 11.2307V13.1923C1.49997 13.2692 1.53202 13.3397 1.59612 13.4038C1.66024 13.4679 1.73077 13.5 1.8077 13.5H13.1922C13.2692 13.5 13.3397 13.4679 13.4038 13.4038C13.4679 13.3397 13.5 13.2692 13.5 13.1923V11.2307C13.5 11.0179 13.5718 10.8397 13.7154 10.6961C13.8589 10.5525 14.0371 10.4808 14.25 10.4808C14.4628 10.4808 14.641 10.5525 14.7845 10.6961C14.9281 10.8397 15 11.0179 15 11.2307V13.1923C15 13.6974 14.825 14.125 14.475 14.475C14.125 14.825 13.6974 15 13.1922 15H1.8077Z"
          fill="white" />
      </svg>
      Herunterladen
    </button>
  </div>

</template>


