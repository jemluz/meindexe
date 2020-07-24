<template lang="pug">
  div#sobre
    vue-headful(
      title="mindexe | Sobre"    )

    //- nao pode tirar
    div.data#data(data-aos="fade-down" data-aos-duration="1000")
      //- img(src="../assets/proj-bg/dot.svg")
      //- h3 abr/2018 #[router-link(to="/aurora-ii") #[fa-icon.timeline-next(style="margin-left: 20px;" icon="plus")]]

    div.name#name
      h2 #[span.first nosso ti]#[span.second me_]

    div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
      p#contentmob-start O bubbox foi outro projetinho da facul, um protótipo de aplicativo para streamming de música feito com a #[a#analu-link(@click="") @analuiza] e o #[a#alexandre-link(@click="") @alexandre]. Similar ao Group Session que vemos no Spotify.
      img(src="../assets/bubbox/iniciais.png")

      p Eu participei da construção e implementação da interface do bubbox, meu maior aprendizado aqui foi com as guidelines do material e na utilização do react para desenvolvimento. 
      
      img(src="../assets/bubbox/finais.png")
      
      p Atualmente não uso mais react, pois me envolvi e me apaixonei pelo Vue. 
      p O amor é assim, chega de surpresa. Você também deveria dar uma chance para o #[a.vue-link(href="https://br.vuejs.org/index.html") Vue.js.]
      

      div.result
        p apresentação final
        a(href="https://youtu.be/itqZ99T2lDc") youtu.be/itqZ99T2lDc

      p
      

    div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
      div.col-1#col-1
        agile#contentdesk-start(ref="carousel" fade="true" navButtons="false" autoplay="true")
          div.slide.membro
            div
              img.photo(src="../assets/sobre/jeyse.png")

            div.nome-funcao
              h4 Jeyse Muler
              p Full Stack Developer

          div.slide.membro
            div
              img.photo(src="../assets/sobre/jemima.png")

            div.nome-funcao
              h4 Jemima Luz
              p Coordenadora de Projetos

          div.slide.membro
            div
              img.photo(src="../assets/sobre/jemine.png")

            div.nome-funcao 
              h4 Jemine Carvalho
              p Gerente de vendas

          div.slide.membro
            div
              img.photo(src="../assets/sobre/juliana.png")

            div.nome-funcao 
              h4 Juliana Ximenes
              p Designer UI

        div.slide-btn
          button.btn-prev-photo(@click="$refs.carousel.goToNext()") #[fa-icon(class="photo-icon" icon="arrow-left")]
          button.btn-next-photo(@click="$refs.carousel.goToPrev()" style="color: ;border-color: ;") #[fa-icon(class="photo-icon" icon="arrow-right")]
        
        p.normal.p-1 O tempo passou, a família o time cresceu, e ta todo mundo se perguntando qual será o próximo projeto do portifólio mais vigiado do Brasil.
        p.normal confira os candidatos atuais:

        nav.projs-navgation.normal
          div.row-1
            router-link(to='/gt' style="color: #39DF81;border-color: #39DF81;") g
            router-link(to='/produtividade') p
            router-link.empty(to='') v

      div.col-2#col-2
        div.name-2#name-2.name-2
          h2 #[span.first nosso ro]#[span.second lê_]  

        p Organização, estudo e teste aqui são lei. E a graça de cada projeto está em:
        p.no-margin 1. Curtir a nostalgia dos esboços.
        p.no-margin 2. Admirar a complexidade dos processos.
        p.no-margin 3. Encontrar-se no fim de tudo.

        p.poema "Lápis duro em papel mole, #[br]escreveu tanto e não aguentou. #[br]Se viu perdido em muitas ideias, #[br] que a tal folha quase rasgou.
        p.poema Praquê isso, minha filha? #[br]Deixe de ser louca, #[br]junte toda essa bagunça, #[br]coloque em um site #[br]e chame isso portfólio. (??)"
        p.poema.autor - Autor desconhecido
        


    div.line#line(data-aos="slide-down" data-aos-duration="2000" )

    router-link.back-btn#back-btn(to='/' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom") #[fa-icon(class="back-icon" icon="arrow-left")] Voltar p/ o início (i)

    div.parallax(data-aos="fade-down" data-aos-duration="500" )
      div(id="parallax-bg-3" class="parallax-bg")
        div(id="bg-3-1")

</template>

