<template lang="pug">
  nav.menu
    router-link(to="/" v-show="!isEmojis") #[fa-icon.mr-4.icon(icon="arrow-left")] 

    fa-icon.mr-2(v-show="isEmojis" icon="grin-tongue")
    fa-icon.mr-2(v-show="isEmojis" icon="sad-cry")
    fa-icon.mr-4(v-show="isEmojis" icon="surprise")
    
    h3.mr-4 {{ text }}

    fa-icon.mr-2(v-show="isEmojis" icon="surprise")
    fa-icon.mr-2(v-show="isEmojis" icon="sad-cry")
    fa-icon.mr-2(v-show="isEmojis" icon="grin-tongue")

</template>

<script>
export default {
  name: 'Header',
  props: ['text', 'isEmojis']
}
</script>

<style lang="scss">
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  

  background-color: tomato;
  color: white;

  padding: 20px 0px;

  .icon { 
    color: white; 
    &:hover {
      color: #333;
    }
  }
  h3 { margin: 0px;}
}

// MOBILE
@media only screen and (max-width: 900px) {
  .menu {
    display: flex;
    // align-items: flex-start;
    padding: 20px 20px;

    h3 { 
      max-width: 50vw;
      font-size: 20px;
    }
  }
}
</style>