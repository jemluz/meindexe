<template lang="pug">
#homeFlutter
  vue-headful(:title="lang.homePage.metatitle")

  h1.logo(data-aos="fade-down", data-aos-duration="500") #[router-link(to="/home-web") #[fa-icon.go-web-button(:icon="['fa', 'arrow-left']")]] #[p.rect-1] m#[strong indexe] #[p.rect-2]
  p.sublogo(data-aos="fade-down", data-aos-duration="500") flutter

  .titulo(data-aos="fade-right", data-aos-duration="1000")
    h2 #[span.first {{ lang.homePage.title }}]#[span.second {{ lang.homePage.secondTitle }}_]
    p {{ lang.homePage.sub }} #[span {{ lang.homePage.secondSub }}]

  nav.projs-navgation 
    .row-1(data-aos="fade-right", data-aos-duration="2000")
      router-link(to="") h
      router-link(to="") c
      router-link(to="") m

    .row-2(data-aos="fade-left", data-aos-duration="2000")
      router-link(to="/loljinha") l
      router-link.empty(to="") -
      router-link.empty(to="") -

    .row-1(data-aos="fade-right", data-aos-duration="3000")
      router-link.empty(to="") -
      router-link.about(to="/sobre") {{ lang.homePage.btn }}

  .btn-language 
    button(@click="selectPT", :class="[isPtLanguage ? 'active' : 'disabled']") #[img(src="../../assets/brazil.svg")]PT
    button(@click="selectEN", :class="[!isPtLanguage ? 'active' : 'disabled']") #[img(src="../../assets/usa-today.svg")]EN

  .parallax
    #parallax-bg-3.parallax-bg
      #bg-3-1(data-aos="fade-up", data-aos-duration="500")
      #bg-3-2(data-aos="fade-up", data-aos-duration="1000")
      #bg-3-3(data-aos="fade-up", data-aos-duration="2000")
      #bg-3-4
</template>

<script>
import { mapState } from "vuex";
import { userLanguage } from "@/global";

export default {
  name: "HomeFlutter",
  computed: mapState(["lang", "isPtLanguage"]),
  methods: {
    parallaxScroll() {
      var scrolled = window.scrollY;
      document.querySelector("#bg-3-1").style.top = 0 - scrolled * 0.25 + "px";
      document.querySelector("#bg-3-2").style.top = 0 - scrolled * 0.3 + "px";
      document.querySelector("#bg-3-3").style.top = 0 - scrolled * 0.1 + "px";
    },
    listenKeyboard() {
      let code = event.keyCode ? event.keyCode : event.which;

      console.log(code);
      // 1 - if u press e: view exchange project
      if (code == 69) {
        this.$router.push({ path: "/exchange" });
      } else if (code == 65) {
        this.$router.push({ path: "/aurora-i" });
      } else if (code == 77) {
        this.$router.push({ path: "/monique" });
      } else if (code == 66) {
        this.$router.push({ path: "/bubbox" });
      } else if (code == 71) {
        this.$router.push({ path: "/gt" });
      } else if (code == 80) {
        this.$router.push({ path: "/produtividade" });
      } else if (code == 76) {
        this.$router.push({ path: "/lojista" });
      } else if (code == 82) {
        this.$router.push({ path: "/letrun" });
      }
    },
    selectPT() {
      this.$store.commit("setLangPT");
      localStorage.setItem(userLanguage, "pt");
    },
    selectEN() {
      this.$store.commit("setLangEN");
      localStorage.setItem(userLanguage, "en");
    },
  },
  created() {
    window.addEventListener("scroll", this.parallaxScroll);
    document.addEventListener("keyup", this.listenKeyboard);
  },
};
</script>

<style lang="scss">
@import "../../styles/helpers/variables";

