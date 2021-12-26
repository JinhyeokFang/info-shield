<template>
  <section class="server">
    <h1>컨테이너</h1>
    <div class="container">
      <ContainerItem v-for="container in containers" :key="container.id" :container="container"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContainerItem from '../components/ContainerItem.vue';
import Container, { ContainerStatus } from '../interfaces/container';

@Component({
  components: {
    ContainerItem
  }
})
export default class Server extends Vue {
  private containers: Container[] = [
    {id: 1, name: "Cent OS", status: ContainerStatus.created},
  ]; 
}
</script>

<style lang="scss" scoped>
  section {
    @include flex-column-start;
    margin: 20px 60px;

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
