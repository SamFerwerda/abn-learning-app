<template>
  <div v-if="!!currentQuestion" class="box">
    <h1>{{ currentQuestion.title }}</h1>
    <hr>
    <p v-html="question"></p>
    <div v-if="currentQuestion.images">
      <div v-if="currentQuestion.images.length > 0 && currentQuestion.images.length < 2">
        <div v-for="image in currentQuestion.images">
          <div class="align-center">
            <img class="image-big" v-bind:src="image.src">
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="image in currentQuestion.images">
          <img class="image-multiple" v-bind:src="image.src">
        </div>
      </div>
    </div>
    <div v-show="currentQuestion.inputType === 'slider'">
      <input type="range" min="1000" max="5000" v-model="salary" class="slider" id="myRange">
      <p><strong>Inkomen:</strong> <span>{{ salary }}</span> per maand</p>
    </div>
    <div class="answer-box" v-if="currentQuestion.inputType === 'checkbox'">
      <div v-for="input in currentQuestion.inputs" class="answers d-flex flex-row justify-start">
          <input type="checkbox" v-on:click="checkAnswer($event, input.value)" id="answers" name="answers">
          <img class="icon" v-bind:src="input.icon"> 
          <label for="answers">{{ input.text }}</label>
      </div>
    </div>
    <div v-if="currentQuestion.inputType === 'open'">
      <input type="text" class="openInput" v-bind:placeholder="currentQuestion.placeholder">
    </div>
    <div class="answer-box" v-if="currentQuestion.answers">
      <div v-for="answer in currentQuestion.answers" class="answers">
        <img class="icon" v-bind:src="answer.icon">
        <p>{{ answer.text }}</p>
      </div>
  </div>
    <div v-if="currentQuestion.buttons">
      <div v-for="button in currentQuestion.buttons" :key="button.text">
        <button v-on:click="invokeFunction(button.buttonClicked, button.value, button.state)">
          {{  button.text }}
          <img v-if="button.image" v-bind:src="button.image">
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'pinia';
import useCounterStore from '../../stores/counter';
import usePersonStore from '../../stores/person';
import { mapActions } from 'pinia';

export default {
  name: 'Question',
  data() {
    return {
      salary : 1000,
      possibleCoins: 0
    }
  },
  computed: {
    ...mapState(useCounterStore, {
      currentQuestion: 'getQuestion'
    }),
    question(){
      return this.currentQuestion.question;
    }
  },
  methods: {
    invokeFunction(functionName, value, state) {
        this[functionName](value, state);
    },
    ...mapActions(useCounterStore, {incrementIndex: 'increment', incrementTwo: 'incrementByTwo', addCoins: 'addMoney'}),
    incrementCurrentQuestion(value){
      this.incrementIndex();
      this.addCoins(value)
    },
    incrementCurrentQuestionByTwo(value) {
      this.incrementTwo();
      this.addCoins(value)
    },
    checkboxCheck(value) {
      this.incrementIndex();
      this.addCoins(value);
    },
    changeState(value, state) {
      this.setState(`${state}`);
      this.incrementIndex();
    },
    getScore(){
      this.setState('score');
    },
    checkAnswer(event, value) {
      if(event.target.checked){
        this.possibleCoins += value
        return
      } 
      this.possibleCoins -= value
    },
    submitAnswer() {
      this.addCoins(this.possibleCoins)
      this.incrementIndex();
    },
    ...mapActions(usePersonStore, {
            setState: 'setState'
    }),
    ...mapActions(useCounterStore, {
        setQuestion: 'setQuestion',
    })
  }
}
</script>

<style>
.image-big {
  margin-top: 1em;
  max-width: 100%;
}

.image-multiple {
  margin-top: 1em;
  max-width: 100%;
}

.align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.answer-box {
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
}

.icon {
  height: 18px;
  padding-right: 1em;
}

#answers {
  margin-right: 1em;
}

.answers {
  margin-bottom: 0.2em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.answers p {
  margin-top: 0;
}

.slider {
  width: 100%;
  margin-top: 1em;
}
</style>