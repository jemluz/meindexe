<template lang="pug">
  footer
   
</template>

<script>
import InstagramEmbed from "vue-instagram-embed";

export default {
  name: "Footer",
  components: { InstagramEmbed },
  methods: {
    copy() {
      /* Get the text field */
      var copyText = document.getElementById("email");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      this.$toasted.info('Email Copiado!', { 
        theme: "bubble", 
        position: "bottom-center", 
        duration : 5000
      })
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/helpers/variables";

</style>
