<template lang="pug">
  div#home
    vue-headful(
      title="mindexe | Web & Sistemas"
    )

    h1.logo(data-aos="fade-down" data-aos-duration="500" ) #[p] m#[strong indexe] #[p]

    div.titulo(data-aos="fade-right" data-aos-duration="1000" )
      h2 #[span.first aperte uma te]#[span.second cla_]
      p para ver um #[span projeto] 

    nav.projs-navgation 
      div.row-1(data-aos="fade-right" data-aos-duration="2000" )
        router-link(to='/exchange') e
        router-link(to='') b
        router-link(to='') c
      
      div.row-2(data-aos="fade-left" data-aos-duration="2000" )
        router-link(to='') a
        router-link(to='') b
        router-link(to='') c

    div.about(data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom")
      router-link(to='') sobre

    div.parallax
      div(id="parallax-bg-3" class="parallax-bg")
        div(id="bg-3-1" data-aos="fade-up" data-aos-duration="500")
        div(id="bg-3-2" data-aos="fade-up" data-aos-duration="1000")
        div(id="bg-3-3" data-aos="fade-up" data-aos-duration="2000")
        div(id="bg-3-4")

</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    parallaxScroll() {
      var scrolled = window.scrollY;
      document.querySelector("#bg-3-1").style.top = 0 - scrolled * 0.25 + "px";
      document.querySelector("#bg-3-2").style.top = 0 - scrolled * 0.3 + "px";
      document.querySelector("#bg-3-3").style.top = 0 - scrolled * 0.1 + "px";
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
      opacity: 0.5;
      border-radius: 2px;
      width: 80px;
      height: 1px;
      margin: 20px 20px;
    }
  }

  .titulo {
    position: fixed;

    h2 {
      font-weight: lighter;

      .first {
        background-color: $roxo-claro;
      }

      .second {
        background-color: transparent;
        font-weight: bold;
        color: $roxo-claro;
      }
    }

    p {
      text-align: right;
      color: $roxo-claro;

      span {
        color: $branco;
        opacity: 0.7;
      }
    }
  }

  .projs-navgation {
    font-family: t26-carbon, monospace;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 5;

    div {
      display: flex;
      justify-self: center;
    }

    a {
      border: 1px solid $branco;
      border-radius: 10px;
      color: $branco;
      z-index: 10;

      transition: all 0.5s ease;
      opacity: 0.5;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }

  .about {
    position: fixed;
    z-index: 5;

    a {
      font-family: t26-carbon, monospace;
      border: 1px solid $branco;
      border-radius: 10px;
      color: $branco;

      transition: all 0.5s ease;
      opacity: 0.5;

      &:hover,
      &:focus {
        cursor: pointer;
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
        z-index: 3;
        opacity: 0.8;
      }
      div#bg-3-2 {
        z-index: 2;
      }
      div#bg-3-3 {
        z-index: 4;
        opacity: 0.5;
      }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #home {
    background: linear-gradient(to bottom, $roxo, $preto);

    .titulo {
      margin-top: 15vh;

      h2 {
        font-size: 28px;
        left: 0px;

        margin-bottom: 10px;

        .first {
          padding: 3px 0px 3px 50px;
        }
      }

      p {
        font-size: 18px;
      }
    }

    .projs-navgation {
      width: 100vw;

      margin: 30vh auto 0px auto;

      div {
        margin: 0px auto;
      }

      .row-1 {
        margin-left: 15vw;
      }
      .row-2 {
        margin-right: 15vw;
      }

      a {
        padding: 10px 20px;
        margin: 10px;
        font-size: 30px;
      }
    }

    .about {
      width: 100vw;
      bottom: 100px;
      right: -80px;

      a {
        box-shadow: 0px 0px 10px 0px $roxo-claro;

        font-size: 40px;
        padding: 10px 20px;
      }
    }

    .parallax {
      /* background layer */
      div#parallax-bg-3 {
        top: 100px;
      }

      div#bg-3-1 {
        background: url("../assets/tcm3.svg");
        width: 529px;
        height: 900px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../assets/tem.svg");
        width: 529px;
        height: 900px;
        right: 160px;
      }
      div#bg-3-3 {
        background: url("../assets/em.svg");
        width: 446px;
        height: 713px;
        right: 180px;
      }
      div#bg-3-4 {
        display: none;
      }
    }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
  #home {
    background: linear-gradient(to bottom, $preto, $roxo);   

    .titulo {
      margin-left: 40vw;
      margin-top: 145px;

      h2 {
        font-size: 25px;
        left: 0px;

        margin-bottom: 10px;

        .first {
          padding: 3px 0px 3px 70px;
        }
      }

      p {
        font-size: 18px;
      }
    }

    .projs-navgation {
      width: 100vw;

      margin: 270px auto 0px auto;
      

      div {
        margin: 0px auto;
      }

      .row-1 {
        margin-left: 40vw;
      }
      .row-2 {
        margin-right: 40vw;
      }

      a {
        padding: 10px 20px;
        margin: 10px;
        font-size: 30px;
      }
    }

    .about {
      width: 100vw;
      top: 680px;

      a {
        box-shadow: 0px 0px 30px 10px #00000030;

        font-size: 25px;
        padding: 10px 20px
      }
    }

    .parallax {
      div#bg-3-1 {
        background: url("../assets/d-tcm.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../assets/d-tem.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-3 {
        background: url("../assets/d-em.svg");
        width: 100vw;
        height: 100vh;
        left: -250px;
      }
      div#bg-3-4 {
        position: fixed !important;
        background: url("../assets/d-b.svg");
        width: 100vw;
        height: 100vh;
        left: 0px;
        z-index: 4;
        opacity: .8;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  #home {
    background: linear-gradient(to bottom, $preto, $roxo);

    .titulo {
      margin-left: 45vw;
      margin-top: 145px;

      h2 {
        font-size: 25px;
        left: 0px;

        margin-bottom: 10px;

        .first {
          padding: 3px 0px 3px 70px;
        }
      }

      p {
        font-size: 18px;
      }
    }

    .projs-navgation {
      width: 100vw;

      margin: 270px auto 0px auto;

      div {
        margin: 0px auto;
      }

      .row-1 {
        margin-left: 44vw;
      }
      .row-2 {
        margin-right: 44vw;
      }

      a {
        padding: 10px 20px;
        margin: 10px;
        font-size: 30px;
      }
    }

    .about {
      width: 100vw;
      top: 680px;

      a {
        box-shadow: 0px 0px 30px 10px #00000030;

        font-size: 30px;
        padding: 10px 20px;
      }
    }

    .parallax {
      div#bg-3-1 {
        display: none;
        background: url("../assets/d-tcm.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../assets/d-tem.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-3 {
        background: url("../assets/d-em.svg");
        width: 100vw;
        height: 100vh;
        left: -250px;
      }
      div#bg-3-4 {
        position: fixed !important;
        background: url("../assets/d-b.svg");
        width: 100vw;
        height: 100vh;
        left: 0px;
        z-index: 4;
        opacity: .8;
      }
    }
  }
}
</style>
