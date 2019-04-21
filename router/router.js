import List from '../view/list.vue';
import Details from '../view/details.vue';
import Print from '../view/print.vue';

export default [
    {path: '/', redirect: 'list'},
    { path: '/list', component: List, name: 'list', },
    { path: '/details', component: Details, name: 'details', },
    { path: '/print', component: Print, name: 'print', }
]