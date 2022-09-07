<template>
  <div v-show="post.title == null">Loading...</div>
  <div class="show-post">
    <div class="font-poppins mb-1 text-xl font-semibold">{{ post.title }}</div>
    <div class="mb-4 flex gap-x-4">
      <div v-show="post.title != null" class="italic text-slate-700">By Muhammad Luthfi Kamal</div>
      <div class="text-slate-400" v-show="post.views != null"><i class="bi bi-eye"></i> {{ post.views }}</div>
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
