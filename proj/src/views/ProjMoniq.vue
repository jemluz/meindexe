<template lang="pug">
  div#moniq
    vue-headful(
      title="mindexe | Projeto Aurora")

    div.data#data(data-aos="fade-down" data-aos-duration="1000")
      img(src="../assets/proj-bg/dot.svg")
      h3 dez/2017 #[router-link(to="/aurora-ii") #[fa-icon.timeline-next(style="margin-left: 20px;" icon="plus")]]

    div.name#name
      h2 #[span.first monique]#[span.second luz_]

    div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
      img#contentmob-start(src="../assets/moniq/rascunhos.png")
      img(src="../assets/moniq/mockup.png")
      img(src="../assets/moniq/social.png")

      p Apesar de não ser minha praia, vez ou outra eu arrisco um branding. Essa aqui é a marca de Monique Luz, uma professora particular.

      div.result
        p apresentação final
        a(href="https://drive.google.com/file/d/1ALkr59dzaCvKUT64-nQJT1cGq9HnhUaW/view?usp=sharing") https://drive.google.com
      
      p

    div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
      div.col-1#col-1
        div#contentdesk-col1-start
          img#contentmob-start(src="../assets/moniq/rascunhos.png")
          img(src="../assets/moniq/mockup.png")
          img(src="../assets/moniq/social.png")

        p Apesar de não ser minha praia, vez ou outra eu arrisco um branding. Essa aqui é a marca de Monique Luz, uma professora particular.

        div.result
          p apresentação final
          a(href="https://drive.google.com/file/d/1ALkr59dzaCvKUT64-nQJT1cGq9HnhUaW/view?usp=sharing") https://drive.google.com
        
            

    div.line#line(data-aos="slide-down" data-aos-duration="2000" )

    router-link.back-btn#back-btn(to='/' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom") #[fa-icon(class="back-icon" icon="arrow-left")] Voltar p/ o início (i)

    div.parallax(data-aos="fade-down" data-aos-duration="500" )
      div(id="parallax-bg-3" class="parallax-bg")
        div(id="bg-3-1")

</template>

<script>
export default {
  name: "ProjAuroraI",
  components: {},
  methods: {
    getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (
        userAgent.match(/iPad/i) ||
        userAgent.match(/iPhone/i) ||
        userAgent.match(/iPod/i)
      ) {
        return "iOS";
      } else if (userAgent.match(/Android/i)) {
        return "Android";
      } else {
        return "unknown";
      }
    },
    lineHeight() {
      let backButtonTop = document.getElementById("back-btn").offsetTop;
      let line = document.getElementById("line");

      line.style.height = backButtonTop - 30 + "px";
    },
    linePosition() {
      let line = document.getElementById("line");
      let col1 = document.getElementById("col-1");

      col1.style.marginLeft = line.offsetLeft + line.offsetWidth + "px";
    },
    mobContentStart() {
      // nao funfa?
      let lineHeight = document.getElementById("line").offsetHeight;
      let contentMob = document.getElementById("content-mob");

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;
      let moniq = document.getElementById("contentmob-start");

      contentMob.style.marginTop = 140 + "px";
      contentMob.style.height = lineHeight - 140 + "px";

      if (this.getMobileOperatingSystem() == "iOS") {
        // ios
        moniq.style.marginTop =
          contentMob.offsetTop - dataTop - dataheight + 100 + "px";
      } else if (this.getMobileOperatingSystem() == "Android") {
        // android
        moniq.style.marginTop = contentMob.offsetTop + 100 + "px";
      }

      // console.log(auroraStart.style.marginTop)
    },
    deskContentStart() {
      let contentDesk = document.getElementById("content-desk");
      let lineHeight = document.getElementById("line").offsetHeight;

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;

      let colIStart = document.getElementById("contentdesk-col1-start");
      contentDesk.style.marginTop = 140 + "px";
      contentDesk.style.height = lineHeight - 140 + "px";

      colIStart.style.marginTop = (dataTop )+ "px";
    },
    listenKeyboard() {
      let code = event.keyCode ? event.keyCode : event.which;

      // 1 - ipress i: back to home
      if (code == 73) {
        this.$router.push({ path: "/" });
      }
    }
  },
  updated() {
    this.mobContentStart();
  },
  mounted() {
    this.lineHeight();
    this.mobContentStart();

    this.linePosition();
    this.deskContentStart();
  },
  created() {
    document.addEventListener("keyup", this.listenKeyboard);
  }
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

