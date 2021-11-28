<template>
  <section class="education">
    <h1>강의 수강</h1>
    <div class="container">
      <Card v-for="lecture in lectures" :key="lecture.id" :lecture="lecture"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import classapi from '../api/class';
import Card from '../components/Card.vue';
import Lecture from '../interfaces/lecture';

@Component({
  components: {
    Card
  }
})
export default class Education extends Vue {
  private lectures: Lecture[] = [];

  mounted() {
    this.loadLectures();
  }

  async loadLectures() {
    const response = await classapi.getClasses();
    console.dir(response.data);
    this.lectures = [];
    for (let lecture of response.data.data) {
      this.lectures.push({ id: lecture.idx, title: lecture.title, content: lecture.content, manager: '' });
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    @include flex-column-start;
    margin-top: 20px;
    padding-left: 60px;

    box-sizing: border-box;

    h1 {
      font-size: 30px;
      color: #6f6f6f;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
