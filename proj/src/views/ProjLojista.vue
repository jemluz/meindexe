<template lang="pug">
  proj-template(
    :nomeProj="lang.lojista.metatitle" 
    date="out/2020" 
    firstName="lo" 
    lastName="jista" 
    class="lojista" 
    :ios="400" 
    :and="100")

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
        p#contentmob-start {{ lang.lojista.desc }} #[a.redLink(href='https://fixpay.com.br/' target="_blank") {{ lang.lojista.descLink }}] {{ lang.lojista.desc2 }} #[a.linkVue(href='https://vuejs.org/' target="_blank") {{ lang.lojista.linkVue }}]

      
        p {{ lang.lojista.linkPreview }} #[br] #[a.redLink(href='https://clone-fxp.vercel.app/' target="_blank") https://vercel.app/]

        img(src="../assets/lojista/desktop.png")

        img(src="../assets/lojista/mobile.png")

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          img#contentmob-start(src="../assets/lojista/desktop.png")

          p {{ lang.lojista.desc }} #[a.redLink(href='https://fixpay.com.br/' target="_blank") {{ lang.lojista.descLink }}] {{ lang.lojista.desc2 }} #[a.linkVue(href='https://vuejs.org/' target="_blank") {{ lang.lojista.linkVue }}]

          p {{ lang.lojista.linkPreview }} #[br] #[a.redLink(href='https://clone-fxp.vercel.app/' target="_blank") https://vercel.app/]

        div.col-2#col-2
          img(src="../assets/lojista/mobile.png")

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProjLojista",
  computed: mapState(["lang"])
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.lojista {
  .name {
    h2 {
      .first {
        background-color: #ED1C24;
      }

      .second {
        color: #ED1C24;
      }
    }
  }

  .redLink { color: #ED1C24; }
  .linkVue { color: #39DF81; }
}

// mobile only
@media only screen and (min-width: 901px) {
  .lojista {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .lojista {
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
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
 .lojista {
    .content-desk { 
      margin-top: 160px;
      padding: 0px 20px 0px 40px;
      width: 99vw;

      div {
        text-align: left;

        img { max-width: 30vw; }

        p {
          max-width: 27vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong { color: $roxo;}
        }
      }

      .col-2 {
        p {padding-left: 20px;}
        margin-left: 40px;

        img { max-width: 40vw; }
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
          padding: 0px;
        }

        a { 
          font-size: .9rem;
          font-weight: 300;
        }
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  .lojista {
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
  }
}
</style>
