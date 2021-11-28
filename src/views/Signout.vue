<template>
<div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import user from '../api/user';

@Component
export default class Signout extends Vue {
  async mounted() {
    await user.logout();
    this.$router.push('/signin');
  }
}
</script>

<style lang="scss" scoped>
</style>
