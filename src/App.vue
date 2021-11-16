<template>
  <div id="app">
    <header v-if="showHeader">
      <div id="logo">
        <h1>Info Shield</h1>
      </div>
      <nav>
        <button v-for="item in menu" :key="item.path" button :class="{highlighted: currentPath === item.path}"><router-link :to="item.path">{{item.name}}</router-link></button>
        <div class="profile">
          프로필
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from './interfaces/menu';

@Component({
  components: {

  },
})
export default class App extends Vue {
  private currentPath = '/';

  get menu(): Menu[] {
    // if (this.currentPath == '/') {
    //   return [
    //   ]
    // } else {
      return [
        {path: '/', name: '강의 수강'},
        {path: '/server', name: '서버 연결'},
        {path: '/workbook', name: '문제 풀이'},
        {path: '/qna', name: 'Q&A'},
        {path: '/signout', name: '로그아웃'},
      ]
    // }
  }

  get showHeader() {
    return this.currentPath !== '/signin';
  }

  setMenu() {
    this.currentPath = this.$router.currentRoute.path;
  }

  mounted() {
    this.setMenu();
  }

  updated() {
    this.setMenu();
  }
}
</script>

<style lang="scss">
  body {
    background-color: $background-color;
    margin: 0;
    width: 100vw;
    min-height: 100vh;
  }

  * {
    font-family: 'IBM Plex Sans KR', sans-serif;
    text-decoration: none;
  }
</style>

<style lang="scss" scoped>
  header {
    @include flex-row-between;
    @include flex-row-center;
    background-color: $app-color;
    filter: drop-shadow(0px 3px 3px $shadow-color);

    height: 70px;
    
    padding: 0 20px;

    #logo {
      h1 {
        margin: 0;

        color: white;
        font-size: 30px;
      }
    }

    nav {
      @include flex-row-between;

      button {
        width: 120px;
        height: 40px;
        margin: 20px;
        border-radius: 5px;

        background-color: transparent;
        border: none;

        a {
          color: white;
          font-size: 15px;
        }

        &.highlighted {
          background-color: white;

          a {
            color: $app-color;
          }
        }
      }
    }
  }

</style>
