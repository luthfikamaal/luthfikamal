<template>
  <div class="my-3 text-center font-serif text-slate-700" v-html="footerText"></div>
</template>
<script>
export default {
  data() {
    return {
      footerText: 'Built with Vue 3 and Tailwind.',
    };
  },
};
</script>
