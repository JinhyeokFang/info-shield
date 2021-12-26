<template>
  <div class="question" @click="goToDetailPage(question.id)">
    <div class="title">
      <h2>{{ question.title }}</h2>
      <button>답변확인</button>
    </div>
    <div class="content">
      <p>
        {{ question.content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Question from '../interfaces/question';

@Component
export default class QuestionItem extends Vue {
  @Prop() private readonly question!: Question;

  goToDetailPage(id: number) {
    this.$router.push('/qna/'+id);
  }
}
</script>

<style scoped lang="scss">
  .question {
    @include flex-column-center;

    width: 800px;
    height: 240px;
    
    margin-top: 20px;

    filter: drop-shadow(0px 3px 3px $shadow-color);

    .title {
      @include flex-row-between;
      @include flex-row-center;

      width: 800px;
      height: 60px;

      padding-left: 10px;
      box-sizing: border-box;
      font-size: 20px;
      color: black;
      background-color: white;
      
      button {
        width: 150px;
        height: 60px;

        background-color: $app-color;
        border: none;
        font-size: 20px;
        cursor: pointer;

        color: white;
      }
    }

    .content {
      width: 800px;
      height: 180px;
      box-sizing: border-box;

      padding-left: 10px;
      background-color: white;

      button {
        height: 60px;
        width: 100px;

        background-color: #cfcfcf;
        border: none;
        cursor: pointer;

        color: #6f6f6f;
        font-size: 20px;
      }
    }
  }
</style>
