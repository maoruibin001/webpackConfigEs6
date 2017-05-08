/**
 * Created by lenovo on 2017/5/8.
 */
import say from './say';
import Vue from 'vue';
new Vue({
    el: '#app',
    methods: {
        sayHello() {
            say.say();
        }
    }
});