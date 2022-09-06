<template>
  <hr />
  <div>
    <div class="font-poppins my-3 text-xl">Social Media</div>
    <div class="flex gap-2">
      <a target="_blank" v-bind:href="'https://github.com/' + link.github" class="b bg-slate-800 text-white"><i class="bi bi-github"></i></a>
      <a target="_blank" v-bind:href="'https://instagram.com/' + link.instagram" class="b bg-red-500 text-white"><i class="bi bi-instagram"></i></a>
      <a target="_blank" v-bind:href="'https://twitter.com/' + link.twitter" class="b bg-blue-500 text-white"><i class="bi bi-twitter"></i></a>
      <a target="_blank" v-bind:href="'mailto:' + link.email" class="b bg-blue-500 text-white"><i class="bi bi-envelope-fill"></i></a>
    </div>
  </div>
  <div class="my-3 text-center font-serif text-slate-700" v-html="footerText"></div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        github: 'luthfikamaal',
        email: 'luthfikamal13@gmail.com',
        instagram: 'luthfikml_',
        twitter: 'luthfikml_',
        showwcase: 'luthfikamal',
      },
      footerText: 'Built with Vue 3 and Tailwind.',
    };
  },
};
</script>
