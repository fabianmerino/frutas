import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueFeatherIcon from 'vue-feather-icon'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css"
import "material-design-icons/iconfont/material-icons.css"

Vue.use(VueFeatherIcon);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: App
        },
        {
            path: '/empresa',
            name: 'empresa',
        },
        {
            path: '/frutas/exportacion/mango',
            name: 'mango',
        },
        {
            path: '/frutas/exportacion/uva',
            name: 'uva',
        },
        {
            path: '/frutas/exportacion/banano',
            name: 'banano',
        },
        {
            path: '/frutas/mnacional/mango',
            name: 'mn-mango',
        },
        {
            path: '/frutas/mnacional/uva',
            name: 'mn-uva',
        },
        {
            path: '/frutas/mnacional/banano',
            name: 'mn-banano',
        },
        {
            path: '/frutas/mnacional/melon',
            name: 'mn-melon',
        },
        {
            path: '/fundos/tungasuca-cieneguillo',
            name: 'tungasuca-ci',
        },
        {
            path: '/fundos/tungasuca-carrasquillo',
            name: 'tungasuca-ca',
        },
        {
            path: '/fundos/san-juan',
            name: 'sanjuan',
        },
        {
            path: '/fundos/santa-elisa',
            name: 'staelisa',
        },
        {
            path: '/fundos/maria-luisa',
            name: 'marialuisa',
        },
        {
            path: '/fundos/huapalas',
            name: 'huapalas',
        },
        {
            path: '/fundos/rodricc',
            name: 'rodricc',
        },
        {
            path: '/fundos/noni',
            name: 'noni',
        },
        {
            path: '/fundos/mangales',
            name: 'mangales',
        },
        {
            path: '/contacto',
            name: 'contacto',
        },
        {
            path: '/destinos',
            name: 'destinos',
        },
        {
            path: '/empafrut',
            name: 'empafrut',
        }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");