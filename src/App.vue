<template>
  <div id="app">
    <header v-if="showHeader">
      <div id="logo">
        <h1>Info Shield</h1>
      </div>
      <nav>
        <button v-for="item in menu" :key="item.path" button :class="{highlighted: currentPath === item.path}"><router-link :to="item.path">{{item.name}}</router-link></button>
        <div class="profile">
          {{ name }}님 안녕하세요!
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import user from './api/user';
import Menu from './interfaces/menu';

@Component({
  components: {

  },
})
export default class App extends Vue {
  private currentPath = '/';
  private name = "";

  get menu(): Menu[] {
      return [
        {path: '/', name: '강의 수강'},
        {path: '/server', name: '서버 연결'},
        {path: '/workbook', name: '문제 풀이'},
        {path: '/qna', name: 'Q&A'},
        {path: '/signout', name: '로그아웃'},
      ]
  }

  get showHeader() {
    return this.currentPath !== '/signin';
  }

  setMenu() {
    this.currentPath = this.$router.currentRoute.path;
  }

  async checkUserInfo() {
    try {
      const profile = await user.getInfo();
      this.name = profile.data.data.name;
      if (profile.status === 200 && this.currentPath === '/signin')
        this.$router.push('/');
    } catch (error) {
      if (error.response.status === 401 && this.currentPath !== '/signin')
        this.$router.push('/signin');
    }
  }

  mounted() {
    this.setMenu();
    this.checkUserInfo();
  }

  updated() {
    this.setMenu();
    this.checkUserInfo();
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
