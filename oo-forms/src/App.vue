<template>
  <div id="app" class="container box">
    <span class="box message is-danger" v-if="errors.data">Help!</span>
    <form method="POST" action="" @submit.prevent="onSubmit">
      <div class="control">
        <label for="name" class="label">Post title</label>
        <input type="text" id="name" name="name" class="input" v-model="name" >
      </div>

      <div class="control">
        <label for="description" class="label">Project Description</label>
        <input type="text" id="description" name="description" class="input" v-model="description" >
      </div>

      <div class="control">
        <button class="button is-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'app',
    data () {
      return {
        name: '',
        description: '',
        errors: {}
      }
    },
    methods: {
      onSubmit: function(){
        axios.post('http://jsonplaceholder.typicode.com/post', this.data)
                .then(response => alert('success'))
                .catch(error => {
                  console.log(error)
                  this.errors = error;
                })
      }
    }
  }
</script>

<style>

</style>
