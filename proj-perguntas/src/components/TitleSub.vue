<template lang="pug">
  section.resumo
    h4 {{ title }}
    h6(v-show="isStrike") #[strike {{ subtitle }}] 
    h6(v-show="!isStrike") {{ subtitle }}
</template>

<script>
export default {
  name: 'TitleSub',
  props: ['title', 'subtitle', 'isStrike']
}
</script>

<style lang="scss">
.resumo {
  margin: 50px 0px;
}  
</style>