import Vue from 'vue';
import iView from 'iview';
import cascaderMulti from "cascader-multi";
import 'iview/dist/styles/iview.css';
import Router from './router/router.js';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(cascaderMulti);
const router = new VueRouter({
    routes: Router
})
Vue.use(iView);
new Vue({
    router,
    el: "#app",
    data() {
        return {
            activeName: this.$route.name
        }
    },
    watch: {
        '$route'() {
            this.activeName = this.$route.name
        },
    },
    mounted() {
    },
    methods: {
        onMenu(name) {
            this.$router.push(name);
        }
    },
})