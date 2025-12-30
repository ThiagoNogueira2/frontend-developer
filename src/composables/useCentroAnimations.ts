import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCentroAnimations() {
  let mm = gsap.matchMedia();

  const initAnimations = () => {
    mm.add({
      // Definimos as condições de tela
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop, isMobile } = context.conditions;

      gsap.fromTo('.img-contraste',
        {
          // No mobile, começamos com um leve zoom para a imagem não vazar nas bordas
          y: isMobile ? '-10%' : '-20%',
          scale: isMobile ? 1.15 : 1,
        },
        {
          y: isMobile ? '10%' : '20%',
          scale: isMobile ? 1.15 : 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-contraste',
            start: 'top bottom',
            end: 'bottom top',
            // Scrub 1 no mobile suaviza o "tremido" do touch
            scrub: isMobile ? 1 : 0.5,
            invalidateOnRefresh: true,
          }
        }
      );
    });
  };

  onMounted(() => {
    initAnimations();
  });

  onUnmounted(() => {
    mm.revert(); // Limpa as animações para evitar vazamento de memória
  });

  return { initAnimations };
}