import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useTelaInicialAnimations() {
  const initAnimations = () => {
  
    const tlIntro = gsap.timeline();
    
    tlIntro.from('.bg1', {
      y: -40,
      duration: 2,
      ease: 'power2.out'
    }, 0);

    tlIntro.from('.bg2', {
      y: 40,
      duration: 2,
      ease: 'power2.out'
    }, 0);

 
    const textos = document.querySelectorAll('.texto-animado');
    textos.forEach((texto) => {
      const svg = texto.querySelector('svg');
      if (svg) {
        gsap.from(svg, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power4.out',
          delay: 0.5
        });
        return;
      }

   
      const content = texto.textContent || '';
      const chars = content.split('');
      
  
      const childSpan = texto.querySelector('span');
      const spanClasses = childSpan ? childSpan.className : '';
      
  
      const originalClasses = texto.className;
      
      texto.innerHTML = '';
      texto.className = originalClasses; 
      
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = spanClasses; 
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(100%)';
        texto.appendChild(span);
      });

   
      gsap.to(texto.querySelectorAll('span'), {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out',
        stagger: {
          each: 0.03,
          from: 'start'
        },
        delay: 0.5
      });
    });

    
    gsap.from('.botao-animado', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 1.5
    });

    
    // Parallax otimizado com scrub suave (0.5 suaviza mais que true)
    gsap.to('.bg1', {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.sec1',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
      }
    });

    gsap.to('.bg2', {
      y: '40%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.sec1',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
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

