<template>
  <div class="fixed w-full items-center px-3 py-3 text-black backdrop-blur-sm dark:text-white sm:px-5 md:px-24">
    <div class="mx-auto flex items-center">
      <div class="font-poppins mr-10 text-2xl font-semibold">
        <router-link @click="hiddenNav" :to="{ name: 'home' }">{{ titleNav }}</router-link>
      </div>
      <ul class="font-poppins hidden md:flex">
        <li class="nav-link">
          <router-link @click="hiddenNav" :to="{ name: 'now' }">Now</router-link>
        </li>
        <li class="nav-link">
          <router-link @click="hiddenNav" :to="{ name: 'portfolio' }">Portfolio</router-link>
        </li>
        <li class="nav-link">
          <router-link @click="hiddenNav" :to="{ name: 'post' }">Posts</router-link>
        </li>
      </ul>
      <div class="ml-auto flex">
        <button @click="changeTheme" class="btn mr-2 rounded-md bg-blue-700 text-white">
          <i class="bi bi-moon-fill" v-if="theme == 'dark'"></i>
          <i class="bi bi-sun-fill" v-if="theme == 'light'"></i>
        </button>
        <button class="btn inline-block rounded-md border border-solid border-slate-400 text-black hover:bg-blue-600 hover:text-white focus:bg-blue-700 focus:text-white md:hidden" @click="showNavLinks">
          <i class="bi bi-list"></i>
        </button>
      </div>
      <div id="nav-links" class="fixed top-16 right-5 z-[999] hidden rounded-md bg-white p-3 text-black shadow-md transition-all">
        <ul class="font-poppins pr-5">
          <li class="nav-link">
            <router-link :to="{ name: 'now' }">Now</router-link>
          </li>
          <li class="nav-link">
            <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
          </li>
          <li class="nav-link">
            <router-link :to="{ name: 'post' }">Posts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleNav: 'Emelka',
      theme: 'light',
      navLinks: false,
    };
  },
  methods: {
    changeTheme() {
      alert('Fitur sedang dikembangkan :)');
      if (this.theme == 'light') {
        this.theme = 'dark';
      } else {
        this.theme = 'light';
      }
    },
    showNavLinks() {
      let navLink = document.querySelector('#nav-links');
      if (this.navLinks == false) {
        navLink.classList.remove('hidden');
        navLink.classList.add('block', 'md:hidden');
        this.navLinks = true;
      } else if (this.navLinks == true) {
        navLink.classList.remove('block');
        navLink.classList.add('hidden');
        this.navLinks = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
