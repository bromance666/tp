<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TpButton>normal</TpButton>
  <view style="margin-left: 20px">
    <TpButton type="primary">primary</TpButton>
  </view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TpButton from '@comps/button/index';
  import style from 'index.less';
  let s: number;
  s = '123';
  function a(): void {
    return 1123;
  }
  a();
  export default defineComponent({
    name: 'App',
    components: {
      TpButton,
    },
    methods: {
      test() {
        let s: number;
        s = '123';
        return s;
      },
    },
  });
</script>

<style lang="stylus">
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
