<template>
  <div>
  <Navbar/>
  <HeroSection/>
  <AboutUs/>
  <Program/>
  <Timeline/>
  <Footer/>
  </div>
</template>

<script>
import HeroSection from './components/user/HeroSection.vue';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import AboutUs from './components/user/AboutUs.vue';
import Program from './components/user/Program.vue';
import Timeline from './components/user/Timeline.vue';

export default {
  name: 'App',
  components: {
    HeroSection, 
    Navbar,
    Footer,
    AboutUs,
    Program,
    Timeline
    
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