#moniq {
  background: linear-gradient(to bottom right, #eee, #fff);
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

    .timeline-next {
      color: $roxo;
    }
  }

  .name {
    position: fixed;
    z-index: 3;

    h2 {
      font-family: "Khula", sans-serif;
      font-weight: 400;

      .first {
        color: $roxo;
        background-color: #FDD863;
        box-shadow: 0px 0px 20px 0px #00000020;
      }

      .second {
        background-color: transparent;
        color: #FDD863;
      }
    }
  }

  .content-mob {
    overflow-y: scroll;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;

    img {
      box-shadow: 0px 0px 20px 0px #00000030;
      border: 2px solid #fff;
    }

    p {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      color: #555;

      a {
        font-weight: 700;
      }
    }

    .result {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      background-color: $roxo;
      p { color: #fff; margin: 0px;}

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

  .content-desk {
    // direction: rtl;
    overflow-y: scroll;

    z-index: 2;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;

    img {
      box-shadow: 0px 0px 20px 0px #00000030;
      border: 2px solid #fff;
    }

    p {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      color: #555;

      a {
        font-weight: 700;
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
    background: url("../assets/proj-bg/line.svg");
    opacity: 0.9;
  }

  .back-btn {
    font-family: t26-carbon, monospace;
    font-weight: 700;
    z-index: 3;

    box-shadow: 0px 0px 10px 5px #47286520;
    border: 2px solid $roxo;
    border-radius: 5px 10px 10px 5px;

    transition: all 0.5s ease;

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
    height: calc(100vh);

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
      opacity: 1;
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {
  #moniq {
    .content-mob {
      display: none;
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #moniq {
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
      padding: 0px 70px 0px 50px;

      img {
        width: 250px;
        margin-top: 20px;
      }

      p {
        margin-top: 20px;
        margin-left: 5px;
      }

      .result {
        margin: 40px 0px 0px -40px;
        padding: 15px 40px;

        p { margin-bottom: 5px;}
      }
    }

    .content-desk {
      display: none;
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
        background: url("../assets/proj-bg/malha.png");
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
  #moniq {
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

    .content-desk {
      margin-top: 160px;
      padding: 0px 20px 0px 40px;
      width: 99vw;

      div {
        text-align: left;

        div {
          img {
            max-width: 20vw;
            margin-right:20px;
          }
        }

        p {
          max-width: 40vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong {
            color: $roxo;
          }
        }

        .result{
          margin-top: 40px;
          border-radius: 10px;
          padding: 15px 40px;
          max-width: 300px;

          p { 
            color: #fff;
            font-size: 1.1rem;
            margin: 0px 0px 5px 0px;
          }

          a { 
            font-size: .9rem;
            font-weight: 300;
          }
        }
      }

    }

    .line {
      width: 5px;
      height: 85vh;
      left: 133px;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 50px 100px;
      padding: 5px 20px;

      .back-icon {
        height: 15px;
        margin-right: 10px;
      }
    }

    .parallax {
      div#bg-3-1 {
        background: url("../assets/proj-bg/d-malha.png");
        width: 1503px;
        height: 852px;
        transform: rotate(-20deg);
        left: 100px;
        margin-top: -50px;
        opacity: 0.5;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  #moniq {
    .data {
      top: 30px;
      left: 789px;
      h3 {
        margin-left: 20px;
      }
    }

    .name {
      top: 80px;
      left: 760px;
      transform: rotate(-10deg);

      h2 {
        font-size: 30px;
        left: 0px;

        .first {
          padding: 0px 0px 0px 30px;
        }
      }
    }

    .content-desk {
      margin-top: 160px;
      padding: 0px 20px 0px 40px;

      div {
        text-align: left;

        img {
          max-width: 10vw;
        }

        p {
          max-width: 10vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong {
            color: $roxo;
          }
        }
      }

      .col-2,
      .col-3 {
        margin-left: 80px;
      }

      .col-3 img {
        box-shadow: none;
      }
    }

    .line {
      width: 5px;
      height: 85vh;
      left: 31vw;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 70px 30vw;
      padding: 5px 20px;

      .back-icon {
        height: 15px;
        margin-right: 10px;
      }
    }

    .parallax {
      div#bg-3-1 {
        background: url("../assets/proj-bg/d-malha.png");
        width: 1503px;
        height: 852px;
        transform: rotate(-25deg);
        scale: 3;
        left: 700px;
        margin-top: -50px;
      }
    }
  }
}
</style>
