<template lang="pug">
  div#home
    h1.logo #[p] m#[strong indexe] #[p]

    div.titulo
      h2 #[span.first aperte uma te]#[span.second cla_]
      p para ver um #[span projeto] 

    nav.projs-navgation 
      div.row-1
        router-link(to='') a
        router-link(to='') b
        router-link(to='') c
      
      div.row-2
        router-link(to='') a
        router-link(to='') b
        router-link(to='') c

    div.about
      router-link(to='') sobre

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
      document.querySelector("#bg-3-1").style.top = 0 - (scrolled * 0.25) + "px";
      document.querySelector("#bg-3-2").style.top = 0 - (scrolled * 0.3) + "px";
      document.querySelector("#bg-3-3").style.top = 0 - (scrolled * 0.1) + "px";
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


  .logo {
    font-family: t26-carbon, monospace;

    display: flex;
    justify-content: center;
    position: fixed;

    width: 100vw;
    margin-top: 30px;
    text-align: center;

    strong {
      color: $roxo-claro;
    }

    p {
      background-color: $roxo-claro;
      opacity: .5;
      border-radius: 2px;
      width: 80px;
      height: 1px;
      margin: 20px 20px; 
    }
  }

  .titulo {
    position: fixed;
    
    margin-top: 15vh;

    h2 {
      font-weight: lighter;

      font-size: 28px;
      left: 0px;

      margin-bottom: 10px;
      
      .first {
        background-color: $roxo-claro;
        padding: 3px 0px 3px 50px;
      }

      .second {
        background-color: transparent;
        font-weight: bold;
        color: $roxo-claro;
      }

    }

    p { 
      font-size: 18px;
      text-align: right;
      color: $roxo-claro;
      
      span {
        color: $branco;
        opacity: .7;
      }
    }
  }

  .projs-navgation {
    font-family: t26-carbon, monospace;
    position: fixed;
    display: flex;
    width: 100vw;
    flex-direction: column;
    justify-content: center;

    margin: 30vh auto 0px auto;

    div {
      display: flex;
      margin: 0px auto;
      justify-self: center;
    }

    .row-1 { margin-left: 10vw; }
    .row-2 { margin-right: 10vw; }

    a {
      border: 1px solid $branco;
      border-radius: 10px;
      color: $branco;
      z-index: 10;

      transition: all .5s ease;
      opacity: .5;

      padding: 10px 20px;
      margin: 10px;
      font-size: 40px;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }

  .about {
    position: fixed;
    width: 100vw;
    bottom: 100px;
    right: -80px;

    a {
      box-shadow: 0px 0px 10px 0px $roxo-claro;
      font-family: t26-carbon, monospace;
      border: 1px solid $branco;
      border-radius: 10px;
      color: $branco;

      transition: all .5s ease;
      opacity: .5;

      font-size: 40px;
      padding: 10px 20px;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }

  .parallax {
    height: calc(100vh + 200px);

    /* background layer */
    div#parallax-bg-3 {
      position: fixed;
      width: 960px;
      top: 20px;
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
      background: url("../assets/tcm2.svg");
      width: 529px;
      height: 900px;
      right: 160px;
      z-index: 3;
      opacity: .8;
    }
    div#bg-3-2 {
      background-image: url("../assets/tem.svg");
      width: 529px;
      height: 900px;
      right: 160px;
      z-index: 2;
    }
    div#bg-3-3 {
      background: url("../assets/em.svg");
      width: 446px;
      height: 713px;
      right: 180px;
      z-index: 4;
      opacity: .5;
    }

  }
}
</style>
