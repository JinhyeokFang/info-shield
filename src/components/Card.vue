<template>
  <div class="card">
    <div class="image">

    </div>
    <div class="content">
      <h2>{{ lecture.title }}</h2>
      <p>{{ lecture.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Lecture from '../interfaces/lecture';

@Component
export default class Card extends Vue {
  @Prop() private readonly lecture!: Lecture;
}
</script>

<style scoped lang="scss">
  .card {
    @include flex-column-center;

    width: 300px;
    height: 300px;

    margin: 0 30px 30px 0;

    cursor: pointer;
    filter: drop-shadow(0px 3px 3px $shadow-color);

    .image {
      width: 300px;
      height: 210px;

      background-color: $app-color;
    }

    .content {
      width: 300px;
      height: 90px;
      box-sizing: border-box;

      padding-top: 5px;
      padding-left: 10px;

      background-color: white;

      h2 {
        margin: 0;
        color: #6f6f6f;
      }

      p {
        margin: 0;
        color: #6f6f6f;
      }
    }
  }
</style>
