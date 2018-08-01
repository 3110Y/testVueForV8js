import Vue from 'vue'
import Router from 'vue-router';
import home from './components/Home';



import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
Vue.use(VueMaterial);
Vue.use(Router);

const routes = [
    {path: '/', component: home, name: 'home'}
];

data.routes.forEach(function(item, i) {
    let route = {
        path: data.routes[i].path,
        component: require('./components/' + item.component).default,
        name: data.routes[i].name
    };
    routes.push(route)
});

localData = routes;


export default new Router({
    mode: 'history',
    routes: routes,
});
