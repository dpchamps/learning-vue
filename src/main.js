"use strict";
Vue.component('message', {
    props: ['title', 'body'],
    data: function(){
        return {
            isVisible: true
        }
    },
    template: `
         <article class="message" v-show="isVisible" @click="hideModal">
            <div class="message-header">
               {{ title }}
               
               <button class="close"> &times; </button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    methods: {
        hideModal:  function(){
            this.isVisible = false;
        }
    }
});

var app = new Vue({
   el: '#root'
});

console.log(app);