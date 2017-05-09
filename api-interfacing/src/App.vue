<template>
  <div id="app">
  <pokemon></pokemon>
  </div>
</template>

<script>
  import Pokemon from './components/pokemon.vue';
  export default {
    name: 'app',
    components: { Pokemon },
    data () {
      return {
      }
    }
  }
</script>

<style>

</style>
