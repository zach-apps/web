<template>
  <div>
    <div class='top-spacer'></div>
    <div class='quarto'>
      <iframe class='quarto-embed' :src="html_id" frameborder='0'></iframe>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "../assets/material.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-r";

export default {
  name: "QuartoViewer",
  props: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    html_id() {
      console.log(process.env.BASE_URL + this.$route.params.id + '.html')
      return process.env.BASE_URL + this.$route.params.id + '.html'
    }
  },
  data() {
    return {};
  }
}
</script>
<style>

.quarto {
  width: 100vw;
  height: 100vh;
}

.quarto-embed {
  width: var(--site-width);
  height: 100%;
} 

 


</style>
