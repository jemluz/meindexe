<template lang="pug">
  div#q-page
    nav-bar(:text="object.title" :isEmojis="false")
    title-sub(:title="object.qList[nQ].text" subtitle="marque uma das alternativas" :isStrike="false")

    div.q-list(v-if="!showScore") 
      div.q-q
        a(@click="doCount(answer.score)" v-for="answer in object.qList[nQ].aList") {{ answer.text }} 

    div.score(v-else)
      p Você fez #[strong {{ sum }}] pontos!

      div.new-q
        a(@click="reset()") #[fa-icon(icon="redo-alt")] responder novamente
         
</template>

<script>
import { baseApiUrl, showError } from '@/config/global'
import axios from 'axios'

export default {
  name: 'Qpage',
  props: ['title', 'id'],
  data: () => {
    return {
      object: null,
      nQ: 0,
      sum: 0,
      showScore: false
    }
  },
  methods: {
    reset() {
      this.nQ = 0
      this.sum = 0
      this.showScore = false
    },
    doCount(p) {
      if(this.nQ < (this.object.qList.length - 1)) {
        this.sum =+ p
        this.nQ++
      } else {
        this.showScore = true
      }
    },
    loadObject() {
      const url = `${baseApiUrl}/questionnaires/${this.id}`
      axios.get(url).then(res => { this.object = res.data }).catch(showError)
    },
  },
  mounted () {
    this.loadObject()
  }
}
</script>

<style lang="scss">
#q-page {
  .q-list {
    display: flex;
    flex-direction: column;

    max-width: 400px;
    margin: 0px auto;

    .q-q {
      display: flex;
      flex-direction: column;

      a { 
        color: #777; 
        border: 1px solid #777;
        box-shadow: 0px 0px 20px 0px transparent;

        text-decoration: none;
        transition: all .3s ease-in;

        padding: 10px 20px;
        border-radius: 5px;
        margin-bottom: 10px;

        &:hover {
          cursor: pointer;
          .icon { color: white; }

          color: white;
          background-color: #ff6347;
          border-color: tomato;
          box-shadow: 0px 0px 20px 0px #ff634750;
        }
      }
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #q-page {
    .q-list {
      max-width: 80vw;

      .q-q {
        a { 
          margin-bottom: 20px;
        }
      }
    }

    .score {
      font-size: 20px;

      strong {
        background-color: tomato;
        color: #fff;
        border-radius: 10px;

        padding: 10px;
        margin: 0px 5px;
      }
    }
  }
}
</style>
