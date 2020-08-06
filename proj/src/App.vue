<template lang='pug'>
  div(id="app")
    Content(:class="{'lock-scroll': isMenuVisible}") 

</template>

<script>
import Content from '@/components/template/Content'
import { mapState } from 'vuex';
import { userLanguage } from '@/global'

export default {
  name: 'App',
  computed: mapState(["lang"]),
  components: { Content },
  methods: {
    verifyLanguage() {
      const userLang = localStorage.getItem(userLanguage)

      if(userLang === 'pt') {
        this.$store.commit("setLangPT")
      } else if (userLang === 'en') {
        this.$store.commit("setLangEN")
      }
    }
  },
  created() {
    this.verifyLanguage();
  }
}
</script>


<style lang="scss">

@import "./styles/helpers/reset";
@import "./styles/helpers/classes";
@import "./styles/helpers/variables";

#app { 
  overflow: hidden;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px  #99999920; 
    border-radius: 5px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b177e840; 
    border-radius: 5px;

  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b177e860; 
    border-radius: 5px;

  }
}

@media only screen and (max-width: 900px) {
  // .lock-scroll {
  //   display: none;
  // }
} /* mobile */

#colorBlindSVG { display: none; } // remove o espaço abaixo do footer
</style>
