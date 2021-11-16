<template>
  <section class="workbook">
    <h1>문제 풀이</h1>
    <div class="tab">
      <button>Cent OS</button>
      <button>Cent OS</button>
      <button>Cent OS</button>
      <button>Cent OS</button>
    </div>
    <div class="container">
      <Card v-for="lecture in lectures" :key="lecture.id" :lecture="lecture"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '../components/Card.vue';
import Lecture from '../interfaces/lecture';

@Component({
  components: {
    Card
  }
})
export default class Workbook extends Vue {
  private lectures: Lecture[] = [
    {id: 1, title: "CentOS 시스템 보안", content: "lorem ipsum", manager: "매니저"},
    {id: 2, title: "CentOS 시스템 보안", content: "lorem ipsum", manager: "매니저"},
    {id: 3, title: "CentOS 시스템 보안", content: "lorem ipsum", manager: "매니저"},
    {id: 4, title: "CentOS 시스템 보안", content: "lorem ipsum", manager: "매니저"}
  ]; 
}
</script>

<style lang="scss" scoped>
  section {
    @include flex-column-start;
    margin: 20px 60px;
    
    button {
      width: 150px;
      height: 60px;

      margin: 0 20px 20px 0; 

      background-color: $app-color;
      border: none;
      border-radius: 6px;
      font-size: 20px;
      cursor: pointer;

      color: white;
      filter: drop-shadow(0px 3px 3px $shadow-color);
    }

    .tab {
      @include flex-row-center;
      height: 90px;
    }

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
