<template>
  <div class="container">
    <div class="form">
      <div class="logo">

      </div>
      <div class="input">
        <div class="tab">
          <button @click="tab = 'Signin'" :class="{highlighted: tab === 'Signin'}">SIGN IN</button>
          <button @click="tab = 'Signup'" :class="{highlighted: tab === 'Signup'}">SIGN UP</button>
        </div>
        <div class="input-container signin" v-if="tab === 'Signin'">
          <input type="text" placeholder="ID">
          <input type="password" placeholder="Password">
          <button @click="signin()">SIGN IN</button>
        </div>
        <div class="input-container signup" v-if="tab === 'Signup'">
          <input type="text" placeholder="ID">
          <input type="password" placeholder="Password">
          <input type="password" placeholder="Password Retype">
          <input type="text" placeholder="Name">
          <button @click="signup()">SIGN UP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const Tab = {
  Signin: 'Signin',
  Signup: 'Signup'
}

@Component({
  components: {
  },
})
export default class Signin extends Vue {
  private tab: string = Tab.Signin;

  signin() {
    this.$router.push('/');
  }

  signup() {
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>
  .container {
    @include flex-center;

    width: 100vw;
    height: 100vh;

    background-color: #ddd;
  }

  .form {
    @include flex-row-between;

    width: 800px;
    height: 500px;

    background-color: white;
    filter: drop-shadow(0px 3px 3px $shadow-color);

    .logo {
      background-color: $app-color;
      width: 350px;
      height: 500px;
    }

    .input {
      @include flex-column-center;
      width: 450px;
      height: 500px;

      .tab {
        padding-top: 50px;
        width: 350px;
        border-bottom: 3px solid #9f9f9f;

        button {
          background-color: transparent;
          border: none;
          color: #9f9f9f;
          font-size: 15px;
          padding: 3px;
          margin: 5px;
          cursor: pointer;

          &.highlighted {
            font-weight: bolder;
          }
        }
      }

      .input-container {
        @include flex-column-center;
        width: 350px;

        &.signin input {
          margin-top: 50px;
        }

        &.signup input {
          margin-top: 15px;
        }

        input {
          width: 350px;
          height: 50px;

          font-size: 20px;

          border: none;
          border-bottom: 3px solid $app-color;
        }

        button {
          width: 120px;
          height: 50px;

          margin-top: 30px;

          border-radius: 6px;
          background-color: $app-color;
          border: none;
          font-size: 20px;
          cursor: pointer;

          color: white;
          filter: drop-shadow(0px 3px 3px $shadow-color);
        }
      }
    }
  }
</style>
