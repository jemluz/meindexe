<template lang="pug">
  div#exchange
    vue-headful(
      title="mindexe | Projeto Exchange"
    )

    div.data
      img(src="../assets/dot.svg")
      h3 mar/2018

    div.name#name
      h2 #[span.first exchan]#[span.second ge_]

    div.content-mob#content-mob
      div.inside
        img#exchange-img(src="../assets/exchange-thumb.png")

        p.desc redesign de um #[a(href='https://cutt.ly/yyMjJUz' target="_blank") aplicativo android], em um conceito alternativo às guidelines mobile.

        p.desc-2 o estudo incluiu 3 fases:

        p.desc-3 1ª - Análise da Interface #[br] #[a(href='https://cutt.ly/EyMj8bz' target="_blank") https://cutt.ly/EyMj8bz]
        p.desc-4 2ª - Pré Desenvolvimento #[br] #[a(href='https://cutt.ly/KyMkdH6' target="_blank") https://cutt.ly/KyMkdH6]
        p.desc-5 3ª - Relatório de Testes #[br] #[a(href='https://cutt.ly/hyMkhiE' target="_blank") https://cutt.ly/hyMkhiE]

      div.result
        p apresentação final
        a(href="https://cutt.ly/kyMkkFO") https://cutt.ly/kyMkkFO

      div.inside
        p.video video mockup #[br] #[a(href='https://cutt.ly/0yMkxtl' target="_blank") https://cutt.ly/0yMkxtl]

    div.line#line

    router-link.back-btn#back-btn(to='/') #[fa-icon(class="back-icon" icon="arrow-left")] Voltar para o início

    div.parallax
      div(id="parallax-bg-3" class="parallax-bg")
        div(id="bg-3-1")

</template>

