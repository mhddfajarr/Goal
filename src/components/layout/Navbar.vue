<template>
  <!-- Navbar -->
  <!-- <nav
      :class="{'bg-transparent text-white border-b': isAtTop, 'bg-primary border-b-2': !isAtTop}"
      class="text-white p-4 transition-all duration-300 sticky top-0 w-full z-50"
    > -->
  <nav class="bg-primary text-white py-4 px-10 md:px-12">
    <div class="container mx-auto flex justify-between items-center relative">
      <!-- Logo -->
      <a href="/">
        <img src="../../assets/image/logo-goal.png" alt="LOGO" class="h-12 w-auto" />
      </a>

      <!-- Navbar Links -->
      <ul class="flex space-x-4 items-center">
        <!-- Home -->
        <li class="hidden sm:block">
          <p
            @click="scrollToSection"
            class="px-4 cursor-pointer py-2 font-semibold text-lg hover:bg-yellow-300 hover:rounded-md hover:text-black"
          >
            About Us
          </p>
        </li>

        <li class="hidden sm:block">
          <p
            @click="scrollToProgram"
            class="px-4 cursor-pointer py-2 font-semibold text-lg hover:bg-yellow-300 hover:rounded-md hover:text-black"
          >
            Program
          </p>
        </li>

        <!-- Dropdown -->
        <li class="relative">
          <button
            @click="toggleDropdown"
            class="px-4 py-2 text-gray-700 hover:text-primary focus:outline-none sm:hidden"
            ref="hamburgerButton"
          >
            <i class="fas fa-bars text-white text-2xl"></i>
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-300"
            ref="dropdownMenu"
          >
            <ul>
              <li>
                <p
                  @click="scrollToSection"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:rounded-t-md"
                >
                  About Us
                </p>
              </li>
              <li>
                <p
                  @click="scrollToProgram"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:rounded-t-md"
                >
                  Program
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Navbar", // Nama komponen
  setup() {
    const isDropdownOpen = ref(false);
    const isAtTop = ref(true); // State untuk menentukan apakah navbar di atas
    const dropdownMenu = ref(null);
    const hamburgerButton = ref(null);
    const scrollToSection = () => {
      closeDropdown();
      const section = document.getElementById("about-us");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    const scrollToProgram = () => {
      closeDropdown();
      const section = document.getElementById("program");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const closeDropdown = () => {
      isDropdownOpen.value = false;
    };

    // Fungsi untuk menutup dropdown saat mengklik di luar menu
    const handleClickOutside = (event) => {
      if (
        dropdownMenu.value &&
        !dropdownMenu.value.contains(event.target) &&
        !hamburgerButton.value.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    // Fungsi untuk mengecek posisi scroll dan mengubah status navbar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        isAtTop.value = false;
      } else {
        isAtTop.value = true;
      }
    };

    // Menambahkan event listener saat komponen dipasang
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScroll); // Event scroll untuk navbar
    });

    // Menghapus event listener saat komponen dibuang
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isDropdownOpen,
      toggleDropdown,
      closeDropdown,
      dropdownMenu,
      hamburgerButton,
      isAtTop,
      scrollToSection,
      scrollToProgram
    };
  },
};
</script>

<style scoped>
/* Dropdown transition */
ul {
  transition: opacity 0.3s ease-in-out;
}
</style>
