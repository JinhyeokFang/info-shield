<template>
  <div class="answer">
    <h2>Answer</h2>
    <p>
      {{ answer.content }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Answer from '../interfaces/answer';

@Component
export default class AnswerItem extends Vue {
  @Prop() private readonly answer!: Answer;
}
</script>

<style scoped lang="scss">
  .answer {
    @include flex-column-start;

    width: 400px;
    height: 300px;
    
    margin-top: 20px;
    padding-left: 20px;

    filter: drop-shadow(0px 3px 3px $shadow-color);
    background-color: white;

    h2 {
      font-size: 20px;
    }
  }
</style>
