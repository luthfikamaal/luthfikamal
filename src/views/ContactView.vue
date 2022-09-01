<template>
  <h1 class="mb-1 text-2xl font-semibold">Contact</h1>
  <p class="mb-3 font-serif italic">I'm on the internet</p>
  <div class="scrolling-x mb-2 flex overflow-x-scroll">
    <div class="mr-2 py-2">
      <a class="rounded-md bg-slate-800 px-3 py-2 text-white" v-bind:href="`https://github.com/${github}`" target="_blank?">
        <span class="mr-2"><i class="bi bi-github"></i></span>
        <span class="font-serif">{{ github }}</span>
      </a>
    </div>
    <div class="mr-2 py-2">
      <a class="rounded-md bg-red-500 px-3 py-2 text-white" v-bind:href="`https://instagram.com/${instagram}`" target="_blank?">
        <span class="mr-2"><i class="bi bi-instagram"></i></span>
        <span class="font-serif">@{{ instagram }}</span>
      </a>
    </div>
    <div class="mr-2 py-2">
      <a class="rounded-md bg-blue-500 px-3 py-2 text-white" v-bind:href="`https://twitter.com/${twitter}`" target="_blank?">
        <span class="mr-2"><i class="bi bi-twitter"></i></span>
        <span class="font-serif">@{{ twitter }}</span>
      </a>
    </div>
    <div class="py-2">
      <a class="rounded-md bg-blue-500 px-3 py-2 text-white" v-bind:href="`mailto:${email}`" target="_blank?">
        <span class="mr-2"><i class="bi bi-envelope-fill"></i></span>
        <span class="font-serif">{{ email }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      github: 'luthfikamaal',
      email: 'luthfikamal13@gmail.com',
      instagram: 'luthfikml_',
      twitter: 'luthfikml_',
      showwcase: 'luthfikamal',
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    sendMessage() {
      console.log(this.form);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
