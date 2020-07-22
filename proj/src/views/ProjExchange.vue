<template lang="pug">
  div#exchange
    vue-headful(
      title="mindexe | Projeto Exchange"
    )

    div.data#data(data-aos="fade-down" data-aos-duration="1000")
      img(src="../assets/proj-bg/dot.svg")
      h3 mar/2018

    div.name#name
      h2 #[span.first exchan]#[span.second ge_]

    div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500")
      img#exchange-img(src="../assets/exchange-thumb.png")

      p.desc redesign de um #[a(href='https://play.google.com/store/apps/details?id=com.easy.currency.extra.androary' target="_blank") aplicativo android], em um conceito alternativo às guidelines mobile.

      p.desc-2 o estudo incluiu 3 fases:

      p.desc-3 1ª - Análise da Interface #[br] #[a(href='https://drive.google.com/file/d/1rZ0-EFQgJ7wZJXN8uN3ACPPT4w1UQnPj/view?usp=sharing' target="_blank") https://drive.google.com]
      p.desc-4 2ª - Pré Desenvolvimento #[br] #[a(href='https://drive.google.com/file/d/1g48E-fdBdhNX8AUznf5p7R2y1Q0vK2ix/view?usp=sharing' target="_blank") https://drive.google.com]
      p.desc-5 3ª - Relatório de Testes #[br] #[a(href='https://drive.google.com/file/d/1Fzz_Hs1eEAuH7bZRACkS_rgGh_6Y1nBG/view?usp=sharing' target="_blank") https://drive.google.com]

      div.result
        p apresentação final
        a(href="https://drive.google.com/file/d/1UxCGUh5IQhRdTlvYxPIRPzo1s4VeYOSy/view?usp=sharing") hhttps://drive.google.com


      p.video video mockup #[br] #[a(href='https://youtu.be/zR2lhP5rLbE' target="_blank") https://youtu.be/zR2lhP5rLbE]

      p.video video mockup II #[br] #[a(href='https://youtu.be/zqRHtRby9Xo' target="_blank") https://youtu.be/zqRHtRby9Xo]

    div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
      div.col-1#col-1
        img#exchange-img(src="../assets/exchange-thumb.png")
        p.desc#desc redesign de um #[a(href='https://play.google.com/store/apps/details?id=com.easy.currency.extra.androary' target="_blank") aplicativo android], em um conceito alternativo às guidelines mobile.

      div.col-2
        p.desc-2 o estudo incluiu 3 fases:

        p.desc-3 1ª - Análise da Interface #[br] #[a(href='https://drive.google.com/file/d/1rZ0-EFQgJ7wZJXN8uN3ACPPT4w1UQnPj/view?usp=sharing' target="_blank") https://drive.google.com]
        p.desc-4 2ª - Pré Desenvolvimento #[br] #[a(href='https://drive.google.com/file/d/1g48E-fdBdhNX8AUznf5p7R2y1Q0vK2ix/view?usp=sharing' target="_blank") https://drive.google.com]
        p.desc-5 3ª - Relatório de Testes #[br] #[a(href='https://drive.google.com/file/d/1Fzz_Hs1eEAuH7bZRACkS_rgGh_6Y1nBG/view?usp=sharing' target="_blank") https://drive.google.com]

        div.result
          p apresentação final
          a(href="https://drive.google.com/file/d/1UxCGUh5IQhRdTlvYxPIRPzo1s4VeYOSy/view?usp=sharing") https://drive.google.com

        p.video video mockup #[br] #[a(href='https://youtu.be/zR2lhP5rLbE' target="_blank") https://youtu.be/zR2lhP5rLbE]

        p.video video mockup #[br] #[a(href='https://youtu.be/zqRHtRby9Xo' target="_blank") https://youtu.be/zqRHtRby9Xo]

    div.line#line(data-aos="slide-down" data-aos-duration="2000" )

    router-link.back-btn#back-btn(to='/' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom") #[fa-icon(class="back-icon" icon="arrow-left")] Voltar p/ o início (i)

    div.parallax(data-aos="fade-down" data-aos-duration="500" )
      div(id="parallax-bg-3" class="parallax-bg")
        div(id="bg-3-1")

</template>

