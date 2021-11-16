<template>
<div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Signout extends Vue {
  mounted() {
    this.$router.push('/signin');
  }
}
</script>

<style lang="scss" scoped>
</style>
