<template>
  <img alt="Vue logo" src="./assets/favicon.ico" />
  <tp-button>normal</tp-button>
  <div style="margin-left: 20px">
    <tp-button type="primary">primary</tp-button>
  </div>
  <div class="cmp-item"><tp-switch></tp-switch></div>
  <div class="cmp-item"><tp-switch disabled></tp-switch></div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: {},
    methods: {},
  });
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .cmp-item {
    margin-top: 20px;
  }
</style>
