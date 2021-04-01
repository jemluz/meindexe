<template lang="pug">
  proj-template(:nomeProj="lang.auroraI.metatitle" date="jan/2017" firstName="auro" lastName="ra" class="aurora" :ios="2100" :and="2400" backTo='/home-web')
    template(v-slot:haveMore) 
      router-link(to="/aurora-ii") 
        fa-icon.timeline-next(style="margin-left: 20px;" icon="plus")

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
        p.desc#contentmob-start {{ lang.auroraI.prototipo1 }} #[a#carmen-pop @carmenli#[div.popover-carmen #[a.carmen-linked(href="https://www.linkedin.com/in/carmenli-1308" target="_blank") LinkedIn]]], #[a#brunool-pop @brunool#[div.popover-brunool #[a.brunool-behance(href="https://www.behance.net/brunool" target="_blank") Behance]]], #[a#rosi-pop @rosilenemoufer #[div.popover-rosi #[a.rosi-lattes(href="http://lattes.cnpq.br/9252640618973149" target="_blank") Lattes]]] e #[a#emili-pop @emiliborges #[div.popover-emili #[a.emili-linked(href="https://www.linkedin.com/in/emili-borges-597a4b1b1" target="_blank") LinkedIn]]], {{ lang.auroraI.prototipo2 }}

        img#img-1(src="../assets/aurora/prototipo1.png")

        p.desc-2 {{ lang.auroraI.prototipo3 }}
        p.desc-3 #[strong {{ lang.auroraI.prototipo4 }} ]
        p.desc-4 {{ lang.auroraI.prototipo5 }}
        p.desc-5 {{ lang.auroraI.linkTitle1 }} #[br] #[a(href='https://youtu.be/k_jvxk8Cl5Q' target="_blank") https://youtu.be/k_jvxk8Cl5Q]

        p.desc-2#contentdesk-col2-start {{ lang.auroraI.slide1 }}
        p "{{ lang.auroraI.slide2 }}" {{ lang.auroraI.slide3 }}

        img#img-1(src="../assets/aurora/slide.png")

        p.desc-8 {{ lang.auroraI.linkTitle2 }} #[br] #[a(href='https://drive.google.com/file/d/1LiZ1pu84gt4OEAFUsS_8-W3YB-D1fyKk/view?usp=sharing' target="_blank") https://drive.google.com]


        p.desc-6 {{ lang.auroraI.codigo1 }}
        p.desc-7 {{ lang.auroraI.codigo2 }}
        img#img-2(src="../assets/aurora/info_codigo.png")
        p.desc-8  {{ lang.auroraI.linkTitle3 }} #[br] #[a(href='https://drive.google.com/file/d/1-fu8XxQ3vioxTXFIHAdSAMVPitEetqbj/view?usp=sharing' target="_blank") https://drive.google.com]

        p.desc-9 {{ lang.auroraI.layout1 }}
        img#img-3(src="../assets/aurora/layout1.png")
        p.desc-10 {{ lang.auroraI.layout2 }}
        p.desc-11 {{ lang.auroraI.linkTitle4 }} #[br] #[a(href='https://youtu.be/4t9KMo5fXAY' target="_blank") https://youtu.be/4t9KMo5fXAY]

        p.desc-12.btn-next #[router-link(to="/aurora-ii") #[fa-icon.timeline-next(icon="plus")] {{ lang.auroraI.seeMore }}] 
      
      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          p.desc#contentdesk-col1-start {{ lang.auroraI.prototipo1 }} #[a#carmen-pop @carmenli#[div.popover-carmen #[a.carmen-linked(href="https://www.linkedin.com/in/carmenli-1308" target="_blank") LinkedIn]]], #[a#brunool-pop @brunool#[div.popover-brunool #[a.brunool-behance(href="https://www.behance.net/brunool" target="_blank") Behance]]], #[a#rosi-pop @rosilenemoufer #[div.popover-rosi #[a.rosi-lattes(href="http://lattes.cnpq.br/9252640618973149" target="_blank") Lattes]]] e #[a#emili-pop @emiliborges #[div.popover-emili #[a.emili-linked(href="https://www.linkedin.com/in/emili-borges-597a4b1b1" target="_blank") LinkedIn]]], {{ lang.auroraI.prototipo2 }}

          img#img-1(src="../assets/aurora/prototipo1.png")

          p.desc-2 {{ lang.auroraI.prototipo3 }}
          p.desc-3 #[strong {{ lang.auroraI.prototipo4 }} ]
          p.desc-4 {{ lang.auroraI.prototipo5 }}
          p.desc-5 {{ lang.auroraI.linkTitle1 }} #[br] #[a(href='https://youtu.be/k_jvxk8Cl5Q' target="_blank") https://youtu.be/k_jvxk8Cl5Q]

        div.col-2#col-2
          p.desc#contentdesk-col2-start {{ lang.auroraI.slide1 }}
          p.desc-2 "{{ lang.auroraI.slide2 }}" {{ lang.auroraI.slide3 }}

          img#img-1.img-slide(src="../assets/aurora/slide.png")

          p.desc-3 {{ lang.auroraI.linkTitle2 }} #[br] #[a(href='https://drive.google.com/file/d/1LiZ1pu84gt4OEAFUsS_8-W3YB-D1fyKk/view?usp=sharing' target="_blank") https://drive.google.com]

          p.desc-4 {{ lang.auroraI.codigo1 }} 
          p.desc-5 {{ lang.auroraI.codigo2 }}
          img#img-2.img-info(src="../assets/aurora/info_codigo.png")
          p.desc-6 {{ lang.auroraI.linkTitle3 }} #[br] #[a(href='https://drive.google.com/file/d/1-fu8XxQ3vioxTXFIHAdSAMVPitEetqbj/view?usp=sharing' target="_blank") https://drive.google.com]

        div.col-3#col-3
          p.desc#contentdesk-col3-start {{ lang.auroraI.layout1 }}
          img#img-3(src="../assets/aurora/layout1.png")
          p.desc-2 {{ lang.auroraI.layout2 }}
          p.desc-3 {{ lang.auroraI.linkTitle4 }} #[br] #[a(href='https://youtu.be/4t9KMo5fXAY' target="_blank") https://youtu.be/4t9KMo5fXAY]

          p.desc-4.btn-next #[router-link(to="/aurora-ii") #[fa-icon.timeline-next(icon="plus")] {{ lang.auroraI.seeMore }}] 
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "PageAuroraI",
  computed: mapState(["lang"])
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.aurora {
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
}

// mobile only
@media only screen and (min-width: 901px) {
  .aurora {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .aurora {
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
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
 .aurora {
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
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  .aurora {
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

        img { max-width: 300px; }

        p {
          max-width: 300px;
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
  }
}
</style>
