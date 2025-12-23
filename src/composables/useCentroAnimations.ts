import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCentroAnimations() {
  const initAnimations = () => {
  
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
          scrub: true
        }
      }
    );

    
    gsap.from('.img-contraste', {
      duration: 1.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.section-contraste',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
      }
    });
  };

  onMounted(() => {
    initAnimations();
  });

  return {
    initAnimations
  };
}