<script>
export default {
  name: "ProjExchange",
  data: () => {
    return {}
  },
  components: {},
  methods: {
    getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
      {
        return 'iOS';

      }
      else if( userAgent.match( /Android/i ) )
      {

        return 'Android';
      }
      else
      {
        return 'unknown';
      }
    },
    lineHeight() {
      let backButtonTop = document.getElementById("back-btn").offsetTop;
      let line = document.getElementById("line");

      line.style.height = (backButtonTop - 30) + "px";
    },
    linePosition() {
      let line = document.getElementById("line");
      let col1 = document.getElementById("col-1");

      col1.style.marginLeft = (line.offsetLeft + line.offsetWidth) + "px";
    },
    mobContentStart(){
      let lineHeight = document.getElementById("line").offsetHeight;
      let contentMob = document.getElementById("content-mob");

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;
      let exchangeImage = document.getElementById("exchange-img");

      contentMob.style.marginTop = 140 + "px";
      contentMob.style.height = (lineHeight - 140)+"px";
      
      if (this.getMobileOperatingSystem() == 'iOS') {
        exchangeImage.style.marginTop = (contentMob.offsetTop - dataTop - dataheight + 200) + "px";
      } else if (this.getMobileOperatingSystem() == 'Android') {
        exchangeImage.style.marginTop = (contentMob.offsetTop + 60) + "px";
      }

      console.log(exchangeImage.style.marginTop)
    },
    deskContentStart() {
      let contentDesk = document.getElementById("content-desk");
      let lineHeight = document.getElementById("line").offsetHeight;

      contentDesk.style.height = (lineHeight - 160)+"px";
      console.log(lineHeight)
    },
    listenKeyboard() {
      let code = event.keyCode ? event.keyCode : event.which;

      // 1 - ipress i: back to home
      if (code == 73) {
        this.$router.push(({ path: '/'}) )
      }
    }
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

#exchange {
  background: linear-gradient(to bottom, #f1f1f1, #fff);
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

    overflow-y: scroll;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;

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

    .video a {
      color: $roxo;
      border-bottom: 1px solid $roxo;
    }
  }

  .content-desk {
    z-index: 2;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    position: fixed;

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

    .video a {
      color: $roxo;
      border-bottom: 1px solid $roxo;
    }
  }

  .line {
    position: fixed;
    background: url("../assets/proj-bg/line.svg");
    opacity: .9;
  }

  .back-btn {
    font-family: t26-carbon, monospace;
    font-weight: 700;
    z-index: 3;

    box-shadow: 0px 0px 10px 5px #47286520;
    border: 2px solid $roxo;
    border-radius: 5px 10px 10px 5px;

    transition: all .5s ease;

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
  #exchange {
    .content-mob { display: none; }
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
      padding: 0px 70px 0px 50px;
      
      img {
        width: 200px;
      }

      .desc {
        margin-top: 20px;
        a { color: $roxo; }
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
        margin: 40px 0px 0px -40px;
        padding: 15px 40px;

        p { margin-bottom: 5px;}
      }

      .video {
        margin-top: 20px;
      }
      
    }

    .content-desk { display: none; }

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

    .content-desk { 
      margin-top: 160px;
      padding: 0px 20px 0px 40px;

      .col-1 {
        text-align: left;

        img { max-width: 35vw; }

        .desc {
          max-width: 30vw;
          font-size: 1.1rem;
          margin-top: 20px;
          a { color: $roxo; }
        }
      }

      .col-2 {
        padding-top: 80px;
        margin-left: 80px;

        .desc-2 {
          font-weight: bold;
          // max-width: 200px;
          font-size: 1.3rem;
          margin-top: -60px;
        }

        .desc-3,
        .desc-4,
        .desc-5 {
          font-size: 1rem;
          margin-top: 20px;
        }
        .desc-3 { margin-top: 30px; }

        .result{
          margin-top: 60px;
          border-radius: 10px;
          padding: 15px 40px;

          p { 
            font-size: 1.1rem;
            margin-bottom: 5px;
          }

          a { 
            font-size: .9rem;
            font-weight: 300;
          }
        }

        .video {
          font-size: 1.1rem;
          margin: 20px 40px 0px 0px;

          a { font-size: 1rem;}
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
        opacity: .5;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  #exchange {
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
      margin-top: 250px;
      padding: 0px 20px 0px 40px;

      .col-1 {
        text-align: left;

        img { max-width: 19vw; }

        .desc {
          max-width: 19vw;
          font-size: 1.3rem;
          margin-top: 20px;
          a { color: $roxo; }
        }
      }

      .col-2 {
        padding-top: 80px;
        margin-left: 80px;

        .desc-2 {
          font-weight: bold;
          font-size: 1.3rem;
          margin-top: -60px;
        }

        .desc-3,
        .desc-4,
        .desc-5 {
          font-size: 1.1rem;
          margin-top: 20px;
        }
        .desc-3 { margin-top: 30px; }

        .result{
          margin-top: 60px;
          border-radius: 10px;
          padding: 20px 40px;

          p { 
            font-size: 1.2rem;
            margin-bottom: 5px;
          }

          a { 
            font-size: 1.1rem;
            font-weight: 300;
          }
        }

        .video {
          font-size: 1.2rem;
          margin: 20px 40px 0px 40px;

          a { font-size: 1.1rem;}
        }
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
