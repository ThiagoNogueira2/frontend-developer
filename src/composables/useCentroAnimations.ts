import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCentroAnimations() {
  const initAnimations = () => {
  
    // Parallax único otimizado - removemos duplicação de triggers
    gsap.fromTo('.img-contraste',
      {
        y: '-20%'
      },
      {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-contraste',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        }
      }
    );
  };

  onMounted(() => {
    initAnimations();
  });

  return {
    initAnimations
  };
}

