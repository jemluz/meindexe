<template>
  <div id="sobre" class="bg-fixed">
    <vue-headful :title="lang.aboutPage.metatitle"></vue-headful>

    <div id="data" class="data" data-aos="fade-down" data-aos-duration="1000"></div>

    <div class="content-mob" id="content-mob" data-aos="fade-up" data-aos-duration="500">
      <div id="contentmob-start" class="name">
        <h2>
          <span class="first">{{ lang.aboutPage.firstTitle }}</span>
          <span class="second">{{ lang.aboutPage.firstTitle2 }}_</span>
        </h2>
      </div>

      <agile ref="carouselmob" :fade="true" :navButtons="false" :autoplay="true" :speed="1000">
        <div class="slide membro">
          <div>
            <img class="photo" src="../assets/sobre/jeyse.png" alt="">
          </div>

          <div class="nome-funcao">
            <h4>Jemima Luz</h4>
            <p>{{ lang.aboutPage.func1 }}</p>
          </div>
        </div>

        <div class="slide membro">
          <div>
            <img class="photo" src="../assets/sobre/jemima2.png" alt="">
          </div>

          <div class="nome-funcao">
            <h4>Jemima Luz</h4>
            <p>{{ lang.aboutPage.func2 }}</p>
          </div>
        </div>

        <div class="slide membro">
          <div>
            <img class="photo" src="../assets/sobre/jemine.png" alt="">
          </div>

          <div class="nome-funcao">
            <h4>Jemima Luz</h4>
            <p>{{ lang.aboutPage.func3 }}</p>
          </div>
        </div>

        <div class="slide membro">
          <div>
            <img class="photo" src="../assets/sobre/juliana.png" alt="">
          </div>

          <div class="nome-funcao">
            <h4>Jemima Luz</h4>
            <p>{{ lang.aboutPage.func4 }}</p>
          </div>
        </div>
      
      </agile>

      <div class="slide-btn">
        <button class="btn-prev-photo" @click="$refs.carouselmob.goToNext()">
          <fa-icon class="photo-icon" icon="arrow-left"></fa-icon>
        </button>

        <button class="btn-next-photo" @click="$refs.carouselmob.goToPrev()">
          <fa-icon class="photo-icon" icon="arrow-right"></fa-icon>
        </button>
      </div>

      <p class="normal p-1">
        {{ lang.aboutPage.who }}
        <strike>{{ lang.aboutPage.whoDash }}</strike>
        {{ lang.aboutPage.who2 }}
      </p>

      <p class="normal">{{ lang.aboutPage.nextProjs }}</p>

      <nav class="projs-navgation normal">
        <div class="row-1">
          <router-link to="/gt" style="color: #39DF81;border-color: #39DF81;">g</router-link>
          <router-link to='/produtividade'>p</router-link>
          <router-link to="" class="empty">v</router-link>
        </div>
      </nav>

      <div id="name-2" class="name-2">
        <h2>
          <span class="first">{{ lang.aboutPage.secondTitle }}</span>
          <span class="second">{{ lang.aboutPage.secondTitle2 }}_</span>
        </h2>
      </div>

      <!-- aqui -->
      <p class="normal">{{ lang.aboutPage.howWeWork }}</p>
      <p class="normal">{{ lang.aboutPage.list1 }}</p>
      <p class="normal no-margin">{{ lang.aboutPage.list2 }}</p>
      <p class="normal no-margin">{{ lang.aboutPage.list3 }}</p>

      <p class="normal poema">
        "{{ lang.aboutPage.poemLine1 }} <br>
        {{ lang.aboutPage.poemLine2 }} <br>
        {{ lang.aboutPage.poemLine3 }} <br>
        {{ lang.aboutPage.poemLine4 }} <br>
      </p>

      <p class="normal poema">
        {{ lang.aboutPage.poemLine5 }} <br>
        {{ lang.aboutPage.poemLine6 }} <br>
        {{ lang.aboutPage.poemLine7 }} <br>
        {{ lang.aboutPage.poemLine8 }} <br>
        {{ lang.aboutPage.poemLine9 }}"
      </p>

      <p class="normal poema autor">{{ lang.aboutPage.poemLine10 }}</p>

      <div class="contato">
        <div id="name-2" class="name-2">
          <h2>
            <span class="first">{{ lang.aboutPage.thirdTitle }}</span>
            <span class="second">{{ lang.aboutPage.thirdTitle }}_</span>
          </h2>
        </div>

        <p class="normal p-1">{{ lang.aboutPage.request }}</p>

        <a class="normal mail" href="https://www.linkedin.com/in/jemluz/">
          <fa-icon :icon="['fab', 'linkedin']"></fa-icon>
          {{ lang.aboutPage.linkedin }}
        </a>

        <a class="normal insta" href="https://www.instagram.com/jemimwah/">
          <fa-icon :icon="['fab', 'instagram']"></fa-icon>
          {{ lang.aboutPage.insta }}
        </a>

        <a class="normal zap" href="https://github.com/jemluz">
          <fa-icon :icon="['fab', 'github']"></fa-icon>
          {{ lang.aboutPage.git }}
        </a>

        <a href=""></a>

      </div>

    </div>

    <div class="content-desk" id="content-desk" data-aos="fade-up" data-aos-duration="500">
      <div class="col-1" id="col-1">
        <agile id="#contentdesk-start" ref="carouseldesk" :fade="true" :navButtons="false" :autoplay="true" :speed="1000">
          <div class="slide membro">
            <div>
              <img class="photo" src="../assets/sobre/jeyse.png" alt="">
            </div>

            <div class="nome-funcao">
              <h4>Jemima Luz</h4>
              <p>{{ lang.aboutPage.func1 }}</p>
            </div>
          </div>

          <div class="slide membro">
            <div>
              <img class="photo" src="../assets/sobre/jemima.png" alt="">
            </div>

            <div class="nome-funcao">
              <h4>Jemima Luz</h4>
              <p>{{ lang.aboutPage.func2 }}</p>
            </div>
          </div>

          <div class="slide membro">
            <div>
              <img class="photo" src="../assets/sobre/jemine.png" alt="">
            </div>

            <div class="nome-funcao">
              <h4>Jemima Luz</h4>
              <p>{{ lang.aboutPage.func3 }}</p>
            </div>
          </div>

          <div class="slide membro">
            <div>
              <img class="photo" src="../assets/sobre/juliana.png" alt="">
            </div>

            <div class="nome-funcao">
              <h4>Jemima Luz</h4>
              <p>{{ lang.aboutPage.func4 }}</p>
            </div>
          </div>
        
        </agile>

        <div class="slide-btn">
          <button class="btn-prev-photo" @click="$refs.carouseldesk.goToNext()">
            <fa-icon class="photo-icon" icon="arrow-left"></fa-icon>
          </button>

          <button class="btn-next-photo" @click="$refs.carouseldesk.goToPrev()" style="color: ;border-color: ;">
            <fa-icon class="photo-icon" icon="arrow-right"></fa-icon>
          </button>
        </div>

        <p class="normal p-1">
          {{ lang.aboutPage.who }}
          <strike>{{ lang.aboutPage.whoDash }}</strike>
          {{ lang.aboutPage.who2 }}
        </p>

        <p class="normal">{{ lang.aboutPage.nextProjs }}</p>

        <nav class="projs-navgation normal">
          <div class="row-1">
            <router-link to="/gt" style="color: #39DF81;border-color: #39DF81;">g</router-link>
            <router-link to='/produtividade'>p</router-link>
            <router-link to="" class="empty">v</router-link>
          </div>
        </nav>

        <div class="contato">

          <div id="name-2" class="name-2">
            <h2>
              <span class="first">{{ lang.aboutPage.thirdTitle }}</span>
              <span class="second">{{ lang.aboutPage.thirdTitle }}_</span>
            </h2>
          </div>

          <p class="normal p-1">{{ lang.aboutPage.request }}</p>

          <a class="normal mail" href="https://www.linkedin.com/in/jemluz/">
            <fa-icon :icon="['fab', 'linkedin']"></fa-icon>
            {{ lang.aboutPage.linkedin }}
          </a>

          <a class="normal insta" href="https://www.instagram.com/jemimwah/">
            <fa-icon :icon="['fab', 'instagram']"></fa-icon>
            {{ lang.aboutPage.insta }}
          </a>

          <a class="normal zap" href="https://github.com/jemluz">
            <fa-icon :icon="['fab', 'github']"></fa-icon>
            {{ lang.aboutPage.git }}
          </a>

          <a href=""></a>

        </div>

      </div>

      <div id="col-2" class="col-2">
        <div id="name-2" class="name-2">
          <h2>
            <span class="first">{{ lang.aboutPage.secondTitle }}</span>
            <span class="second">{{ lang.aboutPage.secondTitle2 }}_</span>
          </h2>
        </div>

        <p>{{ lang.aboutPage.howWeWork }}</p>

        <p class="no-margin">{{ lang.aboutPage.list1 }}</p>
        <p class="no-margin">{{ lang.aboutPage.list2 }}</p>
        <p class="no-margin">{{ lang.aboutPage.list3 }}</p>

        <p class="poema">
          "{{ lang.aboutPage.poemLine1 }} <br>
          {{ lang.aboutPage.poemLine2 }} <br>
          {{ lang.aboutPage.poemLine3 }} <br>
          {{ lang.aboutPage.poemLine4 }} <br>
        </p>

        <p class="poema">
          {{ lang.aboutPage.poemLine5 }} <br>
          {{ lang.aboutPage.poemLine6 }} <br>
          {{ lang.aboutPage.poemLine7 }} <br>
          {{ lang.aboutPage.poemLine8 }} <br>
          {{ lang.aboutPage.poemLine9 }}"
        </p>

        <p class="poema autor">{{ lang.aboutPage.poemLine10 }}</p>
        
      </div>

    </div>

    <div id="line" class="line" data-aos="slide-down" data-aos-duration="2000"></div>

    <router-link id="back-btn" class="back-btn" to="/" data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
      <fa-icon class="back-icon" icon="arrow-left"></fa-icon>
      {{ lang.backBtn }}
    </router-link>

    <div class="parallax" data-aos="fade-down" data-aos-duration="500">
      <div id="parallax-bg-3" class="parallax-bg">
        <div id="bg-3-1"></div>
      </div>
    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "About",
  computed: mapState(["lang"]),
  methods: {
    getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
      {
        return 'iOS';

      }
      else if( userAgent.match( /Android/i ) )
      {

        return 'Android';
      }
      else
      {
        return 'unknown';
      }
    },
    lineHeight() {
      let backButtonTop = document.getElementById("back-btn").offsetTop;
      let line = document.getElementById("line");

      line.style.height = (backButtonTop - 30) + "px";
    },
    linePosition() {
      let line = document.getElementById("line");
      let col1 = document.getElementById("col-1");

      col1.style.marginLeft = 35 + "px";
    },
    mobContentStart(){
      // nao funfa?
      let lineHeight = document.getElementById("line").offsetHeight;
      let contentMob = document.getElementById("content-mob");

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;
      let auroraI = document.getElementById("contentmob-start");

      // contentMob.style.marginTop = 100 + "px";
      contentMob.style.height = (lineHeight)+"px";
      
      if (this.getMobileOperatingSystem() == 'iOS') {
        // ios
        auroraI.style.marginTop = (contentMob.offsetTop - dataTop - dataheight + 1000) + "px";
      } else if (this.getMobileOperatingSystem() == 'Android') {
        // android
        auroraI.style.marginTop = (contentMob.offsetTop + 1000) + "px";
      }

      // console.log(auroraStart.style.marginTop)
    },
    deskContentStart() {
      let contentDesk = document.getElementById("content-desk");
      let lineHeight = document.getElementById("line").offsetHeight;

      let dataTop = document.getElementById("data").offsetTop;
      let dataheight = document.getElementById("data").offsetHeight;

      let colIStart = document.getElementById("contentdesk-start");
      contentDesk.style.marginTop = 100 + "px";
      contentDesk.style.height = (lineHeight - 100)+"px";
      
      // colIStart.style.marginTop = + "px";      
    },
    listenKeyboard() {
      let code = event.keyCode ? event.keyCode : event.which;

      // 1 - ipress i: back to home
      if (code == 8) {
        this.$router.push(({ path: '/'}) )
      }
    }
  },
  updated() {
    this.mobContentStart();
  },
  mounted() {
    this.lineHeight();
    this.mobContentStart();

    this.linePosition();
    this.deskContentStart();
  },
  created() {
    document.addEventListener("keyup", this.listenKeyboard);
  }
};
</script>

