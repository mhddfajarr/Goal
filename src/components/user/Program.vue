<template>
  <swiper :autoHeight="true" :rewind="true" :navigation="true" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">


    <!-- Additional slides for other sections if needed -->
    <swiper-slide>
  <Program1/>
</swiper-slide>

<swiper-slide>
  <Program2/>
</swiper-slide>
<swiper-slide>
  <Program3/>
</swiper-slide>


    <!-- Add more swiper-slide elements as necessary -->
  </swiper>
</template>

  
  

  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import Program1 from './programContent/Program1.vue';
  import Program2 from './programContent/Program2.vue';
  import Program3 from './programContent/Program3.vue';

  // Import required modules
  import { Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Program1,
      Program2,
      Program3

    },
    setup() {
      return {
        modules: [Navigation, Pagination],
        imageUrl: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/11/1200/675/GettyImages-1242431515-e1669060475918.jpg?ve=1&tl=1', // Sample image URL
      };
    },
  };
</script>


<style lang="scss" scoped></style>
