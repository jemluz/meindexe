<template>
  <div id="homeFlutter" class="bg-fixed text-center">
    <vue-headful :title="lang.homePage.metatitle"></vue-headful>

    <h1 data-aos="fade-down" data-aos-duration="500"
      class="logo pt-16 flex justify-center items-center w-full text-center text-3xl"
    >
      <router-link to="/home-web">
        <fa-icon
          class="go-web-button text-lg mt-2"
          :icon="['fa', 'arrow-left']"
        ></fa-icon>
      </router-link>

      <p class="w-8 mx-4 opacity-50"></p>

      m<strong>indexe</strong>

      <p class="w-16 mx-4 opacity-50"></p>
    </h1>

    <p data-aos="fade-down" data-aos-duration="500"
      class="sublogo -mt-1 ml-5 w-full flex justify-center absolute opacity-70"
    >
      flutter
    </p>

    <div data-aos="fade-right" data-aos-duration="1000"
      class="titulo mt-16 absolute text-right sm:w-6/12 sm:ml-24 md:w-full lg:-ml-6"
    >
      <h2 class="flex justify-center items-center md:mx-auto md:w-4/12">
        <span class="first py-2 pl-32 text-xl sm:pl-32 md:-ml-64 lg:pl-64">{{
          lang.homePage.title
        }} </span>
        <span class="second"> {{ lang.homePage.secondTitle }}_</span>
      </h2>

      <p class="mt-2 pl-32 text-sm flex justify-center opacity-70 sm:w-10/12 md:pl-6 lg:pl-48  xl:pl-64">
        {{ lang.homePage.sub }} {{ lang.homePage.secondSub }}
      </p>
    </div>

    <nav
      class="projs-navgation mt-48 w-full absolute flex flex-col justify-center text-2xl z-50"
    >
      <div class="row-1 flex justify-center" data-aos="fade-right" data-aos-duration="2000">
        <router-link to="" class="px-4 py-2 rounded-lg opacity-70"
          >h</router-link
        >
        <router-link to="" class="mx-4 px-4 py-2 rounded-lg opacity-70"
          >c</router-link
        >
        <router-link to="" class="px-4 py-2 rounded-lg opacity-70"
          >m</router-link
        >
      </div>

      <div class="row-2 -mr-12 md:-mr-24 my-6 flex justify-center" data-aos="fade-left" data-aos-duration="2000">
        <router-link to="/loljinha" class="px-4 py-2 rounded-lg opacity-70"
          >l</router-link
        >
        <router-link to="" class="empty mx-4 px-4 py-2 rounded-lg opacity-70"
          >-</router-link
        >
        <router-link to="" class="empty px-4 py-2 rounded-lg opacity-70"
          >-</router-link
        >
      </div>

      <div class="row-3 flex justify-center" data-aos="fade-right" data-aos-duration="3000">
        <router-link to="" class="empty px-4 py-2 rounded-lg opacity-70"
          >-</router-link
        >
        <router-link
          to="/sobre"
          class="about ml-4 px-4 py-2 bg-white rounded-lg"
          >{{ lang.homePage.btn }}</router-link
        >
      </div>
    </nav>

    <div
      class="btn-language -ml-8 mt-12 fixed top-3/4 md:top-2/3 xl:top-1/3 flex justify-center w-full whitespace-nowrap z-50"
    >
      <button
        @click="selectPT"
        :class="[isPtLanguage ? 'active' : 'disabled']"
        class="px-6 py-4 flex items-center "
      >
        <img src="../../assets/brazil.svg" alt="" class="w-6 mr-5" /> PT
      </button>

      <button
        @click="selectEN"
        :class="[!isPtLanguage ? 'active' : 'disabled']"
        class="px-6 py-4 flex items-center"
      >
        <img src="../../assets/usa-today.svg" alt="" class="w-6 mr-5"/> EN
      </button>
    </div>

    <div class="parallax">
      <div id="parallax-bg-3" class="parallax-bg">
        <div id="bg-3-1" data-aos="fade-up" data-aos-duration="500"></div>
        <div id="bg-3-2" data-aos="fade-up" data-aos-duration="1000"></div>
        <div id="bg-3-3" data-aos="fade-up" data-aos-duration="2000"></div>
        <div id="bg-3-4"></div>
      </div>
    </div>
  </div>
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
  background: linear-gradient(to bottom, $azul-escuro, $preto);

  color: $branco;

  .logo {
    font-family: t26-carbon, monospace;

    strong {
      color: $azul-claro;
    }

    .go-web-button {
      color: $branco;
    }

    p {
      background-color: $azul-claro;
      border-radius: 2px;
      height: 1px;
    }
  }

  .sublogo {
    font-family: t26-carbon, monospace;
  }

  .titulo {
    h2 {
      font-weight: lighter;

      .first {
        background-color: rgba($color: $azul-claro, $alpha: 0.1);
        color: $azul-claro;
      }

      .second {
        background-color: transparent;
        font-weight: bold;
        color: $branco;
      }
    }
  }

  .projs-navgation {
    font-family: t26-carbon, monospace;

    div {
      .empty {
        opacity: 0.2;
      }
    }

    a {
      border: 1px solid $branco;
      color: $branco;

      transition: all 0.5s ease;

      &:hover,
      &:focus {
        cursor: pointer;
        opacity: 1;
      }
    }

    .about {
      font-family: t26-carbon, monospace;
      background-color: $branco;
      color: $azul-escuro;
      border-radius: 10px;

      transition: all 0.5s ease;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }

  .btn-language {
    .disabled {
      opacity: 0.3;
    }

    .active {
      opacity: 0.8;
    }

    button {
      font-family: t26-carbon, monospace;
      color: $branco;
      transition: all 0.5s ease;

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
@media only screen and (max-width: 700px) {
  #homeFlutter {
    // background: linear-gradient(to bottom, $azul-escuro, $preto);

    // .titulo {
    //   margin-top: 15vh;

    //   h2 {
    //     font-size: 24px;
    //     left: 0px;

    //     margin-bottom: 10px;

    //     .first {
    //       padding: 3px 0px 3px 20vw;

    //       @media only screen and (min-width: 400px) and (max-width: 680px) {
    //         padding: 3px 0px 3px 30vw;
    //       }

    //       @media only screen and (min-width: 681px) and (max-width: 1000px) {
    //         padding: 3px 0px 3px 35vw;
    //       }
    //     }
    //   }

    //   p {
    //     font-size: 14px;
    //   }
    // }

    // .projs-navgation {
    //   width: 100vw;

    //   margin: 30vh auto 0px auto;

    //   div {
    //     margin: 0px auto;
    //   }

    //   .row-1 {
    //     margin: 0px auto;
    //     padding-left: 10vw;
    //   }
    //   .row-2 {
    //     margin: 0px auto;
    //     padding-right: 5vw;
    //   }
    //   .row-3 {
    //     margin: 0px auto;
    //   }

    //   a {
    //     padding: 10px 20px;
    //     margin: 10px;
    //     font-size: 30px;
    //   }
    // }

    // .about {
    //   bottom: 100px;

    //   a {
    //     font-size: 40px;
    //     padding: 10px 20px;
    //   }
    // }

    // .btn-language {
    //   width: 100vw;

    //   button {
    //     width: 100px;
    //     font-size: 20px;
    //     padding: 10px 20px;

    //     img {
    //       max-width: 20px;
    //     }

    //     &:last-child {
    //       width: 100px;
    //     }

    //   }
    // }

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
@media only screen and (min-width: 701px) and (max-width: 2499px) {
  #homeFlutter {
    .parallax {
      div#bg-3-1 {
        background: url("../../assets/home-bg/flutter/d-tcm.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../../assets/home-bg/flutter/d-tem.svg");
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
        background: url("../../assets/home-bg/flutter/d-b.svg");
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
    .parallax {
      div#bg-3-1 {
        display: none;
        background: url("../../assets/home-bg/flutter/d-tcm.svg");
        width: 529px;
        height: 800px;
        right: 160px;
      }
      div#bg-3-2 {
        background-image: url("../../assets/home-bg/flutter/d-tem.svg");
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
        background: url("../../assets/home-bg/flutter/d-b.svg");
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
