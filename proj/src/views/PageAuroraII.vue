<template lang="pug">
  proj-template(:nomeProj="lang.auroraII.metatitle" date="ago/2017" firstName="auro" lastName="ra" titleColor="" class="aurora-ii" :ios="1000" :and="800")
    template(v-slot:haveMore) 
      router-link(to="/aurora-i") 
        fa-icon.timeline-prev(style="margin-left: 20px;" class="back-icon" icon="minus")

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500")
        p.desc-13#contentmob-start {{ lang.auroraII.trancamento1 }}
        p.desc-14  {{ lang.auroraII.trancamento2 }}
        p.desc-15 {{ lang.auroraII.trancamento3 }}

        img#img-4(src="../assets/aurora/dr_ai.png")
        p.desc-16 {{ lang.auroraII.linkTitle1 }} #[br] #[a(href='https://drive.google.com/file/d/125BL2tePQQ-aWAnJrWotPrxmFSUxVJa8/view?usp=sharing' target="_blank") https://drive.google.com]
        p.desc-17 {{ lang.auroraII.linkTitle2 }} #[br] #[a(href='https://drive.google.com/file/d/1StEG0OSgiQ7OuuKMAcog_SljEPeXy4hL/view?usp=sharing' target="_blank") https://drive.google.com]
        
        img#img-5(src="../assets/aurora/layout2.png")
        p.desc-18 {{ lang.auroraII.linkTitle3 }} #[br] #[a(href='https://youtu.be/eW5_OWG8vN8' target="_blank") https://youtu.be/eW5_OWG8vN8]

        p.desc-19 {{ lang.auroraII.prodt1 }}
        
        p.desc-20 {{ lang.auroraII.prodt2 }} #[a.vue-link(href='https://br.vuejs.org/' target="_blank") Vue.js]. {{ lang.auroraII.prodt3 }}

        p.desc-1.btn-back #[router-link(to="/aurora-i") #[fa-icon.timeline-prev(icon="minus")] {{ lang.auroraII.showLess }}]

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          section
            img.img-dr#contentdesk-start(src="../assets/aurora/dr_ai.svg")

            div 
              p.desc-13 {{ lang.auroraII.trancamento1 }}
              p.desc-14  {{ lang.auroraII.trancamento2 }}
              p.desc-15 {{ lang.auroraII.trancamento3 }}
                
              p.desc-16 {{ lang.auroraII.linkTitle1 }} #[br] #[a(href='https://drive.google.com/file/d/125BL2tePQQ-aWAnJrWotPrxmFSUxVJa8/view?usp=sharing' target="_blank") https://drive.google.com]
              p.desc-17 {{ lang.auroraII.linkTitle2 }} #[br] #[a(href='https://drive.google.com/file/d/1StEG0OSgiQ7OuuKMAcog_SljEPeXy4hL/view?usp=sharing' target="_blank") https://drive.google.com]
        

          section.sec-bottom
            div
              p.desc-18 {{ lang.auroraII.linkTitle3 }} #[br] #[a(href='https://youtu.be/eW5_OWG8vN8' target="_blank") https://youtu.be/eW5_OWG8vN8]
              p.desc-19 {{ lang.auroraII.prodt1 }}
          
              p.desc-20 {{ lang.auroraII.prodt2 }} #[a.vue-link(href='https://br.vuejs.org/' target="_blank") Vue.js]. {{ lang.auroraII.prodt3 }}


              p.desc-1.btn-back #[router-link(to="/aurora-i") #[fa-icon.timeline-prev(icon="minus")] {{ lang.auroraII.showLess }}]

            img#img-5(src="../assets/aurora/layout2.png")

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "PageAuroraII",
  computed: mapState(["lang"])
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
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
 .aurora-ii {
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
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  .aurora-ii {
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
