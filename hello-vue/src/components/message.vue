<template>
    <div class="box is-info" @click="colorSpin">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script type="text/babel">
    export default {
        methods: {
            colorSpin(){
                var
                    counter = 0,
                    nTimes = Math.floor((Math.random()*15)+1),
                    interval = setInterval( () => {
                        var r = Math.floor(Math.random() * 255),
                            g = Math.floor(Math.random() * 255),
                            b = Math.floor(Math.random() * 255),
                            colorString = "rgb("+r+","+g+","+b+")";

                        this.$el.style.backgroundColor = colorString;
                        counter += 1;
                        if(counter > nTimes){
                            clearInterval(interval);
                        }
                    },75);
            }
        }
    }
</script>

<style>
    .box{
        background-color: hotpink;
        padding: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        margin: 10px auto;
    }
</style>