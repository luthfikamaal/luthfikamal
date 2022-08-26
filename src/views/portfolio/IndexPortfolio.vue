<template>
  <h1 class="mb-5 text-2xl font-semibold">Projects</h1>
  <div class="mb-3">
    <div v-for="portfolio in portfolios" class="mb-5">
      <img v-bind:src="portfolio.img" class="mb-3 w-full rounded-md shadow-md md:w-2/3" />
      <div class="mb-2">
        <span class="rounded-md bg-indigo-500 px-2 py-1 text-white">{{ portfolio.type }}</span>
      </div>
      <h2 class="font-poppins text-xl">
        <router-link :to="{ name: 'showportfolio', params: { slug: portfolio.slug } }">{{ portfolio.name }}</router-link>
      </h2>
      <p class="mb-3 font-serif italic text-slate-700">{{ portfolio.description }}</p>
      <hr />
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
};
</script>

<style lang="scss" scoped></style>
