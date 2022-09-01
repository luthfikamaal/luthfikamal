import { createApp, nextTick } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/main.css';
import './assets/css/output.css';

// const DEFAULT_TITLE = 'Home';
router.afterEach((to, from) => {
  nextTick(() => {
    const title = to.meta.title;
    document.title = title + ' - Muhammad Luthfi Kamal';
  });
});

const app = createApp(App);

app.use(router);

app.mount('#app');
