import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useTelaInicialAnimations() {
  let mm = gsap.matchMedia();

  const initAnimations = () => {
    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isMobile } = context.conditions!;

      // 1. Timeline de Entrada
      const tlIntro = gsap.timeline();
      tlIntro.from('.bg1', { y: -40, duration: 2, ease: 'power2.out' }, 0);
      tlIntro.from('.bg2', { y: 40, duration: 2, ease: 'power2.out' }, 0);

      // 2. Animação de Texto (Otimizada)
      const textos = document.querySelectorAll('.texto-animado');
      textos.forEach((texto) => {
        const svg = texto.querySelector('svg');
        if (svg) {
          gsap.from(svg, { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.5 });
          return;
        }

        // Split Text Otimizado
        const content = texto.textContent || '';
        const chars = content.split('');
        const childSpan = texto.querySelector('span');
        const spanClasses = childSpan ? childSpan.className : '';
        
        texto.innerHTML = '';
        const fragment = document.createDocumentFragment(); // Melhora performance de inserção

        chars.forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.className = `${spanClasses} inline-block opacity-0 will-change-transform`; // Adicionado will-change
          span.style.transform = 'translateY(100%)';
          fragment.appendChild(span);
        });
        texto.appendChild(fragment);

        gsap.to(texto.querySelectorAll('span'), {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power4.out',
          stagger: isMobile ? 0.05 : 0.03, // Stagger um pouco mais lento no mobile evita sobrecarga
          delay: 0.5
        });
      });

      // 3. Botão
      gsap.from('.botao-animado', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 1.5
      });

      // 4. Parallax (Otimizado para performance sem mudar comportamento visual)
      gsap.to('.bg1', {
        y: isMobile ? '10%' : '20%', 
        force3D: true, // Força uso da GPU
        ease: 'none',
        scrollTrigger: {
          trigger: '.sec1',
          start: 'top top',
          end: 'bottom top',
          scrub: isMobile ? 1.2 : 0.5, // Levemente mais suave no mobile para melhor fluidez
          invalidateOnRefresh: true
        }
      });

      gsap.to('.bg2', {
        y: isMobile ? '15%' : '40%',
        force3D: true,
        ease: 'none',
        scrollTrigger: {
          trigger: '.sec1',
          start: 'top top',
          end: 'bottom top',
          scrub: isMobile ? 1.2 : 0.5, // Levemente mais suave no mobile para melhor fluidez
          invalidateOnRefresh: true
        }
      });
    });
  };

  onMounted(() => {
    initAnimations();
  });

  onUnmounted(() => {
    mm.revert();
  });

  return { initAnimations };
}