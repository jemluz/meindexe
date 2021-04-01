<template lang="pug">
  proj-template(
    :nomeProj="lang.gt.metatitle" 
    date="fev/2020" 
    firstName="green" 
    lastName="Text" 
    class="gt" 
    :ios="600" 
    :and="400"
    backTo='/home-web')

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
        p#contentmob-start {{ lang.gt.desc }}
        img(src="../assets/gt/login-mob.png")

        p {{ lang.gt.desc2 }}
        p {{ lang.gt.desc3 }}

        img(src="../assets/gt/dash-mob.png")

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          img#contentmob-start(src="../assets/gt/login-desk.png")

          p {{ lang.gt.desc }}
          p {{ lang.gt.desc2 }}
          p {{ lang.gt.desc3 }}

        div.col-2#col-2
          img(src="../assets/gt/dash-desk.png")

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProjGt",
  computed: mapState(["lang"])
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.gt {
  .name {
    h2 {
      .first {
        background-color: #39DF81;
      }

      .second {
        color: #39DF81;
      }
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {
  .gt {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .gt {
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
 .gt {
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
  .gt {
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
