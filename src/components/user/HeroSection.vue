<template>
  <div>
    <section class="relative w-full h-screen bg-center bg-cover"
      :style="{
        backgroundImage: 'url(' + imageUrl + ')',
      }">
      <!-- Overlay -->

      <div class="absolute inset-0 bg-black opacity-65"></div>
      <!-- <Navbar /> -->
      <!-- Hero Content -->
      <div
        class="absolute inset-0 flex flex-col items-center pt-72 px-7 xl:pt-32"
      >
        <div class="text-left" data-aos="fade-right" data-aos-duration="1000">
          <h3 class="text-6xl md:text-7xl font-bold text-yellow-400 mt-2">
           GOING <span class="text-white"><br>GLOBAL</span>
          </h3>
          <p class="text-tosca text-2xl mt-4 max-w-2xl">
            Preparing Brighter and More Innovative Human Capital to Shape a Better and Sustainable Future
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import AOS from "aos"; // Pastikan Anda mengimpor AOS
import "aos/dist/aos.css"; // Jangan lupa impor CSS AOS
import Teaching from "../../assets/image/teaching2.png";

export default {
  name: "HeroSection",
  setup() {
    // State reaktif
    const imageUrl = ref(Teaching); // Gunakan ref jika data bisa berubah

    // Inisialisasi AOS saat komponen di-mount
    onMounted(() => {
      AOS.init();
    });

    return {
      Teaching,
      imageUrl,
    };
  },
};
</script>
