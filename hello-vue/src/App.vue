<template>
  <div id="app">
    <message> HI! </message>
    <message> Color Spin </message>
    <message> A great Module </message>
  </div>
</template>

<script>
  import message from './components/message.vue'
  export default {
    name: 'app',
    components: {message},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">

</style>
