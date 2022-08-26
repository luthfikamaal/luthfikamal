<template>
  <div class="my-3 text-center font-serif text-slate-700" v-html="footerText"></div>
</template>
<script>
export default {
  data() {
    return {
      footerText: '&copy; 2022. Built with Vue 3 and Tailwind. - <a href="https://github.com/luthfikamaal/" class="text-blue-900 underline">Muhammad Luthfi Kamal</a> Masih percobaan',
    };
  },
};
</script>
