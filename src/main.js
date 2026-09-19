import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import RotaInterna from './views/RotaInterna.vue';
import Sobre from './views/Sobre.vue';

// History mode de propósito: é o padrão que um usuário real escolhe, e é
// exatamente o que o ensaio #2022 precisa exercitar contra o servidor
// estático da plataforma.
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/rota-interna', component: RotaInterna },
    { path: '/sobre', component: Sobre },
  ],
});

createApp(App).use(router).mount('#app');