<style lang="scss">
@import "../styles/helpers/variables";

#sobre {
  background: linear-gradient(to bottom right, #eee, #fff);
  background-attachment: fixed;
  overflow: hidden;

  color: $branco;
  text-align: center;

  .name {
    // position: fixed;
    z-index: 3;

    h2 {
      font-family: 'Khula', sans-serif;
      font-weight: 400;

      .first {
        background-color: #222;
        box-shadow: 0px 0px 20px 0px #00000020;
      }

      .second {
        background-color: transparent;
        color: #222;
      }
    }
  }

  .content-mob {

    overflow-y: scroll;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;

    p,
    .contato a {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      color: #555;

      a {
        font-weight: 700;
      }
    }

    .name-2,
    .contato .name-2 {
      // position: fixed;
      z-index: 3;

      h2 {
        font-family: 'Khula', sans-serif;
        font-weight: 400;

        .first {
          background-color: #222;
          box-shadow: 0px 0px 20px 0px #00000020;
        }

        .second {
          background-color: transparent;
          color: #222;
        }
      }
    }

    .agile__actions {
      display: none;
    }

    .slide-btn {
      display: flex;
      justify-content: space-between;
      button {
        border-radius: 50%;
        background-color: $branco;
        color: $preto;
        padding: 8px;
        font-size: 10px;
        box-shadow: 0px 0px 20px 0px #00000020;
      }
    }

    .membro {
      display: flex;

      .photo {
        border: 3px solid #fff;
        border-radius: 50%;
        background-size: contain;
      }

      .nome-funcao {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p { margin: 0px; }
      }

      h4 { 
        font-family: t26-carbon, monospace;
        color: $preto; 
      }
    }

    .projs-navgation {
      font-family: t26-carbon, monospace;
      // position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;

      z-index: 5;

      a {
        border: 2px solid $roxo;
        border-radius: 10px;
        color: $roxo;
        z-index: 10;

        transition: all 0.5s ease;
        opacity: .5;

        &:hover,
        &:focus {
          opacity: 1;
        }
      }

      div {
        display: flex;
        justify-self: center;

        .empty {
          opacity: .2;
        }
      }
    }

    .autor {
      text-align: right;
    }

    .contato {
      display: flex;
      flex-direction: column;
        
      a { 
        font-weight: bold; 
        margin-bottom: 10px;
        font-size: 16px;
      }

      .mail {
        color: #555;
        transition: all .5s ease;

        &:hover {
          cursor: pointer;
          color: $roxo;
        }
      }

      .insta {
        color: #555;
        transition: all .5s ease;

        &:hover {
          cursor: pointer;
          color: #9B2A9B;
        }
      }

      .git {
        color: #555;
        transition: all .5s ease;

        &:hover {
          cursor: pointer;
          color: #9B2A9B;
        }
      }

      .zap {
        color: #555;
        transition: all .5s ease;

        &:hover {
          cursor: pointer;
          color: #33C271;
        }
      }
    }
  }

  .content-desk {
    overflow-y: scroll;
    
    z-index: 2;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    position: fixed;

    .name-2,
    .contato .name-2 {
      // position: fixed;
      z-index: 3;

      h2 {
        font-family: 'Khula', sans-serif;
        font-weight: 400;

        .first {
          background-color: #222;
          box-shadow: 0px 0px 20px 0px #00000020;
        }

        .second {
          background-color: transparent;
          color: #222;
        }
      }
    }

    .agile__actions {
      display: none;
    }

    .slide-btn {
      display: flex;
      justify-content: space-between;
      button {
        border-radius: 50%;
        background-color: $branco;
        color: $roxo;
        padding: 8px;
        font-size: 10px;
        box-shadow: 0px 0px 20px 0px #00000020;
      }
    }

    .membro {
      display: flex;

      .photo {
        border: 3px solid #fff;
        border-radius: 50%;
        background-size: contain;
      }

      .nome-funcao {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p { margin: 0px; }
      }

      h4 { 
        font-family: t26-carbon, monospace;
        color: $roxo; 
      }
    }

    p,
    .contato a {
      font-family: t26-carbon, monospace;
      font-size: 16px;
      font-style: italic;

      text-align: left;

      color: #555;

      a {
        font-weight: 700;
      }
    }

     .contato {
      display: flex;
      flex-direction: column;
        
      a { 
        font-weight: bold; 
        margin-bottom: 10px;
        font-size: 16px;
      }

      .mail {
        color: #555;
        transition: all .5s ease;

        &:hover {
          cursor: pointer;
          color: $roxo;
        }
      }

      .insta {
        color: #555;
        transition: all .5s ease;

        &:hover {
          cursor: pointer;
          color: #9B2A9B;
        }
      }

      .zap {
        color: #555;
        transition: all .5s ease;

        &:hover {
          cursor: pointer;
          color: #33C271;
        }
      }
    }

    .projs-navgation {
      font-family: t26-carbon, monospace;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;

      z-index: 5;

      a {
        border: 2px solid $roxo;
        border-radius: 10px;
        color: $roxo;
        z-index: 10;

        transition: all 0.5s ease;
        opacity: .5;

        &:hover,
        &:focus {
          opacity: 1;
        }
      }

      div {
        display: flex;
        justify-self: center;

        .empty {
          opacity: .2;
        }
      }
    }

  }

  .line {
    position: fixed;
    background: url("../assets/proj-bg/line.svg");
    opacity: .9;
  }

  .back-btn {
    font-family: t26-carbon, monospace;
    font-weight: 700;
    z-index: 3;

    box-shadow: 0px 0px 10px 5px #03010420;
    border: 2px solid $preto;
    border-radius: 5px 10px 10px 5px;

    transition: all .5s ease;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    bottom: 0px;
    color: $preto;

    &:hover {
      background-color: $roxo;
      color: $branco;
    }
  }

  .parallax {
    height: calc(100vh);

    /* background layer */
    div#parallax-bg-3 {
      position: fixed;
      width: 100vw;
      height: 100vh;
      right: 0;
      // margin-right: -250px;
    }
    /* foreground */
    div#parallax-bg-3 div {
      background-repeat: no-repeat;
      position: absolute;
      display: block;
      overflow: hidden;
    }
    div#bg-3-1 {
      z-index: 1;
      opacity: 1;
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {
  #sobre {
    .content-mob { display: none; }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #sobre {
    .name {
      // top: 60px;
      margin-bottom: 50px;
      // left: 60px;
      transform: rotate(-10deg);

      h2 {
        font-size: 25px;
        left: 0px;

        .first {
          padding: 5px 0px 0px 30px;
        }
      }
    }

    .content-mob {
      // max-width: 500px;
      overflow-x: hidden;
      margin-left: -35px;
      padding: 0px 70px 0px 50px;

      div {
        text-align: left;

        p {
          font-size: 1rem;
          margin: 20px 0px;

          strong { color: $roxo;}
        }
      }

      p { 
        max-width: 300px;
        margin-top: 20px;
      }

      .agile {
        max-width: 90vw;
      }

      .no-margin {
        margin: 0px;
      }

      .normal {
        margin-left: 80px;
      }

      .membro .photo {
        height: 100px;
        
      }

      .slide-btn {
        min-width: 120px;
        transform: rotate(90deg);
        margin-top: -65px;
        margin-left: -10px;
        margin-bottom: 90px;
      }

      .p-1 {
        margin-top: -40px;
      }

      .projs-navgation {
        margin-top: 20px;

        a {
          padding: 5px 10px;
          margin: 0px 5px 20px 5px;
          font-size: 20px;
        }
      }

      .name-2 {
        margin: 40px 0px 30px 20px;
        transform: rotate(-10deg);

        h2 {
          font-size: 30px;
          left: 0px;

          .first {
            padding: 0px 0px 0px 30px;
          }
        }
      }

      .poema {
        color: $roxo;
      }

      .contato {
        .name-2 {
          margin: 60px 0px 90px 20px;
          transform: rotate(-10deg);

          h2 {
            font-size: 25px;
            left: 0px;

            .first {
              padding: 0px 0px 0px 30px;
            }
          }
        }

        p {
          margin-top: -60px;
        }
      }
    }

    .content-desk { display: none; }

    .line {
      width: 5px;
      height: 85vh;
      left: 60px;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 30px 30px;
      padding: 5px 20px 5px 20px;

      .back-icon {
        height: 15px;
        margin-right: 10px;
      }
    }

    .parallax {
      div#bg-3-1 {
          background: url("../assets/proj-bg/malha.png");
          width: 1503px;
          height: 852px;
          transform: rotate(-30deg);
          left: 0px;
          margin-top: -260px;
        }
    }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
 #sobre {
    .name {
      top: 30px;
      left: 100px;
      transform: rotate(-10deg);

      h2 {
        font-size: 30px;
        left: 0px;

        .first {
          padding: 0px 0px 0px 30px;
        }
      }
    }

    .content-desk { 
      margin-top: 100px;
      padding: 20px 20px 0px 40px;
      // width: 99vw;

      div {
        text-align: left;

        p {
          min-width: 200px;
          max-width: 18vw;
          font-size: 1rem;
          margin: 20px 0px;

          strong { color: $roxo;}
        }
      }

      .no-margin {
        margin: 0px;
      }

      .normal {
        margin-left: 100px;
      }

      .col-1 {
        max-width: 30vw;

        .slide-btn {
          max-width: 140px;
          transform: rotate(90deg);
          margin-top: -85px;
          margin-left: -10px;
          margin-bottom: 90px;
        }

        .p-1 {
          margin-top: -30px;
        }

        p {
          min-width: 250px;
          font-size: 1rem;
          strong { color: $roxo;}
        }

        .projs-navgation {
          a {
            padding: 5px 10px;
            margin: 0px 5px 20px 5px;
            font-size: 20px;
          }
        }

        .contato {
          .name-2 {
            margin: 80px 0px 90px 20px;
            transform: rotate(-10deg);

            h2 {
              font-size: 25px;
              left: 0px;

              .first {
                padding: 0px 0px 0px 30px;
              }
            }
          }

          p {
            margin-top: -60px;
          }
        }
      }

      .col-2 {
        margin-left: 100px;
        width: 61vw;

        .name-2 {
          margin: -30px 0px 90px -50px;
          transform: rotate(-10deg);

          h2 {
            font-size: 30px;
            left: 0px;

            .first {
              padding: 0px 0px 0px 30px;
            }
          }
        }

        .poema {
          // font-weight: bold;
          color: $roxo;
        }

        p {
          // padding-left: 60px;
          min-width: 350px;
        }
      }
    }

    .line {
      width: 5px;
      height: 85vh;
      left: 133px;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 50px 100px;
      padding: 5px 20px;

      .back-icon {
        height: 15px;
        margin-right: 10px;
      }
    }

    .parallax {
      div#bg-3-1 {
        background: url("../assets/proj-bg/d-malha.png");
        width: 1503px;
        height: 852px;
        transform: rotate(-20deg);
        left: 100px;
        margin-top: -50px;
        opacity: .5;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  #sobre {
    .name {
      top: 80px;
      left: 760px;
      transform: rotate(-10deg);

      h2 {
        font-size: 30px;
        left: 0px;

        .first {
          padding: 0px 0px 0px 30px;
        }
      }
    }

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

    .line {
      width: 5px;
      height: 85vh;
      left: 31vw;
    }

    .back-btn {
      font-size: 20px;
      margin: 0px 0px 70px 30vw;
      padding: 5px 20px;

      .back-icon {
        height: 15px;
        margin-right: 10px;
      }
    }

   .parallax {
      div#bg-3-1 {
        background: url("../assets/proj-bg/d-malha.png");
        width: 1503px;
        height: 852px;
        transform: rotate(-25deg);
        scale: 3;
        left: 700px;
        margin-top: -50px;
      }
    }
  }
}
</style>
