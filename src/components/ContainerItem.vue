<template>
  <div class="container">
    <div class="image">
      {{ container.name }}
    </div>
    <div class="content">
      <button @click="create" :class="{disabled: status !== 0}">{{ status === 1 ? '생성중...' : '생성'}}</button>
      <button @click="connect" :class="{disabled: status !== 2}">연결</button>
      <button @click="remove" :class="{disabled: status !== 2}">{{ status === 3 ? '삭제중...' : '삭제'}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Container, { ContainerStatus } from '../interfaces/container';

@Component
export default class ContainerItem extends Vue {
  @Prop() private readonly container!: Container;
  private status: ContainerStatus = ContainerStatus.notCreated;

  create() {
    if (this.status !== 0)
      return;
    this.status = 1;
    setTimeout(() => {
      this.status = 2;
    }, 5000);
  }

  connect() {
    if (this.status !== 2)
      return;
    window.open("https://118.67.133.248:4200/");
  }

  remove() {
    if (this.status !== 2)
      return;
    this.status = 3;
    setTimeout(() => {
      this.status = 0;
    }, 4000);
  }
}
</script>

<style scoped lang="scss">
  .container {
    @include flex-column-center;

    width: 300px;
    height: 240px;

    margin: 0 30px 30px 0;

    filter: drop-shadow(0px 3px 3px $shadow-color);

    .image {
      @include flex-center;

      width: 300px;
      height: 180px;

      font-size: 40px;
      font-weight: bold;
      color: white;
      background-color: $app-color;
    }

    .content {
      @include flex-row-center;

      width: 300px;
      height: 60px;
      box-sizing: border-box;

      background-color: white;

      button {
        height: 60px;
        width: 100px;

        background-color: #cfcfcf;
        border: none;
        cursor: pointer;

        color: #6f6f6f;
        font-size: 20px;

        &.disabled {
          cursor: not-allowed;
          background-color: #afafaf;
        }
      }
    }
  }
</style>
