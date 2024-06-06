import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../component/Login.vue';
import Home from '../component/page/Home.vue';

const routes = [
  { path: '/', name: "Login", component: Login },
  { path: '/home', name: "Home", component: Home }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;