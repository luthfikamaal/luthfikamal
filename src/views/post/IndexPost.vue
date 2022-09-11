<template>
  <div class="mb-5 rounded-md bg-indigo-600 py-2 text-center">
    <h1 class="font-poppins mb-1 text-2xl font-semibold text-white">Posts</h1>
    <p class="font-serif italic text-slate-100">Blog dan beberapa catatan saya dalam pengembangan Web</p>
  </div>
  <div v-show="posts.length == 0">
    <div class="mb-3" v-for="i in 7">
      <div class="mb-1 h-10 rounded-md bg-indigo-200"></div>
      <div class="h-5 rounded-md bg-slate-100"></div>
    </div>
  </div>
  <div id="posts">
    <div v-for="(post, index) in posts" :key="index" class="animate__animated animate__fadeInUp mb-4">
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