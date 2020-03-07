<template lang="pug">
  nav(class="menu-nav", v-show="isMenuVisible")


</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Menu",
  computed: mapState(['isMenuVisible'])
}
</script>

<style lang="scss">
@import "../../styles/helpers/variables";

</style>
