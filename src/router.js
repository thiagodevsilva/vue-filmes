import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home.vue';
import Filme from './pages/Filme.vue';
import MeusFilmes from './pages/MeusFilmes.vue';
import Erro from './pages/Erro.vue';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/filme/:id',
            component: Filme,
            props: true
        },
        {
            path: '/salvos',
            component: MeusFilmes
        },
        {
            path: '*',
            component: Erro
        }
    ]
});

export default router;