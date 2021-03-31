<template lang='pug'>
  div(id="app")
    Content() 

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

// scroll horizontal
/*  width */
::-webkit-scrollbar:horizontal  {
  height: 0px;
}
/* Track */
::-webkit-scrollbar-track:horizontal  {
  box-shadow: inset 0 0 5px #000;
}
/* Handle */
::-webkit-scrollbar-thumb:horizontal  {
  background: #fff;
  border-radius: 20px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:horizontal:hover {
  background: #fff;
}

/* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px  #999999; 
    border-radius: 5px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b177e8; 
    border-radius: 5px;

  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #000; 
    border-radius: 5px;

  }

#app { 
  // overflow: hidden;

  .container {
    max-width: 100vw !important;
  }

  * {
    outline: none;
  }

}

#colorBlindSVG { display: none; } // remove o espaço abaixo do footer
</style>
