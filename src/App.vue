<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TpButton>normal</TpButton>
  <view style="margin-left: 20px">
    <TpButton type="primary">primary</TpButton>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TpButton from '@comps/button/index';
export default defineComponent({
  name: 'App',
  components: {
    TpButton
  }
})
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
