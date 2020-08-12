<template lang="pug">
  div#q-create
    nav-bar(text="Criar Questionário" :isEmojis="false")
    title-sub(title="Adicione perguntas" subtitle="não esqueça de adicionar as respostas" :isStrike="false")

    input.nome(
      type="text" 
      placeholder="Nome do quiz"
      v-model='object.title'
      required
    )

    form.form-perguntas(v-for="question in object.qList")
      div.pergunta
        router-link(to="") #[fa-icon.icon.mr-3(icon="minus" @click="removeQuestion()")] 

        input(
          type="text" 
          placeholder="Digite a pergunta"
          v-model='question.text'
          required
        )

        router-link(to="") #[fa-icon.icon.ml-3(icon="plus" @click="addQuestion()")] 

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

    
    footer.new-q
      p(@click="saveObject()") #[fa-icon.icon.mr-3(icon="check")] Concluir

</template>

<script>
import { baseApiUrl, showError } from '@/config/global'
import axios from 'axios'

export default {
  name: 'QCreate',
  data: () => {
    return {
      object: { 
          id: null,
          title: '',
          qList: [
            {
              text: '',
              quizId: null,
              aList: [
                { text: '', score: null, questionId: null },
                { text: '', score: null, questionId: null },
                { text: '', score: null, questionId: null },
              ]
            }
          ]
        }
    }
  },
  methods: {
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
    },
    async saveObject() {
    
      let urlQuiz = `${baseApiUrl}/questionnaires`
      let urlQ = `${baseApiUrl}/questions`
      let urlA = `${baseApiUrl}/answers`

      // inicializa os objetos para as requisições
      let quiz = {}
      let question = {}
      let answer = {}

      quiz.title = this.object.title

      // primeiro registra o questionario
      await axios.post(urlQuiz, quiz).then(res => { 
        quiz.id = res.data.id
        this.$toasted.global.defaultSucess()
      }).catch(showError) 

      for(let i = 0; i < this.object.qList.length; i++) {
        question.text = this.object.qList[i].text 
        question.quizId = quiz.id

        // depois registra as pergunta
        await axios.post(urlQ, question).then(res => { 
          question.id = res.data.id
          this.$toasted.global.defaultSucess()
        }).catch(showError) 

        for(let j = 0; j < this.object.qList[i].aList.length; j++) {
          answer.text = this.object.qList[i].aList[j].text 
          answer.score = this.object.qList[i].aList[j].score 
          answer.questionId = question.id

          // em seguida cadastra todas as respostas da pergunta
          await axios.post(urlA, answer).then(() => { 
            this.$toasted.global.defaultSucess()
          }).catch(showError) 
        }

        delete question.id
      }

      return this.$router.push({ path: '/'})
    },
    removeQuestion() {
      if (this.object.qList.length > 1) {
        this.object.qList.pop()
      }
    }
  }
}
</script>

<style lang="scss">
#q-create {
  .nome {
    margin-bottom: 20px;
    padding: 5px 10px;
  }
  
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
        max-width: 100px;
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
  
}

// MOBILE
@media only screen and (max-width: 900px) {
  #q-create {
    .nome {
      margin-bottom: 50px;
      width: 80vw;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // max-width: 80px;  
      margin: 0px 40px;

      .pergunta {
        input {
          width: 100px !important;
          min-width: 200px !important;
        }
        margin-bottom: 20px;
      }

      .resposta {
        display: flex;
        input {
          width: 200px !important;
        }

        .score {
          max-width: 100px;
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
    
  }
}
</style>
