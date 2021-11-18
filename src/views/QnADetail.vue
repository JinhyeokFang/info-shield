<template>
  <section class="qna">
    <h1>Q&A</h1>
    <div class="container">
      <div>
        <QuestionDetailItem :question="question" />
        <br>
        <button>답변하기</button>
      </div>
      <div class="answers">
        <AnswerItem v-for="answer in answers" :key="answer.id" :answer="answer"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import QuestionDetailItem from '../components/QuestionDetailItem.vue';
import AnswerItem from '../components/AnswerItem.vue';
import Question from '../interfaces/question';
import Answer from '../interfaces/answer';

@Component({
  components: {
    QuestionDetailItem,
    AnswerItem
  }
})
export default class QnADetail extends Vue {
  @Prop() private readonly id!: number;
  private question: Question = { id: 1, title: '질문1', content: 'lorem ipsum', isAnswered: true };
  private answers: Answer[] = [
    { id: 1, content: 'lorem ipsum' },
    { id: 2, content: 'lorem ipsum' },
    { id: 3, content: 'lorem ipsum' },
    { id: 4, content: 'lorem ipsum' },
    { id: 5, content: 'lorem ipsum' },
    { id: 6, content: 'lorem ipsum' }
  ];
}
</script>

<style lang="scss" scoped>
  section {
    @include flex-column-start;
    margin: 20px 0 0 60px;

    h1 {
      font-size: 30px;
      color: #6f6f6f;
    }

    button {
      width: 120px;
      height: 50px;

      border-radius: 6px;
      background-color: $app-color;
      border: none;
      font-size: 20px;
      cursor: pointer;

      color: white;
      filter: drop-shadow(0px 3px 3px $shadow-color);
    }
  }

  .container {
    @include flex-row-between;
    width: 1300px;

    .answers {
      margin-top: -50px;
    }
  }
</style>
