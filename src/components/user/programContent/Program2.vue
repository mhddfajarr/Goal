<template>
    <section
      id="program1"
      class="relative w-full bg-center bg-cover"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    >
      <!-- Overlay dengan opacity 65% -->
      <div class="absolute inset-0 bg-black opacity-65"></div>
      
      <!-- Konten section -->
      <div class="relative flex flex-col items-center text-center px-8 py-10">
        <h2 class="text-teal-400 text-2xl mb-2" data-aos="fade-up">What makes us unique?</h2>
  
        <div class="border-b-2 border-white mb-6 py-2 w-1/2" data-aos="fade-up"></div>
  
        <h3 class="text-5xl text-white font-bold mb-4" data-aos="fade-up">
          Domestic and Global <br />
          <span class="text-yellow-300"> Leadership Program</span>
        </h3>
  
        <div class="border-b-2 border-white mb-6 py-2 w-1/2" data-aos="fade-up"></div>
  
        <!-- Gambar dan deskripsi (2 gambar di baris pertama, 1 gambar di baris kedua, 2 gambar di baris ketiga) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-16">
          <!-- Gambar pertama -->
          <div class="text-center md:mb-10 bg-white rounded-sm p-3" data-aos="zoom-in">
            <img
              alt="Classroom with students and a presentation on the screen"
              class="w-72 h-48 object-cover mb-2"
              height="200"
              src="../../../assets/image/Global.png"
              width="300"
            />
            <p class="text-xl text-black">Global Community</p>
          </div>
          <!-- Gambar kedua -->
          <div class="text-center md:mb-10 bg-white rounded-sm p-3" data-aos="zoom-in" data-aos-duration="800">
            <img
              alt="Person giving a presentation with a JCB logo on the screen"
              class="w-72 h-48 object-cover mb-2"
              height="200"
              src="../../../assets/image/Government.png"
              width="300"
            />
            <p class="text-xl text-black">Government Program</p>
          </div>
          <!-- Gambar ketiga -->
          <div class="text-center md:mb-10 bg-white rounded-sm p-3" data-aos="zoom-in" data-aos-duration="900">
            <img
              alt="Company visit with a large machine on display"
              class="w-72 h-48 object-cover mb-2"
              height="200"
              src="../../../assets/image/Internship.png"
              width="300"
            />
            <p class="text-xl text-black">Global Internship</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
    
    
  
    <script>
import BgImage2 from '../../../assets/image/Bg2.png'
    export default {
      setup() {
        return {
          imageUrl: BgImage2
        };
      },
    };
  </script>
  
  
  <style lang="scss" scoped></style>
  