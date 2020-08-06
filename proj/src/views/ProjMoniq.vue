<template lang="pug">
  proj-template(:nomeProj="lang.monique.metatitle" date="dez/2017" firstName="monique" lastName="luz" class="moniq" :ios="400" :and="200")

    template(v-slot:content) 
      div.content-mob#content-mob(data-aos="fade-up" data-aos-duration="500" )
        img#contentmob-start(src="../assets/moniq/rascunhos.png")
        img(src="../assets/moniq/mockup.png")
        img(src="../assets/moniq/social.png")

        p {{ lang.monique.desc }}

        div.result
          p {{ lang.monique.linkTitle1 }}
          a(href="https://drive.google.com/file/d/1ALkr59dzaCvKUT64-nQJT1cGq9HnhUaW/view?usp=sharing") https://drive.google.com
        
        p

      div.content-desk#content-desk(data-aos="fade-up" data-aos-duration="500")
        div.col-1#col-1
          div#contentdesk-col1-start
            img#contentmob-start(src="../assets/moniq/rascunhos.png")
            img(src="../assets/moniq/mockup.png")
            img(src="../assets/moniq/social.png")

          p {{ lang.monique.desc }}

          div.result
            p {{ lang.monique.linkTitle1 }}
            a(href="https://drive.google.com/file/d/1ALkr59dzaCvKUT64-nQJT1cGq9HnhUaW/view?usp=sharing") https://drive.google.com

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProjMoniq",
  computed: mapState(["lang"])
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

.moniq {
  .name {
    h2 {
      .first {
        background-color: #FDD863;
        color: $roxo;
      }

      .second {
        color: #FDD863;
      }
    }
  }

  .content-mob {
    img {
      box-shadow: 0px 0px 20px 0px #00000030;
      border: 2px solid #fff;
    }

    .result {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;
      color: #fff;

      background-color: $roxo;
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
    img {
      box-shadow: 0px 0px 20px 0px #00000030;
      border: 2px solid #fff;
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
  .moniq {
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
  .moniq {
    .content-desk {
      margin-top: 160px;
      padding: 0px 20px 0px 40px;
      width: 99vw;

      div {
        text-align: left;

        div {
          img {
            max-width: 20vw;
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
  .moniq {
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
