import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../App.vue'), // Home component
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
