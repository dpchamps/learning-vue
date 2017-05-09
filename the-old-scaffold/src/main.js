"use strict";
Vue.component('progress-view',{
    data(){
        return{
            completionRate: 50
        }
    }
});
var app = new Vue({
    el: '#root'
});