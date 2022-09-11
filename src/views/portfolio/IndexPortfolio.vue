<template>
  <div class="mb-5 rounded-md bg-indigo-600 py-2 text-center">
    <h1 class="font-poppins mb-1 text-2xl font-semibold text-white">Projects</h1>
    <p class="font-serif italic text-slate-100">My recent projects</p>
  </div>
  <div class="mb-3 w-full">
    <div v-for="portfolio in portfolios" class="animate__animated animate__zoomInRight mx-auto mb-5 md:text-center">
      <img v-bind:src="portfolio.img" class="mb-3 w-full rounded-md shadow-md md:mx-auto md:w-2/3" />
      <div class="mb-2">
        <span class="rounded-md bg-indigo-500 px-2 py-1 text-white">{{ portfolio.type }}</span>
      </div>
      <h2 class="font-poppins text-xl">
        <router-link :to="{ name: 'showportfolio', params: { slug: portfolio.slug } }">{{ portfolio.name }}</router-link>
      </h2>
      <p class="mb-3 font-serif italic text-slate-700">{{ portfolio.description }}</p>
    </div>
  </div>
</template>

<script>
import porfolio from '@/data/portfolio.json';
export default {
  data() {
    return {
      portfolios: porfolio,
    };
  },
  setup() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
