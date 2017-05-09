<template>
    <div>
        <h1>Hunt for a pokemon</h1>
        <button @click="fetchPokemon">Search!</button>
        <h1 v-show="name">You found a {{ name }} !!</h1>
        <img :src="sprite" v-show="sprite">
    </div>
</template>

<script type="text/babel">
        export default {
            methods:{
                fetchPokemon(){
                    var pokeNumber = Math.floor(Math.random() * 151);
                    axios.get('http://pokeapi.co/api/v2/pokemon/'+pokeNumber+'/').then(response => {
                        this.name = response.data.name;
                        this.sprite = response.data.sprites.front_default;
                    });
                }
            },
            data(){
                return{
                    name: '',
                    sprite: ''
                }
            }
        }
</script>

<style>

</style>