#homeFlutter {
  background-attachment: fixed;

  color: $branco;
  text-align: center;

  .logo {
    font-family: t26-carbon, monospace;

    display: flex;
    justify-content: center;
    position: fixed;
    width: 100vw;

    text-align: center;
    margin-top: 30px;
    strong {
      color: $azul-claro;
    }

    .go-web-button {
      color: $branco;
      width: 22px;
      margin-top: 4px;
    }

    p {
      background-color: $azul-claro;
      opacity: 0.5;
      border-radius: 2px;

      height: 1px;
      margin: 20px 20px;
    }

    .rect-1 {
      width: 40px;
    }
    .rect-2 {
      width: 80px;
    }
  }

  .sublogo {
    font-family: t26-carbon, monospace;

    display: flex;
    justify-content: center;
    position: fixed;
    width: 100vw;

    margin-top: 62px;
    margin-left: 26px;

    opacity: 0.7;
  }

  .titulo {
    position: fixed;

    h2 {
      font-weight: lighter;

      .first {
        background-color: rgba($color: $azul-claro, $alpha: .1);
        color: $azul-claro;
      }

      .second {
        background-color: transparent;
        // font-weight: bold;
        color: $branco;
        opacity: 0.8;
      }
    }

    p {
      text-align: right;
      color: $branco;
      opacity: 0.8;
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

      .empty {
        opacity: 0.2;
      }
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

    .about {
      z-index: 5;
      opacity: 1;

      font-family: t26-carbon, monospace;
      background-color: $branco;
      color: $azul-escuro;
      border-radius: 10px;

      transition: all 0.5s ease;

      &:hover,
      &:focus {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  .btn-language {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 5;

    .disabled {
      opacity: 0.3;
    }
    .active {
      opacity: 0.8;
    }

    button {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }

      white-space: nowrap;
      font-family: t26-carbon, monospace;
      border: 1px solid $branco;
      border-bottom: none;
      color: $branco;
      border-radius: 10px 0px 0px 0px;
      transition: all 0.5s ease;
      opacity: 0.8;

      &:last-child {
        border-radius: 0px 10px 0px 0px;
      }

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
  #homeFlutter {
    background: linear-gradient(to bottom, $azul-escuro, $preto);

    .titulo {
      margin-top: 15vh;

      h2 {
        font-size: 24px;
        left: 0px;

        margin-bottom: 10px;

        .first {
          padding: 3px 0px 3px 70px;
        }
      }

      p {
        font-size: 14px;
      }
    }

    .projs-navgation {
      width: 100vw;

      margin: 30vh auto 0px auto;

      div {
        margin: 0px auto;
      }

      .row-1 {
        margin-left: 10vw;
      }
      .row-2 {
        margin-right: 15vw;
      }
      .row-3 {
        margin-left: 15vw;
      }

      a {
        padding: 10px 20px;
        margin: 10px;
        font-size: 30px;
      }
    }

    .about {
      bottom: 100px;

      a {
        font-size: 40px;
        padding: 10px 20px;
      }
    }

    .btn-language {
      width: 100vw;

      button {
        width: 100px;
        font-size: 20px;
        padding: 10px 20px;

        img {
          max-width: 20px;
        }

        &:last-child {
          width: 100px;
        }

      }
    }

    .parallax {
      /* background layer */
      div#parallax-bg-3 {
        top: 100px;
      }

      div#bg-3-1 {
        background: url("../../assets/home-bg/flutter/mobile/tcm.svg");
        width: 529px;
        height: 900px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../../assets/home-bg/flutter/mobile/tem.svg");
        width: 529px;
        height: 900px;
        right: 160px;
      }
      div#bg-3-3 {
        background: url("../../assets/home-bg/em.svg");
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
  #homeFlutter {
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
      margin: 250px auto 0px auto;

      div {
        margin: 0px auto;
      }

      .row-1 {
        margin-left: 40vw;
      }
      .row-2 {
        margin-right: 40vw;
      }
      .row-3 {
        margin-left: 41vw;
      }

      a {
        padding: 10px 20px;
        margin: 10px;
        font-size: 30px;
      }
    }

    .about {
      width: 100vw;
      bottom: 50px;

      a {
        box-shadow: 0px 0px 30px 10px #00000030;

        font-size: 25px;
        padding: 10px 20px;
      }
    }

    .btn-language {
      width: 100vw;
      left: 300px;

      button {
        width: 120px;
        img {
          max-width: 20px;
        }

        &:last-child {
          width: 100px;
        }

        font-size: 20px;
        padding: 10px 20px;
      }
    }

    .parallax {
      div#bg-3-1 {
        background: url("../../assets/home-bg/d-tcm.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../../assets/home-bg/d-tem.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-3 {
        background: url("../../assets/home-bg/d-em.svg");
        width: 100vw;
        height: 100vh;
        left: -250px;
      }
      div#bg-3-4 {
        position: fixed !important;
        background: url("../../assets/home-bg/d-b.svg");
        width: 100vw;
        height: 100vh;
        left: 0px;
        z-index: 4;
        opacity: 0.8;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  #homeFlutter {
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

    .btn-language {
      width: 100vw;
      left: 500px;

      button {
        img {
          max-width: 20px;
        }
        box-shadow: 0px 0px 30px 10px #00000030;

        font-size: 20px;
        padding: 10px 20px;

        margin: 0px;
      }
    }

    .parallax {
      div#bg-3-1 {
        display: none;
        background: url("../../assets/home-bg/d-tcm.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../../assets/home-bg/d-tem.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-3 {
        background: url("../../assets/home-bg/d-em.svg");
        width: 100vw;
        height: 100vh;
        left: -250px;
      }
      div#bg-3-4 {
        position: fixed !important;
        background: url("../../assets/home-bg/d-b.svg");
        width: 100vw;
        height: 100vh;
        left: 0px;
        z-index: 4;
        opacity: 0.8;
      }
    }
  }
}
</style>
