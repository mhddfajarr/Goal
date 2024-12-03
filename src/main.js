import { createApp } from 'vue';
import './assets/css/main.css'; 
import "@fortawesome/fontawesome-free/css/all.css";
import App from './App.vue';
import 'swiper/css'; // Gaya dasar Swiper
import 'swiper/css/navigation'; // Jika menggunakan navigasi
import 'swiper/css/pagination'; // Jika menggunakan pagination



const app = createApp(App);
app.mount("#app");
