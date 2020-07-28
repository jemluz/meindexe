<template lang="pug">
  proj-template(nomeProj="Projeto Aurora" date="ago/2017" firstName="auro" lastName="ra" titleColor="" class="aurora-ii")
    template(v-slot:haveMore) 
      router-link(to="/aurora-i") 
        fa-icon.timeline-prev(style="margin-left: 20px;" class="back-icon" icon="minus")

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500")
        p.desc-13#contentmob-start Apesar de ter concluído o semestre 2017.1 com a sensação de um trabalho bem feito, eu ainda sentia que sabia pouco, e que precisaria de tempo para me aprofundar na área de programação.  
        p.desc-14  Então eu tranquei a faculdade e decidi renovar o visual do site, me aprofundar no processo de criação, em planejamento e novas tecnologias. 
        p.desc-15 Meu objetivo era que ao fim daquele semestre eu tivesse meu primeiro site no ar, feito por mim de ponta a ponta.

        img#img-4(src="../assets/aurora/dr_ai.png")
        p.desc-16 Diagrama de Relação #[br] #[a(href='https://drive.google.com/file/d/125BL2tePQQ-aWAnJrWotPrxmFSUxVJa8/view?usp=sharing' target="_blank") https://drive.google.com]
        p.desc-17 Arquitetura da Informação #[br] #[a(href='https://drive.google.com/file/d/1StEG0OSgiQ7OuuKMAcog_SljEPeXy4hL/view?usp=sharing' target="_blank") https://drive.google.com]
        
        img#img-5(src="../assets/aurora/layout2.png")
        p.desc-18 Amostra do site 2.0 #[br] #[a(href='https://youtu.be/eW5_OWG8vN8' target="_blank") https://youtu.be/eW5_OWG8vN8]

        p.desc-19 Nesse período eu também aprendi muito sobre gerenciamento de tempo, rotina e produtividade. 
        
        p.desc-20 Atualmente o aurora está sendo migrado para a tecnologia #[a.vue-link(href='https://br.vuejs.org/' target="_blank") Vue.js]. Aguardem notícias pois ele resurgirá em breve!

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          section
            img.img-dr#contentdesk-col1-start(src="../assets/aurora/dr_ai.svg")

            div 
              p.desc-13 Apesar de ter concluído o semestre 2017.1 com a sensação de um trabalho bem feito, eu ainda sentia que sabia pouco, e que precisaria de tempo para me aprofundar na área de programação.  
              p.desc-14  Então eu tranquei a faculdade e decidi renovar o visual do site, me aprofundar no processo de criação, em planejamento e novas tecnologias. 
              p.desc-15 Meu objetivo era que ao fim daquele semestre eu tivesse meu primeiro site no ar, feito por mim de ponta a ponta.
              p.desc-16 Diagrama de Relação #[br] #[a(href='https://drive.google.com/file/d/125BL2tePQQ-aWAnJrWotPrxmFSUxVJa8/view?usp=sharing' target="_blank") https://drive.google.com]
              p.desc-17 Arquitetura da Informação #[br] #[a(href='https://drive.google.com/file/d/1StEG0OSgiQ7OuuKMAcog_SljEPeXy4hL/view?usp=sharing' target="_blank") https://drive.google.com]
        

          section.sec-bottom
            div
              p.desc-18 Amostra do site 2.0 #[br] #[a(href='https://youtu.be/eW5_OWG8vN8' target="_blank") https://youtu.be/eW5_OWG8vN8]
              p.desc-19 Nesse período eu também aprendi muito sobre gerenciamento de tempo, rotina e produtividade. 
          
              p.desc-20 Atualmente o aurora está sendo migrado para a tecnologia #[a.vue-link(href='https://br.vuejs.org/' target="_blank") Vue.js]. Aguardem notícias pois ele resurgirá em breve!


              p.desc-1.btn-back #[router-link(to="/aurora-i") #[fa-icon.timeline-prev(icon="minus")] Ver menos]

            img#img-5(src="../assets/aurora/layout2.png")

</template>

<script>
export default {
  name: "PageAuroraII"
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.aurora-ii {
  .name {
    h2 {
      .first {
        background-color: #CF93B1;
      }

      .second {
        color: #CF93B1;
      }
    }
  }

  .content-mob {
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
  }

  .content-desk {
    width: 99vw;

    img {
      box-shadow: 0px 0px 10px 0px #00000030;
    }

    .img-dr {
      box-shadow: none;
    }

    .col-1 {
      display: flex;
      flex-direction: column;

      #img-5 { 
        box-shadow: none;
      }

      section {
        display: flex;
        flex-direction: row;
      }

    }

    .desc-16 a,
    .desc-17 a { 
      color: #298DBF; 
      border-bottom: 1px solid #298DBF;
    }

    .desc-18 a { 
      color: #CF93B1; 
      border-bottom: 1px solid #CF93B1;
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {
  .aurora-ii {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .aurora-ii {
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
 .aurora-ii {
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
        #img-5 {
          width: 20vw;
        }

        section {
          text-align: left;

          div { 
            margin-left: 50px;
            max-width: 200px;


            p {
              margin-top: 20px;
            }

            .desc {
              max-width: 30vw;
              font-size: 1.1rem;
              margin-top: 20px;
              a { color: $roxo; }
            }
          }
        }

        .sec-bottom {
          text-align: right;

          margin: 50px 0px 0px 50px;
          
          img { margin-left: 50px;}
          div { margin-top: 50px; }
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
  .aurora-ii {
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
