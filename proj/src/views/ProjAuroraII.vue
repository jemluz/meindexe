<template lang="pug">
  div#aurora
    vue-headful(
      title="mindexe | Projeto Aurora"
    )

    div.data#data(data-aos="fade-down" data-aos-duration="1000")
      img(src="../assets/proj-bg/dot.svg")
      h3 ago/2017 #[router-link(to="/aurora-i") #[fa-icon.timeline-prev(style="margin-left: 20px;" class="back-icon" icon="minus")]]

    div.name#name
      h2 #[span.first auro]#[span.second ra_]

    div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500")
      p.desc-13#contentmob-start Apesar de ter concluído o semestre 2017.1 com a sensação de um trabalho bem feito, eu ainda sentia que sabia pouco, e que precisaria de tempo para me aprofundar na área de programação.  
      p.desc-14  Então eu tranquei a faculdade e decidi renovar o visual do site, me aprofundar no processo de criação, em planejamento e novas tecnologias. 
      p.desc-15 Meu objetivo era que ao fim daquele semestre eu tivesse meu primeiro site no ar, feito por mim de ponta a ponta.

      img#img-4(src="../assets/aurora/dr_ai.png")
      p.desc-16 Diagrama de Relação #[br] #[a(href='https://cutt.ly/oaWqG4g' target="_blank") https://cutt.ly/oaWqG4g]
      p.desc-17 Arquitetura da Informação #[br] #[a(href='https://cutt.ly/iaWqTFZ' target="_blank") https://cutt.ly/iaWqTFZ]
      
      img#img-5(src="../assets/aurora/layout2.png")
      p.desc-18 Amostra do site 2.0 #[br] #[a(href='https://cutt.ly/9aWqMV7' target="_blank") https://cutt.ly/9aWqMV7]

      p.desc-19 Nesse período eu também aprendi muito sobre gerenciamento de tempo, rotina e produtividade. 
      
      p.desc-20 Atualmente o aurora está sendo migrado para a tecnologia #[a.vue-link(href='https://br.vuejs.org/' target="_blank") Vue.js]. Aguardem notícias pois ele resurgirá em breve!

      //- p.desc-1 Já que não tinha mais nenhum compromisso que me obrigasse a cumprir horários.
      //- p.desc-1 Esse conhecimento me rendeu muitos frutos, ministrei oficinas e apliquei em metodologias no ano seguinte em que fui parte da diretoria da Empresa Júnior do meu curso. Virou projeto de aplicativo e em breve vai ter uma pagina dele aqui também! 

      p.desc-1.btn-back #[router-link(to="/aurora-i") #[fa-icon.timeline-prev(icon="minus")] Ver menos]

    div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
      div.col-1#col-1
      div.col-1#col-2
      div.col-1#col-3

    div.line#line(data-aos="slide-down" data-aos-duration="2000" )

    router-link.back-btn#back-btn(to='/' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom") #[fa-icon(class="back-icon" icon="arrow-left")] Voltar para o início (i)

    div.parallax(data-aos="fade-down" data-aos-duration="500" )
      div(id="parallax-bg-3" class="parallax-bg")
        div(id="bg-3-1")

</template>

<script>
export default {
  name: "ProjAuroraII",
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
      // nao funfa?
      let lineHeight = document.getElementById("line").offsetHeight;
      let contentMob = document.getElementById("content-mob");

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;
      let auroraII = document.getElementById("contentmob-start");

      contentMob.style.marginTop = 140 + "px";
      contentMob.style.height = (lineHeight - 140)+"px";
      
      if (this.getMobileOperatingSystem() == 'iOS') {
        // ios
        auroraII.style.marginTop = (contentMob.offsetTop - dataTop - dataheight + 1000) + "px";
      } else if (this.getMobileOperatingSystem() == 'Android') {
        // android
        auroraII.style.marginTop = (contentMob.offsetTop  + 1000) + "px";
      }

      // console.log(auroraStart.style.marginTop)
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

#aurora {
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

    .timeline-prev {
      color: $roxo;
    }
  }

  .name {
    position: fixed;
    z-index: 3;

    h2 {
      font-family: 'Khula', sans-serif;
      font-weight: 400;

      .first {
        background-color: #CF93B1;
        box-shadow: 0px 0px 20px 0px #00000020;
      }

      .second {
        background-color: transparent;
        color: #CF93B1;
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

    .desc a { border-bottom: 1px solid $roxo; }

    .desc-16 a,
    .desc-17 a { 
      color: #298DBF; 
      border-bottom: 1px solid #298DBF;
    }

    .desc-18 a { 
      color: #333; 
      border-bottom: 1px solid #333;
    }

    .vue-link {
      color: #4fc08d;
    
    }

    .timeline-prev {
      color: $roxo;
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
  #aurora {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #aurora {
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

      #img-4,
      #img-5 {
        margin-top: 20px;
      }

      p {
        margin-top: 20px;
        margin-left: 5px;
      }

      #img-5,
      .desc-9 {
        margin-top: 60px;
      }
      
      .btn-back {
        margin-bottom: 20px;
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
 #aurora {
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
  #aurora {
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
