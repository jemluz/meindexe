<template lang="pug">
  proj-template(
    :nomeProj="lang.letRun.metatitle" 
    date="set/2020" 
    firstName="let" 
    lastName="run" 
    class="letrun" 
    :ios="400" 
    :and="100"
    backTo='/home-web')

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
        p#contentmob-start {{ lang.letRun.desc }}
        img(src="../assets/letrun/desktop.png")
        p {{ lang.letRun.desc2 }}

        p {{ lang.letRun.linkPreview }} #[br] #[a.redLink(href='https://clone-fxp.vercel.app/' target="_blank") https://logista.app/]

        img(src="../assets/letrun/mobile.png")

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          p#contentmob-start {{ lang.letRun.desc }}
          p#contentmob-start {{ lang.letRun.desc2 }}

          p {{ lang.letRun.linkPreview }} #[br] #[a.redLink(href='https://clone-fxp.vercel.app/' target="_blank") https://letrun.app/]

          img(src="../assets/letrun/mobile.png")


        div.col-2#col-2
          img(src="../assets/letrun/desktop.png")

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

.letrun {
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
  .letrun {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .letrun {
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
 .letrun {
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
  .letrun {
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
