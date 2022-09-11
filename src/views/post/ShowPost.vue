<template>
  <div v-show="post.title == null">
    <div class="h-screen rounded-md bg-indigo-100"></div>
  </div>
  <div class="show-post">
    <div class="mb-3 rounded-md bg-indigo-700 py-2 text-center">
      <h1 class="font-poppins mb-1 text-2xl text-white">{{ post.title }}</h1>
      <p v-show="post.title != null" class="font-ssp text-center text-slate-100">By Muhammad Luthfi Kamal</p>
    </div>
    <div v-html="post.text" class="post-content font-serif"></div>
    <div class="my-3">
      <span class="my-3 rounded-full bg-indigo-500 px-3 py-1 text-white">{{ category.name }}</span>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import urlAPI from '@/api/config.js';
export default {
  setup() {
    window.scrollTo(0, 0);
    const route = useRoute();
    let post = ref({});
    let category = ref({});
    onMounted(() => {
      axios
        .get(`${urlAPI}/post/${route.params.slug}`)
        .then((result) => {
          post.value = result.data.data;
          category.value = result.data.data.category;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    document.title = 'Hello World';
    return {
      post,
      category,
    };
  },
};
</script>

<style lang="scss" scoped></style>
