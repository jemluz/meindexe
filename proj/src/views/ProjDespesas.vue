<template lang="pug">
  proj-template(:nomeProj="lang.despesas.metatitle" date="out/2020" firstName="despe" lastName="sas" class="despesas" :ios="400" :and="100" backTo='/')

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
        img#contentmob-start(src="../assets/despesas/despesas.png")

        p {{ lang.despesas.desc }} #[a(href="") {{ lang.despesas.flutterLink }} ] {{ lang.despesas.desc2 }} 
          
        div.result
          p {{ lang.despesas.linkTitle1 }}
          a(href="https://github.com/jemluz/despesas") https://github.com/despesas
        
        p

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          div#contentdesk-col1-start
            img#contentmob-start(src="../assets/despesas/despesas.png")

          p {{ lang.despesas.desc }} #[a(href="") {{ lang.despesas.flutterLink }} ] {{ lang.despesas.desc2 }} 
            
          div.result
            p {{ lang.despesas.linkTitle1 }}
            a(href="https://github.com/jemluz/despesas") https://github.com/despesas

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProjDespesas",
  computed: mapState(["lang"])
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.despesas {
  .name {
    h2 {
      .first {
        background-color: #9C28B1;
        color: $branco;
      }

      .second {
        color: #9C28B1;
      }
    }
  }

  .content-mob {
    .result {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;
      color: #fff;

      background-color: #9C28B1;
      p { color: #fff; margin: 0px;}

      border-radius: 5px;
      box-shadow: 0px 0px 20px 0px #00000020;

      a {
        border-bottom: 1px solid #fff;
        color: #fff;
        font-weight: 700;
        opacity: .4;
      }
    }
  }

  .content-desk {
    .result {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      background-color: #9C28B1;
      p { color: #fff; }

      border-radius: 5px;
      box-shadow: 0px 0px 20px 0px #00000020;

      a {
        border-bottom: 1px solid #fff;
        color: #fff;
        font-weight: 700;
        opacity: .4;
      }
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {
  .back-btn {
    .content-mob {
      display: none;
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  .despesas {
    .content-mob {
      margin-left: 40px;
      padding: 0px 70px 0px 50px;

      img {
        max-width: 200px;
        margin-top: 20px;
      }

      p {
        margin-top: 20px;
        margin-left: 5px;
      }

      .result {
        margin: 40px 0px 0px -40px;
        padding: 15px 40px;

        p { margin-bottom: 5px;}
      }
    }

    .content-desk {
      display: none;
    }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
  .despesas {
    .content-desk {
      margin-top: 160px;
      padding: 0px 20px 0px 40px;
      width: 99vw;

      div {
        text-align: left;

        div {
          img {
            max-width: 30vw;
            margin-right:20px;
          }
        }

        p {
          max-width: 40vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong {
            color: $roxo;
          }
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
          }

          a { 
            font-size: .9rem;
            font-weight: 300;
          }
        }
      }

    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  .despesas {
    .content-desk {
      margin-top: 160px;
      padding: 0px 20px 0px 40px;

      div {
        text-align: left;

        img {
          max-width: 10vw;
        }

        p {
          max-width: 10vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong {
            color: $roxo;
          }
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
  }
}
</style>
