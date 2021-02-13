import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: {
      name: 'Login',
    },
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      requiredUnauth: true,
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      requiredUnauth: true,
    },
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: {
      requiredAuth: true,
    },
    component: () => import('@/views/Chat.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  if (!store.getters.isLogin && (to.meta.requiredAuth || to.meta.requiredUnauth)) {
    await store.dispatch('getUser');
  }
  if (to.meta.requiredAuth && !store.getters.isLogin) {
    next({ name: 'Login' });
  } else if (to.meta.requiredUnauth && store.getters.isLogin) {
    next({ name: 'Chat' });
  } else next();
});

export default router;
