<template>
   <div id="smooth-wrapper">
      <div id="smooth-content">
         <PreLoader />
         <TelaInicial />
         <Centro />
          <MonsterParallax />
          <Trailers />
          <Episodios />
          <Footer />
      </div>
   </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import PreLoader from '@/modules/preloader/PreLoader.vue';
import TelaInicial from '../modules/Inicio/TelaInicial.vue';
import Centro from '../modules/Desenvolvimento/Centro.vue';
import MonsterParallax from '../modules/Desenvolvimento/MonsterParallax.vue';
import Trailers from '@/modules/trailer/Trailers.vue';
import Footer from '../modules/footer/Footer.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Episodios from '@/modules/episodios/Episodio.vue';



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onMounted(() => {
   ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
   });

   // Animação da cortina preta subindo e revelando o footer
   gsap.to(".footer-overlay", {
      y: "-400px",
      ease: "none",
      scrollTrigger: {
         trigger: ".footer-section",
         start: "top bottom",
         end: "bottom bottom",
         scrub: true,
         invalidateOnRefresh: true,
      },
   });

   ScrollTrigger.refresh();
});
</script>

<style scoped>
#smooth-wrapper {
   overflow: hidden;
}

#smooth-content {
   background-color: #0c0102;
}
</style>