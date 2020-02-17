<template lang="pug">
  div#home
    h1 #[p] m#[strong indexe] #[p]

    div.parallax
      div(id="parallax-bg-3" class="parallax-bg")
        div(id="bg-3-1")
        div(id="bg-3-2")
        div(id="bg-3-3")

</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    parallaxScroll() {
      var scrolled = window.scrollY;
      document.querySelector("#bg-3-1").style.top =
        0 - scrolled * 0.25 + "px";
      document.querySelector("#bg-3-2").style.top =
        0 - scrolled * 0.3 + "px";
      document.querySelector("bg-3-3").style.top =
        0 - scrolled * 0.35 + "px";
    }
  },
  created() {
    window.addEventListener("scroll", this.parallaxScroll);
  }
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

#home {
  background: linear-gradient(to bottom, $roxo, $preto);
  background-attachment: fixed;

  color: $branco;
  text-align: center;

  h1 {
    display: flex;
    position: fixed;
    margin: 20px 10vw;
    text-align: center;

    strong {
      color: $roxo-claro;
    }

    p {
      background-color: $branco;
      opacity: .5;
      border-radius: 2px;
      width: 50px;
      height: 2px;
      margin: 20px 20px; 
    }
  }

  .parallax {
    height: calc(100vh + 200px);

    /* background layer */
    div#parallax-bg-3 {
      position: fixed;
      width: 960px;
      top: 100px;
      left: 50%;
      margin-left: -470px;
    }
    /* foreground */
    div#parallax-bg-3 div {
      background-repeat: no-repeat;
      position: absolute;
      display: block;
      overflow: hidden;
    }
    div#bg-3-1 {
      background: url("../assets/tcm.svg");
      width: 529px;
      height: 757px;
      top: 100px;
      right: 100px;
      z-index: 3;
    }
    div#bg-3-2 {
      background-image: url("../assets/tem.svg");
      width: 603px;
      height: 583px;
      top: 100px;
      right: 30px;
      z-index: 2;
    }
    div#bg-3-3 {
      background: url("../assets/em.svg");
      width: 446px;
      height: 713px;
      top: 50px;
      right: 180px;
      z-index: 4;
    }

  }
}
</style>
