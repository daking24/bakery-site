import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import('@/layouts/AppLayout.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: 'about',
      name: 'About Us',
      component: () => import('@/pages/About.vue'),
    }]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
})

export default router