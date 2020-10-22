<template lang="pug">
  proj-template(
    :nomeProj="lang.oficinas.metatitle" 
    date="até então" 
    firstName="of" 
    lastName="cinas" 
    class="oficinas" 
    :ios="1000" 
    :and="900")

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )

        p#contentmob-start {{ lang.oficinas.desc }} 
        img(src="../assets/oficinas/je.png")

        p.link-title-1 {{ lang.oficinas.linkTitle1 }} 
        a.link-1(href="https://drive.google.com/file/d/1gtTMpZ6Kk7RfMkQ4aVp9N5rhSqf8ZqgT/view?usp=sharing") https://drive.google.com



        
        p {{ lang.oficinas.desc2 }} 
        img(src="../assets/oficinas/produtividade.png")

        p.link-title-2 {{ lang.oficinas.linkTitle2 }} 
        a.link-2(href="https://drive.google.com/file/d/1xiHQP4d04LyrOPe7iOfP_21-TOhqKz6a/view?usp=sharing") https://drive.google.com




        p {{ lang.oficinas.desc3 }} 
        img(src="../assets/oficinas/xd.png")

        p.link-title-3 {{ lang.oficinas.linkTitle3 }} 
        a.link-3(href="https://drive.google.com/file/d/1xiHQP4d04LyrOPe7iOfP_21-TOhqKz6a/view?usp=sharing") https://drive.google.com
        
        

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          
          p#contentdesk-start {{ lang.oficinas.desc }} 
          img(src="../assets/oficinas/je.png")

          p.link-title-1 {{ lang.oficinas.linkTitle1 }} 
          a.link-1(href="https://drive.google.com/file/d/1gtTMpZ6Kk7RfMkQ4aVp9N5rhSqf8ZqgT/view?usp=sharing") https://drive.google.com



          p(style="margin-top: 40px") {{ lang.oficinas.desc2 }} 
          img(src="../assets/oficinas/produtividade.png")

          p.link-title-2 {{ lang.oficinas.linkTitle2 }} 
          a.link-2(href="https://drive.google.com/file/d/1xiHQP4d04LyrOPe7iOfP_21-TOhqKz6a/view?usp=sharing") https://drive.google.com

        div.col-2#col-2

          p {{ lang.oficinas.desc3 }} 
          img(src="../assets/oficinas/xd.png")

          p.link-title-3 {{ lang.oficinas.linkTitle3 }} 
          a.link-3(href="https://drive.google.com/file/d/1xiHQP4d04LyrOPe7iOfP_21-TOhqKz6a/view?usp=sharing") https://drive.google.com
        

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProjOficinas",
  computed: mapState(["lang"])
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.oficinas {
  .name {
    h2 {
      .first {
        background-color: #B4A1F3;
      }

      .second {
        color: #B4A1F3;
      }
    }
  }

  .content-mob,
  .content-desk  {
    img {
      box-shadow: 0px 0px 10px 5px #00000020;
    }

    a {
      font-family: t26-carbon, monospace;
      font-weight: 700;
      font-style: italic;
    }
    
    .link-1 { 
      color: #8552AF; 
      border-bottom: 1px solid #8552AF;
    }

    .link-2 { 
      color: #333333; 
      border-bottom: 1px solid #333333;
    }

    .link-3 { 
      color: #FD57A2; 
      border-bottom: 1px solid #FD57A2;
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {
  .oficinas {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .oficinas {
    .content-mob {
      width: 89vw;
      margin-left: 40px;
      padding: 0px 70px 0px 50px;

      img { 
        margin-top: 20px;
        max-width: 200px;
      }

      p, a {
        max-width: 200px;
        margin-top: 20px;
        margin-left: 5px;
      }

      .link-1,
      .link-2 { 
        margin-bottom: 40px;
      }
    }

    .content-desk { display: none; }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
 .oficinas {
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
          margin-bottom: 20px;

          strong { color: $roxo;}
        }

        .link-title-1,
        .link-title-2,
        .link-title-3 {
          margin-bottom: 10px;
        }

        .link-1,
        .link-2 { 
          margin-bottom: 40px;
        }

      }

      .col-2 {
        margin-left: 60px;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  .oficinas {
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
