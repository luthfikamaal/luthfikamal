<template>
  <h1 class="mb-1 text-2xl font-semibold">Posts</h1>
  <p class="mb-3 font-serif italic">Blog dan beberapa catatan saya dalam pengembangan Web</p>
  <div class="mb-2 text-xl">Category: {{ category.name }}</div>
  <div class="scrolling-x mb-2 flex overflow-x-scroll">
    <button @click="getAllPosts" class="mr-2 rounded-full border border-solid border-indigo-500 px-3 py-1 text-indigo-500 transition-all hover:bg-indigo-600 hover:text-white">All</button>
    <span v-for="category in categories">
      <button class="mr-2 rounded-full border border-solid border-indigo-500 px-3 py-1 text-indigo-500 transition-all hover:bg-indigo-600 hover:text-white" @click="getPosts(category.slug)">
        {{ category.name }}
      </button>
    </span>
  </div>
  <div v-show="posts.length == 0">Loading...</div>
  <div id="posts">
    <div v-for="(post, index) in posts" :key="index" class="mb-4">
      <router-link :to="{ name: 'postshow', params: { slug: post.slug } }" class="font-poppins text-xl">{{ post.title }}</router-link>
      <div class="my-1 font-thin italic text-slate-600">{{ post.category_id }}</div>
      <hr />
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import urlAPI from '@/api/config.js';
import title from '@/helpers/title.js';
export default {
  data() {
    return {
      posts: [],
      category: {},
    };
  },
  methods: {
    getPosts(slug) {
      axios
        .get(`${urlAPI}/category/${slug}`)
        .then((result) => {
          this.posts = result.data.data.posts;
          this.category = result.data.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getAllPosts() {
      axios
        .get(`${urlAPI}/post`)
        .then((result) => {
          this.posts = result.data.data;
          this.category.name = 'All';
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  setup() {
    window.scrollTo(0, 0);
    const route = useRoute();
    let posts = ref([]);
    let categories = ref([]);
    onMounted(() => {
      axios
        .get(`${urlAPI}/post`)
        .then((result) => {
          posts.value = result.data.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
      axios
        .get(`${urlAPI}/category`)
        .then((result) => {
          categories.value = result.data.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    return {
      posts,
      categories,
    };
  },
};
</script>

<style lang="scss" scoped></style>
