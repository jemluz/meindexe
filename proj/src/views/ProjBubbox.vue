<template lang="pug">
  proj-template(
    :nomeProj="lang.bubbox.metatitle" 
    date="abr/2018" 
    firstName="bub" 
    lastName="box" 
    class="bubbox" 
    :ios="1000" 
    :and="900"
    backTo='/home-web')

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
        p#contentmob-start {{ lang.bubbox.desc }} #[a#analu-pop.empty @analuiza #[div.popover-analu #[a.analu-linked(href="https://www.linkedin.com/in/analurs" target="_blank") LinkedIn] ]] {{ lang.bubbox.desc2 }} #[a#alexandre-pop @alexandre #[div.popover-alex #[a.alex-git(href="https://github.com/soloalex1" target="_blank") GitHub] #[a.alex-linked(href="https://www.linkedin.com/in/alexmachina" target="_blank") LinkedIn] ]] {{ lang.bubbox.desc3 }}
        img(src="../assets/bubbox/iniciais.png")

        p {{ lang.bubbox.learn }}
        
        img(src="../assets/bubbox/finais.png")
        
        p {{ lang.bubbox.currentTech }}
        p {{ lang.bubbox.love }} #[a.vue-link(href="https://br.vuejs.org/index.html") Vue.js.]
        

        div.result
          p {{ lang.bubbox.linkTitle1 }}
          a(href="https://youtu.be/itqZ99T2lDc") youtu.be/itqZ99T2lDc

        p
        

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          img#contentdesk-start(src="../assets/bubbox/iniciais.png")
          p {{ lang.bubbox.desc }} #[a#analu-pop.empty @analuiza #[div.popover-analu #[a.analu-linked(href="https://www.linkedin.com/in/analurs" target="_blank") LinkedIn] ]] {{ lang.bubbox.desc2 }} #[a#alexandre-pop @alexandre #[div.popover-alex #[a.alex-git(href="https://github.com/soloalex1" target="_blank") GitHub] #[a.alex-linked(href="https://www.linkedin.com/in/alexmachina" target="_blank") LinkedIn] ]] {{ lang.bubbox.desc3 }}

          p {{ lang.bubbox.learn }}

        div.col-2#col-2  
          img(src="../assets/bubbox/finais.png")

          div 
                    
            p {{ lang.bubbox.currentTech }}
            p {{ lang.bubbox.love }} #[a.vue-link(href="https://br.vuejs.org/index.html") Vue.js.]

            div.result
              p {{ lang.bubbox.linkTitle1 }}
              a(href="https://youtu.be/itqZ99T2lDc" target="_blank") youtu.be/itqZ99T2lDc

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProjBubbox",
  computed: mapState(["lang"])
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.bubbox {
  .name {
    h2 {
      .first {
        background-color: #FFAB2D;
      }

      .second {
        color: #FFAB2D;
      }
    }
  }

  .content-mob {

    .popover-alex,
    .popover-analu {
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

      background-color: #FFAB2D;
      margin: 0px auto;
      padding: 5px 10px;
      border-radius: 10px;
    }

    #alexandre-pop,
    #analu-pop {
      cursor: pointer;

      &:hover {
        transition: all .5s ease;
        color: #FFAB2D;
      }
    }

    #alexandre-pop:hover .popover-alex,
    #analu-pop:hover .popover-analu {
      display: flex;
      position: absolute;

      opacity: 1;
    }
  }

  .content-desk {

    .popover-alex,
    .popover-analu {
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

      background-color: #FFAB2D;
      margin: 0px auto;
      padding: 5px 10px;
      border-radius: 10px;
    }

    #alexandre-pop,
    #analu-pop {
      cursor: pointer;

      &:hover {
        transition: all .5s ease;
        color: #FFAB2D;
      }
    }

    #alexandre-pop:hover .popover-alex,
    #analu-pop:hover .popover-analu {
      display: flex;
      position: absolute;

      opacity: 1;
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {
  .bubbox {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .bubbox {
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

      .popover-alex {
        margin: 10px 0px 0px 0px;
      }

      .popover-analu {
        margin: -50px 0px 0px 0px;
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
 .bubbox {
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

      .popover-alex {
        margin: 10px 0px 0px 180px;
      }

      .popover-analu {
        margin: -45px 0px 0px 80px;
      }

      .col-2 {
        p {padding-left: 20px;}
        margin-left: 40px;
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
  .bubbox {
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
