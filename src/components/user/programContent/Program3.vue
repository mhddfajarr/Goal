<template>
    <section
      id="program3"
      class="relative w-full bg-center bg-cover flex flex-col items-center"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    >
      <!-- Overlay dengan opacity 65% -->
      <div class="absolute inset-0 bg-black opacity-65"></div>
  
      <!-- Konten section -->
      <div class="relative flex flex-col items-center text-center px-8 py-10">
        <h2 class="text-teal-400 text-2xl mb-2" data-aos="fade-up">The Solution</h2>
  
        <div class="border-b-2 border-white mb-6 py-2 w-1/2" data-aos="fade-up"></div>
  
        <h3 class="text-5xl text-white font-bold mb-4" data-aos="fade-up">
            Study Tour Abroad
            <br>
          <span class="text-yellow-300 text-3xl"> (Optional)</span>
        </h3>
  
        <div class="border-b-2 border-white mb-6 py-2 w-1/2" data-aos="fade-up"></div>
  
        <!-- Gambar dan deskripsi -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Baris pertama dengan 2 kolom, gambar rata tengah -->
          <div
            v-for="(item, index) in firstRowImages"
            :key="'first-row-' + index"
            class="text-center  bg-white rounded-sm p-3 flex flex-col items-center"
            data-aos="zoom-in"
          >
            <img
              :alt="item.alt"
              class="w-72 h-48 object-cover mb-2"
              :src="item.src"
              :width="item.width"
              :height="item.height"
            />
            <p class="text-xl text-black">{{ item.title }}</p>
          </div>
        </div>
  
        <!-- Baris kedua (sudah benar) -->
        <div class="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in secondRowImages"
            :key="'second-row-' + index"
            class=" bg-white rounded-sm p-3 flex flex-col items-center"
          >
            <img
              :alt="item.alt"
              class="w-72 h-48 object-cover mb-2"
              :src="item.src"
              :width="item.width"
              :height="item.height"
            />
            <p class="text-xl text-black">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>

<script>
import EnglisPractice from "../../../assets/image/EnglishPractice.png"
import CultureExhchange from "../../../assets/image/CultureExchange.png"
import FunTrip from "../../../assets/image/FunTrip.png"
import Nature from "../../../assets/image/Nature.png"
import BgProgram2  from "../../../assets/image/BgProgram2.png"
import HistoricalStudy from "../../../assets/image/HistoricalStudy.png"


export default {
  data() {
    return {
        imageUrl: BgProgram2 ,
      firstRowImages: [
        { src: EnglisPractice, alt: "Classroom with students and a presentation on the screen", title: "English Practice", width: 300, height: 200 },
        { src: CultureExhchange, alt: "image culture exchange", title: "Cultural Exchange", width: 300, height: 200 },
        { src: FunTrip, alt: "image fun trip", title: "Fun Trip", width: 300, height: 200 },
      ],
      secondRowImages: [
        { src:Nature, alt: "Nature", title: "Nature and Environment", width: 300, height: 200 },
        { src: HistoricalStudy, alt: "HistoricalStudy", title: "Historical Study", width: 300, height: 200 }
      ],
    };
  }
};
</script>
