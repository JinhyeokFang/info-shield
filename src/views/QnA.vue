<template>
  <section class="qna">
    <h1>Q&A</h1>
    <button>작성하기</button>
    <QuestionItem v-for="question in questions" :key="question.id" :question="question"/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QuestionItem from '../components/QuestionItem.vue';
import Question from '../interfaces/question';

@Component({
  components: {
    QuestionItem
  }
})
export default class QnA extends Vue {
  private questions: Question[] = [
    { id: 1, title: '질문1', content: 'lorem ipsum', isAnswered: true },
    { id: 2, title: '질문2', content: 'lorem ipsum', isAnswered: false }
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
</style>
