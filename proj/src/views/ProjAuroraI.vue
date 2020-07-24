<template lang="pug">
  div#auroraI
    vue-headful(
      title="mindexe | Projeto Aurora"    )

    div.data#data(data-aos="fade-down" data-aos-duration="1000")
      img(src="../assets/proj-bg/dot.svg")
      h3 jan/2017 #[router-link(to="/aurora-ii") #[fa-icon.timeline-next(style="margin-left: 20px;" icon="plus")]]

    div.name#name
      h2 #[span.first auro]#[span.second ra_]

    div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
      p.desc#contentmob-start Esse foi o projeto que me ensinou a pensar como uma programadora.  Ele surgiu de um trabalho da faculdade com a #[a#carmen-pop @carmenli#[div.popover-carmen #[a.carmen-linked(href="https://www.linkedin.com/in/carmenli-1308" target="_blank") LinkedIn]]], #[a#brunool-pop @brunool#[div.popover-brunool #[a.brunool-behance(href="https://www.behance.net/brunool" target="_blank") Behance]]], #[a#rosi-pop @rosilenemoufer #[div.popover-rosi #[a.rosi-lattes(href="http://lattes.cnpq.br/9252640618973149" target="_blank") Lattes]]] e #[a#emili-pop @emiliborges #[div.popover-emili #[a.emili-linked(href="https://www.linkedin.com/in/emili-borges-597a4b1b1" target="_blank") LinkedIn]]], e um dos requisitos do trabalho era ser feito em  processing ou stencyl. 

      img#img-1(src="../assets/aurora/prototipo1.png")

      p.desc-2 Eu fiquei responsável pela programação, e a idéia da minha equipe era um protótipo de app mobile, então o problema era:  
      p.desc-3 #[strong Como eu vou imitar uma aplicação mobile em uma linguagem que  foi projetada para desenhos? ]
      p.desc-4 A solução que encontrei foi criar um algorítimo de vídeo com suporte a interações simulando uma interface mobile.
      p.desc-5 Algorítimo rodando #[br] #[a(href='https://youtu.be/k_jvxk8Cl5Q' target="_blank") https://youtu.be/k_jvxk8Cl5Q]

      p.desc-2#contentdesk-col2-start Outra coisa que amei fazer foi os slide de apresentação da proposta do nosso trabalho. 
      p "O que é escrito sem esforço é lido sem prazer." descreve o oposto da que fiz nessa tarefa. 

      img#img-1(src="../assets/aurora/slide.png")

      p.desc-8 Apresentação #[br] #[a(href='https://drive.google.com/file/d/1LiZ1pu84gt4OEAFUsS_8-W3YB-D1fyKk/view?usp=sharing' target="_blank") https://drive.google.com]


      p.desc-6 Um desafio que encontrei nessa etapa foi ensinar ao time o algoritimo do código para avaliação em uma das disciplinas. 
      p.desc-7 Então criei um infográfico, sistematizando o código e usei ele pra ensinar. Deu tão certo que conseguimos a nota máxima na disciplina :D 
      img#img-2(src="../assets/aurora/info_codigo.png")
      p.desc-8 Infográfico #[br] #[a(href='https://drive.google.com/file/d/1-fu8XxQ3vioxTXFIHAdSAMVPitEetqbj/view?usp=sharing' target="_blank") https://drive.google.com]

      p.desc-9 Também criei o layout para o site do projeto.
      img#img-3(src="../assets/aurora/layout1.png")
      p.desc-10 como foi meu primeiro site, decidi fazer 100% na mão, antes de correr pra qualquer sistema de workflow, automação, e versionamento, como pré-processadores, git, gulp, npm, botstrap e tudo o mais.
      p.desc-11 Amostra do site 1.0 #[br] #[a(href='https://youtu.be/4t9KMo5fXAY' target="_blank") https://youtu.be/4t9KMo5fXAY]

      p.desc-12.btn-next #[router-link(to="/aurora-ii") #[fa-icon.timeline-next(icon="plus")] Ver mais]      

    div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
      div.col-1#col-1
        p.desc#contentdesk-col1-start Esse foi o projeto que me ensinou a pensar como uma programadora.  Ele surgiu de um trabalho da faculdade com a #[a#carmen-pop @carmenli#[div.popover-carmen #[a.carmen-linked(href="https://www.linkedin.com/in/carmenli-1308" target="_blank") LinkedIn]]], #[a#brunool-pop @brunool#[div.popover-brunool #[a.brunool-behance(href="https://www.behance.net/brunool" target="_blank") Behance]]], #[a#rosi-pop @rosilenemoufer #[div.popover-rosi #[a.rosi-lattes(href="http://lattes.cnpq.br/9252640618973149" target="_blank") Lattes]]] e #[a#emili-pop @emiliborges #[div.popover-emili #[a.emili-linked(href="https://www.linkedin.com/in/emili-borges-597a4b1b1" target="_blank") LinkedIn]]], e um dos requisitos do trabalho era ser feito em  processing ou stencyl. 

        img#img-1(src="../assets/aurora/prototipo1.png")

        p.desc-2 Eu fiquei responsável pela programação, e a idéia da minha equipe era um protótipo de app mobile, então o problema era:  
        p.desc-3 #[strong Como eu vou imitar uma aplicação mobile em uma linguagem que  foi projetada para desenhos? ]
        p.desc-4 A solução que encontrei foi criar um algorítimo de vídeo com suporte a interações simulando uma interface mobile.
        p.desc-5 Algorítimo rodando #[br] #[a(href='https://youtu.be/k_jvxk8Cl5Q' target="_blank") https://youtu.be/k_jvxk8Cl5Q]

      div.col-2#col-2
        p.desc#contentdesk-col2-start Outra coisa que amei fazer foi os slide de apresentação da proposta do nosso trabalho. 
        p.desc-2 "O que é escrito sem esforço é lido sem prazer." descreve o oposto da que fiz nessa tarefa. 

        img#img-1.img-slide(src="../assets/aurora/slide.png")

        p.desc-3 Apresentação #[br] #[a(href='https://drive.google.com/file/d/1LiZ1pu84gt4OEAFUsS_8-W3YB-D1fyKk/view?usp=sharing' target="_blank") https://drive.google.com]

        p.desc-4 Um desafio que encontrei nessa etapa foi ensinar ao time o algoritimo do código para avaliação em uma das disciplinas. 
        p.desc-5 Então criei um infográfico, sistematizando o código e usei ele pra ensinar. Deu tão certo que conseguimos a nota máxima na disciplina :D 
        img#img-2.img-info(src="../assets/aurora/info_codigo.png")
        p.desc-6 Infográfico #[br] #[a(href='https://drive.google.com/file/d/1-fu8XxQ3vioxTXFIHAdSAMVPitEetqbj/view?usp=sharing' target="_blank") https://drive.google.com]

      div.col-3#col-3
        p.desc#contentdesk-col3-start Também criei o layout para o site do projeto.
        img#img-3(src="../assets/aurora/layout1.png")
        p.desc-2 como foi meu primeiro site, decidi fazer 100% na mão, antes de correr pra qualquer sistema de workflow, automação, e versionamento, como pré-processadores, git, gulp, npm, botstrap e tudo o mais.
        p.desc-3 Amostra do site 1.0 #[br] #[a(href='https://youtu.be/4t9KMo5fXAY' target="_blank") https://youtu.be/4t9KMo5fXAY]

        p.desc-4.btn-next #[router-link(to="/aurora-ii") #[fa-icon.timeline-next(icon="plus")] Ver mais] 

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
      let auroraI = document.getElementById("contentmob-start");

      contentMob.style.marginTop = 140 + "px";
      contentMob.style.height = (lineHeight - 140)+"px";
      
      if (this.getMobileOperatingSystem() == 'iOS') {
        // ios
        auroraI.style.marginTop = (contentMob.offsetTop - dataTop - dataheight + 2100) + "px";
      } else if (this.getMobileOperatingSystem() == 'Android') {
        // android
        auroraI.style.marginTop = (contentMob.offsetTop  + 1900) + "px";
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
      contentDesk.style.height = (lineHeight - 140)+"px";
      
      colIStart.style.marginTop = dataTop  + "px";      
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

#auroraI {
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

    #img-1,
    #img-2 {
      box-shadow: 0px 0px 10px 0px #00000030;
      border: 2px solid #fff;
    }

    .popover-carmen,
    .popover-brunool, 
    .popover-rosi, 
    .popover-emili {
      position: absolute;
      opacity: 0;
      transition: all .5s ease;

      a { 
        color: #333; 
        &:hover { color: #fff; }
      }

      .alex-linked {
        margin-left: 10px;
      }

      background-color: #CF93B1;
      margin: 0px auto;
      padding: 5px 10px;
      border-radius: 10px;
    }

    #carmen-pop,
    #brunool-pop,
    #rosi-pop,
    #emili-pop {
      cursor: pointer;

      &:hover {
        transition: all .5s ease;
        color: #CF93B1;
      }
    }

    #carmen-pop:hover .popover-carmen,
    #brunool-pop:hover .popover-brunool,
    #rosi-pop:hover .popover-rosi,
    #emili-pop:hover .popover-emili {
      display: flex;
      position: absolute;

      opacity: 1;
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

    .desc a { border-bottom: 1px solid $roxo; }

    .desc-5 a { 
      color: #CF93B1; 
      border-bottom: 1px solid #CF93B1;
    }
    .desc-8 a { 
      color: #9F8CB3; 
      border-bottom: 1px solid #9F8CB3;
    }
    .desc-11 a { 
      color: #619AD1; 
      border-bottom: 1px solid #619AD1;
    }

    .btn-next a,
    .timeline-next {
      color: $roxo;
    }
  }

  .content-desk {
    // direction: rtl;
    overflow-y: scroll;
    
    z-index: 2;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    position: fixed;

    .popover-carmen,
    .popover-brunool, 
    .popover-rosi, 
    .popover-emili {
      position: absolute;
      opacity: 0;
      transition: all .5s ease;

      a { 
        color: #333; 
        &:hover { color: #fff; }
      }

      .alex-linked {
        margin-left: 10px;
      }

      background-color: #CF93B1;
      margin: 0px auto;
      padding: 5px 10px;
      border-radius: 10px;
    }

    #carmen-pop,
    #brunool-pop,
    #rosi-pop,
    #emili-pop {
      cursor: pointer;

      &:hover {
        transition: all .5s ease;
        color: #CF93B1;
      }
    }

    #carmen-pop:hover .popover-carmen,
    #brunool-pop:hover .popover-brunool,
    #rosi-pop:hover .popover-rosi,
    #emili-pop:hover .popover-emili {
      display: flex;
      position: absolute;

      opacity: 1;
    }

    img {
      box-shadow: 0px 0px 10px 0px #00000030;
    }

    .img-slide,
    .img-info {
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

    .col-1 {
      .desc-5 a { 
        color: #CF93B1; 
        border-bottom: 1px solid #CF93B1;
      }
    }

    .col-2 {
      .desc-3 a { 
        color: #619AD1; 
        border-bottom: 1px solid #619AD1;
      }
      .desc-6 a { 
        color: #619AD1; 
        border-bottom: 1px solid #619AD1;
      }
    }

    .col-3 {
      .desc-3 a { 
        color: #CF93B1; 
        border-bottom: 1px solid #CF93B1;
      }
    }
    
    .btn-next a,
    .timeline-next {
      color: $roxo;
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
  #auroraI {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #auroraI {
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

      .popover-carmen {
        margin: -45px 0px 0px 0px;
      }

      .popover-brunool {
        margin: -45px 0px 0px 150px;
      }

      .popover-rosi {
        margin: 0px 0px 0px 0px;
      }

      .popover-emili {
        margin: 0px 0px 0px 150px;
      }
      
      img {
        width: 200px;
      }

      #img-1,
      #img-2,
      #img-3 {
        margin-top: 20px;
      }

      #img-3 {
        box-shadow: none;
        border: none;
      }

      p {
        margin-top: 20px;
        margin-left: 5px;
      }

      .desc-3 {
        color: $roxo;
        strong {
          font-weight: 600;
        }
      }

      .desc-6,
      .desc-9 {
        margin-top: 60px;
      }

      .btn-next {
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
 #auroraI {
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

      .popover-carmen {
        margin: -45px 0px 0px 0px;
      }

      .popover-brunool {
        margin: -45px 0px 0px 150px;
      }

      .popover-emili {
        margin: 0px 0px 0px 150px;
      }

      div {
        text-align: left;

        img { max-width: 20vw; }

        p {
          max-width: 20vw;
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
  #auroraI {
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
