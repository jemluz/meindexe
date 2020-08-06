<template lang="pug">
  proj-template(
    nomeProj="Projeto Exchange" 
    date="mar/2018" 
    firstName="exchan" 
    lastName="ge" 
    class="exchange" 
    :ios="300" 
    :and="150")

    template(v-slot:haveMore) 
      router-link(to="/aurora-i") 
        fa-icon.timeline-prev(style="margin-left: 20px;" class="back-icon" icon="minus")

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500")
        img#contentmob-start(src="../assets/exchange-thumb.png")

        p.desc redesign de um #[a(href='https://play.google.com/store/apps/details?id=com.easy.currency.extra.androary' target="_blank") aplicativo android], em um conceito alternativo às guidelines mobile.

        p.desc-2 o estudo incluiu 3 fases:

        p.desc-3 1ª - Análise da Interface #[br] #[a(href='https://drive.google.com/file/d/1rZ0-EFQgJ7wZJXN8uN3ACPPT4w1UQnPj/view?usp=sharing' target="_blank") https://drive.google.com]
        p.desc-4 2ª - Pré Desenvolvimento #[br] #[a(href='https://drive.google.com/file/d/1g48E-fdBdhNX8AUznf5p7R2y1Q0vK2ix/view?usp=sharing' target="_blank") https://drive.google.com]
        p.desc-5 3ª - Relatório de Testes #[br] #[a(href='https://drive.google.com/file/d/1Fzz_Hs1eEAuH7bZRACkS_rgGh_6Y1nBG/view?usp=sharing' target="_blank") https://drive.google.com]

        div.result
          p apresentação final
          a(href="https://drive.google.com/file/d/1UxCGUh5IQhRdTlvYxPIRPzo1s4VeYOSy/view?usp=sharing") hhttps://drive.google.com


        p.video video mockup #[br] #[a(href='https://youtu.be/zR2lhP5rLbE' target="_blank") https://youtu.be/zR2lhP5rLbE]

        p.video demo da interface #[br] #[a(href='https://youtu.be/zqRHtRby9Xo' target="_blank") https://youtu.be/zqRHtRby9Xo]

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          img#contentdesk-start(src="../assets/exchange-thumb.png")
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

          p.video demo da interface #[br] #[a(href='https://youtu.be/zqRHtRby9Xo' target="_blank") https://youtu.be/zqRHtRby9Xo]


</template>

<script>
export default {
  name: "PageAuroraII",
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.exchange {
  .name {
    h2 {
      .first {
        background-color: #659DE7;
      }

      .second {
        color: #659DE7;
      }
    }
  }

  .content-mob {
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
      p { color: #fff; }

      border-radius: 5px;
      box-shadow: 0px 0px 20px 0px #00000020;

      a {
        border-bottom: 1px solid #fff;
        color: #fff;
        font-weight: 700;
        opacity: .5;
      }
    }

    .video a {
      color: $roxo;
      border-bottom: 1px solid $roxo;
    }
  }

  .content-desk {
    width: 99vw;

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
}

// mobile only
@media only screen and (min-width: 901px) {
  .exchange {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .exchange {
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

        p { margin-bottom: 5px; }
      }

      .video {
        margin-top: 20px;
      }
      
    }

    .content-desk { display: none; }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
 .exchange {
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
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  .exchange {
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
  }
}
</style>
