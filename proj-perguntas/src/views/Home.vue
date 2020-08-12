<template lang="pug">
  div#questionarios
    nav-bar(text="Questionários" :isEmojis="true")
    title-sub(title="Responda e descubra" subtitle="se você tem mesmo essa moral toda" :isStrike="true")

    div.q-list.desktop-only
      div.q-title(v-for="quiz in objects")
        div
          router-link.q-action(to='')
            fa-icon.icon(icon="trash-alt" @click="qDelete(quiz.id)")

          router-link.q-action(:to='{ name: "q-edit", params: { title: quiz.title, id: quiz.id } }')
            fa-icon.icon(icon="edit")

        router-link.q-link(:to='{ name: "questionario-page", params: { title: quiz.title, id: quiz.id } }') #[fa-icon.icon.mr-3(icon="list-ol")] {{ quiz.title }} 

        
    footer.new-q
      router-link(to="/criar-questionario") #[fa-icon.icon.mr-3(icon="plus")] Criar questionario

</template>

<script>
import { baseApiUrl, showError } from '@/config/global'
import axios from 'axios'

export default {
  name: 'Home',
  data: () => {
    return {
      objects: []
    }
  },
  methods: {
    reset() {
      this.objects = {}
      this.loadObjects()
    },
    loadObjects() {
      const url = `${baseApiUrl}/questionnaires`
      axios.get(url).then(res => { this.objects = res.data }).catch(showError)
    },
    qDelete(id) {
      const url = `${baseApiUrl}/questionnaires/${id}`
      axios.delete(url).then(() => {
        this.$toasted.global.defaultSucess()
        this.reset()
      }).catch(showError)
    }
  },
  mounted () {
    this.loadObjects()
  }
}
</script>

<style lang="scss">
#questionarios {
  .q-list {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    max-width: 500px;
    width: auto;
    margin: 0px auto;
    padding: 0px;

    .q-title {
      margin-bottom: 20px;

      .q-link { 
        color: #777; 
        text-decoration: none;
        transition: all .3s ease-in;

        padding: 10px 20px;
        border-radius: 5px;

        .icon { 
          color: tomato; 
          transition: all .3s ease-in;
        }

        &:hover {
          cursor: pointer;
          .icon { color: white; }

          color: white;
          background-color: tomato;
        }
      }

      .q-action { 
        color: #777; 
        text-decoration: none;
        transition: all .3s ease-in;

        border-radius: 5px;

        .icon { 
          color: #555; 
          transition: all .3s ease-in;
        }

        &:hover {
          cursor: pointer;
          .icon { color: tomato; }
        }
      }
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #questionarios {
    .q-list {
      max-width: 90vw;

      .q-title {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        margin-bottom: 20px;

        div {
          display: flex;
          flex-direction: row;
        }

        .q-link { 
          text-align: left;
          font-size: 14px;
          border-radius: 5px;
          padding-top: 0px;
          padding-left: 10px;

          .icon { 
            
          }

          &:hover {
            cursor: pointer;
            .icon { color: white; }

            color: white;
            background-color: tomato;
          }
        }

        .q-action { 
          border-radius: 5px;

          .icon { 
            font-size: 16px;
            margin: 0px 10px;
          }

          &:hover {
            cursor: pointer;
            .icon { color: tomato; }
          }
        }
      }
    }
  }
}

// desk
@media only screen and (min-width: 901px) {
  #questionarios {
    
    .q-list {
      display: flex;
      flex-direction: column;
      max-width: auto;

      margin: 0px auto;

      .q-title {
        display: flex;
        align-items: center;
        flex-direction: row;

        margin-bottom: 20px;

        div {
          display: flex;
          flex-direction: row;
        }

        .q-link { 
          font-size: 16px;
          padding-left: 10px;
        }

        .q-action { 
          border-radius: 5px;

          .icon { 
            font-size: 16px;
            margin: 0px 10px;
          }

        }
      }
    }
  }
}
</style>
