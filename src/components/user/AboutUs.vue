<template>
  <section id="about-us">
    <div class="min-w-full p-8">
      <div class="container p-8 mx-auto md:px-12 md:py-8">
        <div
          class="flex flex-col lg:flex-row items-center lg:items-start"
          data-aos="fade-up"
        >
          <div class="lg:w-1/2 lg:pl-20">
            <h3 class="text-3xl md:text-4xl font-bold text-tosca mb-4">
              About Goal
            </h3>
            <p class="mb-4 text-gray-700 text-base md:text-lg">
              "Goal is an educational program focused on enhancing the nation's future generation by providing accessible, experiential and high-quality learning. We offer three main programs: most up to date and high demand skill training with character development, immersive site visit, and a global leadership program to develop future leaders. Through these initiatives, Going Global aims to nurture well-rounded individuals who contribute to national and global progress."
            </p>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img
              alt="Students in a classroom attentively listening to a lecture"
              class="h-auto rounded mx-auto"
              width="350"
              src="https://storage.googleapis.com/a1aa/image/hkOizw3pV66HBNwFC2mykyeFbaQWdnn0g190Kve8ekaTpcsnA.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- MAIN MISSION -->
    <div
      class="relative text-center shadow-lg py-16 px-16 sm:px-8 md:px-16 lg:px-64"
      :style="mainMissionStyle"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <!-- Content on top of overlay -->
      <div class="relative bg-black bg-opacity-70 p-6 rounded">
        <h2 class="text-yellow-300 md:text-5xl text-3xl font-bold mb-4">
          Main Mission
        </h2>
        <h2 class="text-lg md:text-2xl  text-white mb-4 font-semibold">
          "To provide the incredible experience learning beyond education"
        </h2>
      </div>
    </div>

    <div class="p-8 md:px-28 md:py-12 bg-white">
  <div class="p-6 flex flex-col md:flex-row gap-12">
    <!-- Kolom "Why?" -->
    <div class="flex-1 border rounded-md p-8 bg-bla shadow-md hover:border-2" data-aos="fade-up">
      <h3 class="text-2xl md:text-4xl font-bold text-tosca text-center mb-6">Why?</h3>
      <p class="text-gray-600 text-lg md:text-xl text-center">
        Opportunity to be outstanding human capital should be for everyone
      </p>
    </div>
    <!-- Kolom "Problems" -->
    <div class="flex-1 border rounded-md p-8 bg-white shadow-md hover:border-2" data-aos="fade-up">
      <h3 class="text-2xl md:text-4xl font-bold text-tosca mb-4 text-center">Problems</h3>
      <p class="text-gray-600 text-lg md:text-xl">
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
