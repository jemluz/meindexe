<template lang="pug">
  header

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Header",
  props: {
    hideToggle: Boolean,
  },
  computed: mapState(['isCloseIcon']),
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu")
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/helpers/variables";

</style>
