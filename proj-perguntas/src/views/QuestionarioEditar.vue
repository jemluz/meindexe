<template lang="pug">
  div#q-create
    nav-bar(text="Editar Questionário" :isEmojis="false")
    title-sub(title="Adicione ou remova perguntas" subtitle="não esqueça de conferir as respostas" :isStrike="false")

    input.nome(
      type="text" 
      placeholder="Nome do quiz"
      v-model='object.title'
      required
    )
    
    form.form-perguntas(v-for="question in object.qList")
      div.pergunta
        router-link(to="") #[fa-icon.icon.mr-3(icon="trash-alt" @click="removeQuestion()")] 

        input(
          type="text" 
          placeholder="Digite a pergunta"
          v-model='question.text'
          required
        )

      div.resposta(v-for="answer in question.aList")
        input(
          type="text" 
          placeholder="Digite a resposta"
          v-model='answer.text'
          required
        )

        input.ml-3.score(
          type="tel" 
          placeholder="Pts"
          v-model='answer.score'
          required
        )

    p(@click="addQuestion()") #[fa-icon.icon.mr-2(icon="plus")] Nova Pergunta


    footer.new-q
      p(@click="doUpdate()") #[fa-icon.icon.mr-3(icon="check")] Concluir


</template>

<script>
import { baseApiUrl, showError } from '@/config/global'
import axios from 'axios'

export default {
  name: 'QEdit',
  props: ['title', 'id'],
  data: () => {
    return {
      object: {},
      newQList: [ 
      ]
    }
  },
  methods: {
    loadObject() {
      const url = `${baseApiUrl}/questionnaires/${this.id}`
      axios.get(url).then(res => { 
        this.object = res.data 
      }).catch(showError)
    },
    addQuestion() {
      let newQ = { 
        text: '',
        quizId: this.object.id,
        aList: [
          { text: '', score: null, questionId: null },
          { text: '', score: null, questionId: null },
          { text: '', score: null, questionId: null },
        ]
      }

      this.object.qList.push(newQ)
      this.newQList.push(newQ)
    },
    async doUpdate() {
    
      let urlQ = `${baseApiUrl}/questions`
      let urlA = `${baseApiUrl}/answers`
      let question = {}
      let answer = {}

      for(let i = 0; i < this.newQList.length; i++) {
        question.text = this.newQList[i].text 
        question.quizId = this.newQList[i].quizId 

        // primeiro registra a pergunta
        await axios.post(urlQ, question).then(res => { 
          question.id = res.data.id
          this.$toasted.global.defaultSucess()
        }).catch(showError) 

        for(let j = 0; j < this.newQList[i].aList.length; j++) {
          answer.text = this.newQList[i].aList[j].text 
          answer.score = this.newQList[i].aList[j].score 
          answer.questionId = question.id

          // em seguida cadastra todas as respostas da pergunta
          await axios.post(urlA, answer).then(() => { 
            this.$toasted.global.defaultSucess()
          }).catch(showError) 

        }
      }

      return this.$router.push({ path: '/'})
    },
    removeQuestion() {
      if (this.object.qList.length > 1) {
        this.object.qList.pop()
      }
    }
  },
  mounted () {
    this.loadObject()
  }
}
</script>

<style lang="scss">
#q-create {
  
  form {
    margin-bottom: 50px;

    input {
      box-shadow: 0px 0px 10px 0px #ff634700;
      border: 1px solid #999;
      border-radius: 5px;
      padding: 5px 10px;

      transition: all .3s ease;
      outline: none;

      &:hover,
      &:focus {
        border-color:tomato;
        box-shadow: 0px 0px 10px 0px #ff634760;
      }
    }

    .pergunta {
      input {
        min-width: 300px;
      }
      margin-bottom: 20px;
    }

    .resposta {
      input {
        width: 300px;
      }

      .score {
        max-width: 50px;
      }

      margin-bottom: 10px;
    }

    .icon {
      color: #555;

      &:hover {
        color: tomato;
      }
    }
  }

  p {
    color: #555;

    &:hover {
      color: tomato;
      cursor: pointer;
    }
  }
  
}
</style>
