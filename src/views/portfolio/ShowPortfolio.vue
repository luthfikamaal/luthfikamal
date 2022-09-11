<template>
  <div class="mb-1 font-serif text-2xl">{{ portfolio.name }}</div>
  <img v-bind:src="portfolio.img" class="mb-3 w-full rounded-md shadow-md md:w-2/3" />
  <div class="mb-1 font-serif text-slate-700">{{ portfolio.description }}</div>
  <div class="mb-3 font-serif font-semibold">
    Stacks: <span class="font-normal text-slate-800">{{ portfolio.stacks }}</span>
  </div>
  <div class="mb-3 flex">
    <a v-bind:href="portfolio.url.website" target="_blank" class="mr-1 rounded-md bg-indigo-500 px-2 py-1 text-white transition-all hover:bg-indigo-600">
      <i class="bi bi-globe2"></i>
    </a>
    <a v-bind:href="portfolio.url.github" target="_blank" class="rounded-md bg-slate-800 px-2 py-1 text-white transition-all hover:bg-slate-900">
      <i class="bi bi-github"></i>
    </a>
  </div>
</template>

<script>
import portfolios from '@/data/portfolio.json';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
export default {
  setup() {
    const route = useRoute();
    let portfolio = ref({});
    portfolio = portfolios.filter((el) => {
      return el.slug == route.params.slug;
    });
    portfolio = portfolio[0];
    return { portfolio };
  },
};
</script>

<style lang="scss" scoped></style>