<script>
export default {
  name: "ProjExchange",
  components: {},
  methods: {
    parallaxScroll() {
      var scrolled = window.scrollY;
      document.querySelector("#bg-3-1").style.top = 0 - scrolled * 0.25 + "px";
      // document.querySelector(".content-mob").style.top = 0 - scrolled * 1 + "px";
    },
    lineHeight() {
      let backButtonTop = document.getElementById("back-btn").offsetTop;
      let line = document.getElementById("line");

      line.style.height = (backButtonTop - 30) + "px";
    },
    mobContentStart(){
      let nameTop = document.getElementById("name").offsetTop;
      let nameHeight = document.getElementById("name").offsetHeight;
      let rotationDistorcion = 15

      let exchangeImage = document.getElementById("exchange-img");

      let lineHeight = document.getElementById("line").offsetHeight;
      let contentMob = document.getElementById("content-mob");

      exchangeImage.style.margin = (( nameTop * 3) + nameHeight + rotationDistorcion ) + "px 0px 0px 0px";
      // console.log(exchangeImage.style.margin)
      console.log(nameHeight)

      contentMob.style.height = (lineHeight - 60)+"px";
    }
  },
  created() {
    window.addEventListener("scroll", this.parallaxScroll);
  },
  mounted() {
    this.lineHeight();
    this.mobContentStart();
  }
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

#exchange {
  background-attachment: fixed;

  color: $branco;
  text-align: center;

  .data {
    font-family: t26-carbon, monospace;

    display: flex;
    justify-content: center;
    position: fixed;

    color: $roxo;
    z-index: 3;
  }

  .name {
    position: fixed;
    z-index: 3;

    h2 {
      font-family: 'Khula', sans-serif;
      font-weight: 400;

      .first {
        background-color: #659DE7;
        box-shadow: 0px 0px 20px 0px #00000020;
      }

      .second {
        background-color: transparent;
        color: #659DE7;
      }
    }
  }

  .content-mob {
    height: 480px;
    // width: 250px;

    overflow-y: scroll;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;

    .inside {
      padding: 0px 70px 0px 50px;

      img {
        box-shadow: 0px 0px 10px 0px #00000030;
      }

      .desc,
      .desc-2,
      .desc-3,
      .desc-4,
      .desc-5,
      .video {
        font-family: t26-carbon, monospace;
        font-size: 16px;
        font-style: italic;

        text-align: left;

        color: #555;

        a {
          font-weight: 700;
        }
      }

      .desc a { border-bottom: 1px solid $roxo; }

      .desc-3 a { 
        color: #5570F9; 
        border-bottom: 1px solid #5570F9;
      }
      .desc-4 a { 
        color: #659DE8; 
        border-bottom: 1px solid #659DE8;
      }
      .desc-5 a { 
        color: #70BCDC; 
        border-bottom: 1px solid #70BCDC;
      }

      .video a {
        color: $roxo;
        border-bottom: 1px solid $roxo;
      }
    }

    .result {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      background-color: $roxo;
      color: #fff;

      border-radius: 5px;
      box-shadow: 0px 0px 20px 0px #00000020;

      a {
        border-bottom: 1px solid #fff;
        color: #fff;
        font-weight: 700;
        opacity: .4;
      }
    }

  }

  .line {
    position: fixed;
    background: url("../assets/line.svg");
    opacity: .9;
  }

  .back-btn {
    font-family: t26-carbon, monospace;
    font-weight: 700;
    z-index: 3;

    box-shadow: 0px 0px 10px 5px #47286520;
    border: 2px solid $roxo;
    border-radius: 5px 10px 10px 5px;

    transition: all 1s ease;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    bottom: 0px;
    color: $roxo;

    &:hover {
      background-color: $roxo;
      color: $branco;
    }
  }

  .parallax {
    height: calc(100vh + 200px);

    /* background layer */
    div#parallax-bg-3 {
      position: fixed;
      width: 100vw;
      height: 100vh;
      right: 0;
      // margin-right: -250px;
    }
    /* foreground */
    div#parallax-bg-3 div {
      background-repeat: no-repeat;
      position: absolute;
      display: block;
      overflow: hidden;
    }
    div#bg-3-1 {
      z-index: 1;
      opacity: 0.5;
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #exchange {
    .data {
      top: 30px;
      left: 55px;
      h3 { 
        margin-left: 20px;
      }
    }

    .name {
      top: 80px;
      left: 30px;
      transform: rotate(-10deg);

      h2 {
        font-size: 25px;
        left: 0px;

        .first {
          padding: 5px 0px 0px 30px;
        }
      }
    }

    .content-mob {
      margin-left: 40px;
      margin-top: 60px;

      img {
        // margin-top: 300px;
        width: 200px;
      }

      .desc {
        margin-top: 20px;
      }

      .desc-2 {
        margin-top: 40px;
      }

      .desc-3,
      .desc-4,
      .desc-5 {
        margin-top: 20px;
      }
      
      .result {
        margin-top: 40px;
        padding: 15px 40px;

        p { margin-bottom: 5px;}
      }

      .video {
        margin-top: 20px;
      }
      
    }

    .line {
      width: 5px;
      height: 85vh;
      left: 60px;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 30px 30px;
      padding: 5px 20px 5px 20px;

      .back-icon {
        height: 15px;
        margin-right: 10px;
      }
    }

    .parallax {
      div#bg-3-1 {
          background: url("../assets/malha.png");
          width: 1503px;
          height: 852px;
          transform: rotate(-30deg);
          left: 0px;
          margin-top: -260px;
        }
    }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
 #exchange {
    .data {
      top: 30px;
      left: 128px;
      h3 { 
        margin-left: 20px;
      }
    }

    .name {
      top: 80px;
      left: 100px;
      transform: rotate(-10deg);

      h2 {
        font-size: 30px;
        left: 0px;

        .first {
          padding: 0px 0px 0px 30px;
        }
      }
    }

    .line {
      width: 5px;
      height: 85vh;
      left: 134px;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 50px 100px;
      padding: 5px 20px;
    }

    .parallax {
      div#bg-3-1 {
        background: url("../assets/d-malha.png");
        width: 1503px;
        height: 852px;
        transform: rotate(-20deg);
        left: 150px;
        margin-top: -50px;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  #exchange {
    .data {
      top: 30px;
      left: 545px;
      h3 { 
        margin-left: 20px;
      }
    }

    .name {
      top: 80px;
      left: 520px;
      transform: rotate(-10deg);

      h2 {
        font-size: 30px;
        left: 0px;

        .first {
          padding: 0px 0px 0px 30px;
        }
      }
    }

    .line {
      width: 5px;
      height: 85vh;
      left: 550px;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 70px 500px;
      padding: 5px 20px;
    }

   .parallax {
      div#bg-3-1 {
        background: url("../assets/d-malha.png");
        width: 1503px;
        height: 852px;
        transform: rotate(-25deg);
        left: 600px;
        margin-top: -50px;
      }
    }
  }
}
</style>
