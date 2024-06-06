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

router.beforeEach((to, from, next) => {
  console.log('Navigating from', from.path, 'to', to.path);
  if (to.path == "/") {
    checkStore();
    next();
  }
  else {
    next();
  }
});

/**確認token儲存情況 */
export function checkStore() {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem('refresh_token');
  const expiresIn = localStorage.getItem('expires_in');

  if (accessToken && refreshToken && expiresIn) {
    console.log("have join this experience");
    router.push("/home");
  }
}

export default router;