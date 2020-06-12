<template lang='pug'>
  div(id="app")
    Content(:class="{'lock-scroll': isMenuVisible}") 

</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/template/Header'
import Nav from '@/components/template/Nav'
import Content from '@/components/template/Content'
import Footer from '@/components/template/Footer'

export default {
  name: 'App',
  components: { Header, Nav, Content, Footer },
  computed:  mapState(['isMenuVisible'])
}
</script>


<style lang="scss">

@import "./styles/helpers/reset";
@import "./styles/helpers/classes";

#app { 
  overflow: hidden;
}

@media only screen and (max-width: 900px) {
  // .lock-scroll {
  //   display: none;
  // }
} /* mobile */

#colorBlindSVG { display: none; } // remove o espaço abaixo do footer
</style>
