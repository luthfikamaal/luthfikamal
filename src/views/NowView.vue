<template>
  <div class="mb-3">
    <span><span class="font-poppins mr-2 text-2xl font-semibold">Now</span><span class="ml-2 font-serif italic text-slate-600">Menjawab pertanyaan (jika ada) 'Lagi sibuk apa sekarang?'</span></span>
  </div>
  <blockquote>
    <p>Jika kamu mempunyai situsmu sendiri, mungkin kamu harus membuatnya juga.</p>
  </blockquote>
  <div class="mb-6 font-serif">
    Terinspirasi dari mas <a href="https://www.wahudamon.com/" target="_blank" class="text-blue-900 underline transition-all">Afwa Bagas Wahuda</a> dan mas
    <a href="https://gading.dev/id/now" class="text-blue-900 underline transition-all" target="_blank">Sutan Gading Fadhillah Nasution</a>. Halaman ini dibuat untuk menjelaskan <b>apa saja kesibukannya sekarang?</b>
  </div>
  <div class="mb-6">
    <h1 class="font-poppins mb-3 text-2xl">☕️ Aktivitas</h1>
    <div class="font-serif">
      <p>Sedang menempuh pendidikan S-1 Matematika UIN Sunan Kalijaga. Selain itu, saya juga melakukan beberapa aktivitas, seperti</p>
      <ul>
        <li>- mempelajari teknologi di internet, terutama di bidang <i>Web Development</i>,</li>
        <li>- membaca buku,</li>
        <li>- menulis <router-link :to="{ name: 'post' }" class="text-blue-900 underline transition-all">blog</router-link>, dan</li>
        <li>- tentunya <i>ngoding</i>.</li>
      </ul>
    </div>
  </div>
  <div class="mb-6">
    <h1 class="font-poppins mb-3 text-2xl">📘 Buku yang dibaca</h1>
    <div class="font-serif">
      <ul>
        <li>- <a href="https://www.google.com/search?q=Sebuah+Seni+Berpikir+Positif" target="_blank" class="text-blue-900 hover:underline">Sebuah Seni Berpikir Positif</a> karya Irfan Suryana.</li>
        <li>- <a href="https://www.google.com/search?q=Out of The Lunch Box" target="_blank" class="text-blue-900 hover:underline">Out of The Lunch Box</a> karya Iqbal Aji Daryono.</li>
      </ul>
    </div>
  </div>
  <div class="mb-6">
    <h1 class="font-poppins mb-3 text-2xl">💡 Teknologi yang digunakan</h1>
    <div class="font-serif">
      <ul>
        <li>- Javascript dan PHP</li>
        <li>- Laravel, Vue, Express.js</li>
        <li>- TailwindCSS</li>
      </ul>
    </div>
  </div>
  <div class="mb-6">
    <h1 class="font-poppins mb-3 text-2xl">🛠 <i>Software</i> yang digunakan</h1>
    <div class="font-serif">
      <ul>
        <li>- <b>Sistem Operasi</b>: Windows 10</li>
        <li>- <b>Kode Editor</b>: Visual Studio Code</li>
        <li>- <b>Peramban</b>: Google Chrome dan Edge</li>
        <li>- <b>Lain-lain</b>: Git, Postman, XAMPP, Node, dan Composer</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
