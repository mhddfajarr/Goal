<template>
    <section
        id="program"
      class="relative w-full bg-center bg-cover"
      :style="{
        backgroundImage: 'url(' + imageUrl + ')',
      }"
    >
      <!-- Overlay dengan opacity 65% -->
      <div class="absolute inset-0 bg-black opacity-65"></div>
      
      <!-- Konten section -->
      <div class="relative flex flex-col items-center text-center px-8 py-10">
        <h2 class="text-teal-400 text-2xl mb-2" data-aos="fade-up">What makes us unique?</h2>
  
        <div class="border-b-2 border-white mb-6 py-2 w-1/2" data-aos="fade-up"></div>
  
        <h3 class="text-5xl text-white font-bold mb-4" data-aos="fade-up">
          Immersive Learning Experience<br />in
          <span class="text-yellow-300"> One Program</span>
        </h3>
  
        <div class="border-b-2 border-white mb-6 py-2 w-1/2" data-aos="fade-up"></div>
  
        <!-- Gambar dan deskripsi (1 kolom di mobile, 3 kolom di desktop) -->
        <div class="flex flex-col sm:flex-row justify-center mt-8 space-x-0 sm:space-x-8 mb-16">
          <div class="text-center mb-10 bg-white rounded-sm p-3" data-aos="zoom-in">
            <img
              alt="Classroom with students and a presentation on the screen"
              class="w-72 h-48 object-cover mb-2"
              height="200"
              src="../../assets/image/1.png"
              width="300"
            />
            <p class="text-xl font-semibold text-black">Practical Skill Class</p>
          </div>
          <div class="text-center mb-10 bg-white rounded-sm p-3" data-aos="zoom-in"
          data-aos-duration="800">
            <img
              alt="Person giving a presentation with a JCB logo on the screen"
              class="w-72 h-48 object-cover mb-2"
              height="200"
              src="../../assets/image/2.png"
              width="300"
            />
            <p class="text-xl font-semibold text-black">Success Story</p>
          </div>
          <div class="text-center mb-10 bg-white rounded-sm p-3" data-aos="zoom-in"
          data-aos-duration="1000">
            <img
              alt="Company visit with a large machine on display"
              class="w-72 h-48 object-cover mb-2"
              height="200"
              src="../../assets/image/3.png"
              width="300"
            />
            <p class="text-xl font-semibold text-black">Company Visit</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  

<script>
import { ref, onMounted } from "vue";
import Teaching from "../../assets/image/4.png";
export default {
  setup() {
    const imageUrl =
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/11/1200/675/GettyImages-1242431515-e1669060475918.jpg?ve=1&tl=1";
    return {
      Teaching,
      imageUrl,
    };
  },
};
</script>

<style lang="scss" scoped></style>
