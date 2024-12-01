<template>
  <section id="about-us">
    <div class="min-w-full p-8">
      <div class="container p-8 mx-auto md:px-12 md:py-8">
        <div
          class="flex flex-col lg:flex-row items-center lg:items-start"
          data-aos="fade-up"
        >
          <div class="lg:w-1/2 lg:pl-20">
            <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              About Goal
            </h2>
            <p class="mb-4 text-gray-700 text-base md:text-lg">
              Goal is an educational organization dedicated to improving the
              nation's quality of life by providing accessible and high-quality
              learning opportunities. With a mission to empower individuals,
              Goal offers three main programs: a comprehensive basic and
              secondary education program aimed at academic excellence and
              character development, a professional bootcamp designed to equip
              individuals with in-demand skills for the workforce, and a global
              leadership development program to cultivate future leaders with a
              global perspective. Through these initiatives, Goal strives to
              create a positive impact, nurturing well-rounded individuals who
              can contribute to both national and global progress.
            </p>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img
              alt="Students in a classroom attentively listening to a lecture"
              class="w-96 h-auto rounded mx-auto"
              src="https://storage.googleapis.com/a1aa/image/hkOizw3pV66HBNwFC2mykyeFbaQWdnn0g190Kve8ekaTpcsnA.jpg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN MISSION -->
    <div
      class="relative text-center shadow-lg py-10 px-4 sm:px-8 md:px-16 lg:px-64"
      :style="mainMissionStyle"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-white opacity-20"></div>
      <!-- Content on top of overlay -->
      <div class="relative bg-primary p-6 rounded">
        <h2 class="text-yellow-300 text-3xl sm:text-4xl font-bold mb-4">
          MAIN MISSION
        </h2>
        <h2 class="text-2xl sm:text-3xl text-white mb-4 font-semibold">
          "To provide the incredible experience learning beyond education"
        </h2>
      </div>
    </div>

    <div class="p-8 md:px-28 md:py-12 bg-white">
  <div class="p-6 flex flex-col md:flex-row gap-12">
    <!-- Kolom "Why?" -->
    <div class="flex-1 border rounded-md p-8 bg-white shadow-md hover:border-2" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-blue-900 text-center mb-6">Why?</h2>
      <p class="text-gray-600 text-xl text-center">
        Opportunity to be outstanding human capital should be for everyone
      </p>
    </div>
    <!-- Kolom "Problems" -->
    <div class="flex-1 border rounded-md p-8 bg-white shadow-md hover:border-2" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-blue-900">Problems</h2>
      <p class="text-gray-600 text-xl">
        We’ve served over a hundred educational programs and counting, and the
        response remains the same:
        <br />
        the call for more relevant skillset needed by the market beyond the university
        curriculum.
      </p>
    </div>
  </div>
</div>

  </section>
</template>

<script>
import { computed } from "vue";

export default {
  setup() {
    // Background image URL
    const backgroundImageUrl =
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Ganti dengan URL gambar latar Anda

    // Style untuk main mission
    const mainMissionStyle = computed(() => ({
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }));

    return {
      mainMissionStyle,
    };
  },
};
</script>

<style scoped></style>
