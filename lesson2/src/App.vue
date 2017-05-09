<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
  import counter from './components/counter.vue';
  export default {
    name: 'app',
    components: {counter},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

</style>