<script>
export default {
  name: "ProjBubbox",
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

      col1.style.marginLeft = 35 + "px";
    },
    mobContentStart(){
      // nao funfa?
      let lineHeight = document.getElementById("line").offsetHeight;
      let contentMob = document.getElementById("content-mob");

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;
      let auroraI = document.getElementById("contentmob-start");

      contentMob.style.marginTop = 140 + "px";
      contentMob.style.height = (lineHeight - 140)+"px";
      
      if (this.getMobileOperatingSystem() == 'iOS') {
        // ios
        auroraI.style.marginTop = (contentMob.offsetTop - dataTop - dataheight + 1000) + "px";
      } else if (this.getMobileOperatingSystem() == 'Android') {
        // android
        auroraI.style.marginTop = (contentMob.offsetTop  + 900) + "px";
      }

      // console.log(auroraStart.style.marginTop)
    },
    deskContentStart() {
      let contentDesk = document.getElementById("content-desk");
      let lineHeight = document.getElementById("line").offsetHeight;

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;

      let colIStart = document.getElementById("contentdesk-start");
      contentDesk.style.marginTop = 100 + "px";
      contentDesk.style.height = (lineHeight - 100)+"px";
      
      // colIStart.style.marginTop = + "px";      
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

#sobre {
  background: linear-gradient(to bottom right, #eee, #fff);
  background-attachment: fixed;

  color: $branco;
  text-align: center;

  .name {
    position: fixed;
    z-index: 3;

    h2 {
      font-family: 'Khula', sans-serif;
      font-weight: 400;

      .first {
        background-color: #8552B3;
        box-shadow: 0px 0px 20px 0px #00000020;
      }

      .second {
        background-color: transparent;
        color: #8552B3;
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

    .vue-link {
      color: #4fc08d;
    }

    .result {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      background-color: $roxo;
      p { color: #fff;}

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
    overflow-y: scroll;
    
    z-index: 2;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    position: fixed;

    .name-2 {
      // position: fixed;
      z-index: 3;

      h2 {
        font-family: 'Khula', sans-serif;
        font-weight: 400;

        .first {
          background-color: #8552B3;
          box-shadow: 0px 0px 20px 0px #00000020;
        }

        .second {
          background-color: transparent;
          color: #8552B3;
        }
      }
    }

    .agile__actions {
      display: none;
    }

    .slide-btn {
      display: flex;
      justify-content: space-between;
      button {
        border-radius: 50%;
        background-color: $branco;
        color: $roxo;
        padding: 8px;
        font-size: 10px;
        box-shadow: 0px 0px 20px 0px #00000020;
      }
    }

    .membro {
      display: flex;

      .photo {
        border: 3px solid #fff;
        border-radius: 50%;
        background-size: contain;
      }

      .nome-funcao {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p { margin: 0px; }
      }

      h4 { 
        font-family: t26-carbon, monospace;
        color: $roxo; 
      }
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

    .projs-navgation {
      font-family: t26-carbon, monospace;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;

      z-index: 5;

      a {
        border: 2px solid $roxo;
        border-radius: 10px;
        color: $roxo;
        z-index: 10;

        transition: all 0.5s ease;
        opacity: .5;

        &:hover,
        &:focus {
          opacity: 1;
        }
      }

      div {
        display: flex;
        justify-self: center;

        .empty {
          opacity: .2;
        }
      }
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
  #sobre {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #sobre {
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
      width: 89vw;
      margin-left: 40px;
      padding: 0px 70px 0px 50px;

      img { 
        margin-top: 20px;
        max-width: 200px;
      }

      p {
        max-width: 200px;
        margin-top: 20px;
        margin-left: 5px;
      }

      .result {
        margin: 40px 0px 0px -40px;
        padding: 15px 40px;

        p { margin: 0px 0px 5px 0px;}
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
 #sobre {
    .name {
      top: 30px;
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
      margin-top: 100px;
      padding: 20px 20px 0px 40px;
      // width: 99vw;

      div {
        text-align: left;

        p {
          min-width: 200px;
          max-width: 18vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong { color: $roxo;}
        }
      }

      .no-margin {
        margin: 0px;
      }

      .normal {
        margin-left: 100px;
      }

      .col-1 {
        max-width: 30vw;

        .slide-btn {
          max-width: 140px;
          transform: rotate(90deg);
          margin-top: -85px;
          margin-left: -10px;
          margin-bottom: 90px;
        }

        .p-1 {
          margin-top: -30px;
        }

        p {
          min-width: 250px;
          font-size: 1rem;
          strong { color: $roxo;}
        }

        .projs-navgation {
          div {
            margin: 0px auto;
          }

          a {
            padding: 5px 10px;
            margin: 0px 5px 20px 5px;
            font-size: 20px;
          }
        }
      }

      .col-2 {
        margin-left: 100px;
        width: 61vw;

        .name-2 {
          margin: -30px 0px 90px -50px;
          transform: rotate(-10deg);

          h2 {
            font-size: 30px;
            left: 0px;

            .first {
              padding: 0px 0px 0px 30px;
            }
          }
        }

        .poema {
          // font-weight: bold;
          color: $roxo;
        }

        p {
          // padding-left: 60px;
          min-width: 350px;
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
  #sobre {
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

        img { max-width: 10vw; }

        p {
          max-width: 10vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong { color: $roxo;}
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
