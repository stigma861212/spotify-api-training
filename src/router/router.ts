import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../component/Login.vue';
import Home from '../component/page/Home.vue';
import Explore from '../component/Explore.vue';
import UserProfile from '../component/UserProfile.vue';
import HomeContent from '../component/HomeContent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "Login",
    component: Login
  },
  {
    path: '/home',
    name: "Home",
    component: Home,
    children: [
      {
        path: '',
        name: "HomeInitial",
        component: HomeContent,
      },
      {
        path: 'explore',
        name: "Explore",
        component: Explore,
      },
      {
        path: 'profile',
        name: "Profile",
        component: UserProfile,
        props: (route) => ({ data: JSON.parse(decodeURIComponent(route.query.data as string)) })
      },
    ],
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('Navigating from:', from.path, 'to', to.path);
  if (from.path === "/home" && to.path === "/") {
    console.log("trigger");
    next(false);
  }
  else {
    next();
  }
});

export default router;