"use strict";
Vue.component('modal', {
    template : `
        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-card">
                <header class="modal-card-head">
                 <slot name="header"></slot>
                </header>
                <section class="modal-card-body">
                <!-- Default Slots! who knew! -->
                   <slot></slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer">
                    <!-- Default Content! -->
                    <a class="button is-primary">Aight Den</a>
                    </slot>
                </footer>
            </div>
        </div>
    `
})
var app = new Vue({
    el: '#root'
});