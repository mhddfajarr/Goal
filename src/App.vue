<template>
  <div>
  <Navbar/>
 <HeroSection/>

  <AboutUs/>
  <Footer/>
  </div>
</template>

<script>
import HeroSection from './components/user/HeroSection.vue';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import AboutUs from './components/user/AboutUs.vue';

export default {
  name: 'App',
  components: {
    HeroSection, 
    Navbar,
    Footer,
    AboutUs
    
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
