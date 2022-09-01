import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NowView from '@/views/NowView.vue';
import ContactView from '@/views/ContactView.vue';
import IndexPost from '@/views/post/IndexPost.vue';
import ShowPost from '@/views/post/ShowPost.vue';
import IndexPortfolio from '@/views/portfolio/IndexPortfolio.vue';
import ShowPortfolio from '@/views/portfolio/ShowPortfolio.vue';
import title from '@/helpers/title.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: `Home - ${title}`,
      },
    },
    {
      path: '/now',
      name: 'now',
      component: NowView,
      meta: {
        title: `Now - ${title}`,
      },
    },
    {
      path: '/post',
      name: 'post',
      component: IndexPost,
      meta: {
        title: `Posts - ${title}`,
      },
    },
    {
      path: '/post/:slug',
      name: 'postshow',
      component: ShowPost,
      meta: {
        title: `My Post - ${title}`,
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: IndexPortfolio,
      meta: {
        title: `Portfolio - ${title}`,
      },
    },
    {
      path: '/portfolio/:slug',
      name: 'showportfolio',
      component: ShowPortfolio,
      meta: {
        title: `My Portfolio - ${title}`,
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: `Contact - ${title}`,
      },
    },
  ],
});

export default router;
