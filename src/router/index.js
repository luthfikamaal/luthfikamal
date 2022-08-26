import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NowView from '@/views/NowView.vue';
import ContactView from '@/views/ContactView.vue';
import IndexPost from '@/views/post/IndexPost.vue';
import ShowPost from '@/views/post/ShowPost.vue';
import IndexPortfolio from '@/views/portfolio/IndexPortfolio.vue';
import ShowPortfolio from '@/views/portfolio/ShowPortfolio.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/now',
      name: 'now',
      component: NowView,
    },
    {
      path: '/post',
      name: 'post',
      component: IndexPost,
    },
    {
      path: '/post/:slug',
      name: 'postshow',
      component: ShowPost,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: IndexPortfolio,
    },
    {
      path: '/portfolio/:slug',
      name: 'showportfolio',
      component: ShowPortfolio,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
});

export default router;
