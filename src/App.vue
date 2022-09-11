<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />
  <div id="container" class="bg-white px-3 pt-20 dark:bg-slate-800 sm:px-5 md:px-20">
    <div class="mx-auto md:w-2/3">
      <RouterView />
      <Footer />
    </div>
  </div>
</template>
<style>
html.dark {
  color-scheme: dark;
}
</style>
