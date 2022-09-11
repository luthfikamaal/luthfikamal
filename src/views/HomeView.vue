<template>
  <div class="mb-6 rounded-md border-t-4 border-solid border-indigo-300 bg-indigo-600 px-3 py-2 text-white">
    <h1 class="font-poppins text-3xl">{{ person.name }}</h1>
    <p class="font-ssp text-xl">100% Homan</p>
    <p class="font-serif text-lg">Web Development Enthusiast</p>
  </div>
</template>

<script>
import urlAPI from '@/api/config.js';
export default {
  data() {
    return {
      urlAPI: urlAPI,
      person: {
        name: 'Muhammad Luthfi Kamal',
        study: 'UIN Sunan Kalijaga',
        college: 'Math',
        address: 'Ngawi, Jawa Timur',
        about:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti veritatis facere consequatur soluta ipsam provident quam animi optio? Voluptatibus iste eaque illo quos, facere, enim officiis aliquid ullam, repellat aspernatur aut! Ipsum, quos quas, corrupti natus eaque non ea aspernatur, veritatis necessitatibus in id tenetur doloremque consequuntur! Deserunt aliquid ea sed, impedit error iusto natus enim eum, et, quia mollitia quos molestiae aspernatur vero. Perspiciatis error accusantium, id qui, provident dolore blanditiis numquam minima eligendi, ipsum repellat voluptas sunt deleniti et a itaque aspernatur! Nihil corrupti voluptates, officia error omnis quibusdam iste maiores culpa, adipisci voluptatum atque autem odit.',
      },
    };
  },
  setup() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
