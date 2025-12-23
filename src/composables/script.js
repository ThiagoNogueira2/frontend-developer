gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.refresh();
ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0,
});

//VÍDEOS
window.addEventListener("load", () => {
  function carregarVideo(videoId, overlayId, btnId) {
    const video = document.getElementById(videoId);
    const overlay = document.getElementById(overlayId);
    const playBtn = document.getElementById(btnId);
    const src = video.getAttribute("data-src");

    if (src) {
      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      video.appendChild(source);
      video.load();

      // Botão de play personalizado
      playBtn.addEventListener("click", () => {
        video.pause();
        video.currentTime = 0;
        video.muted = false;
        video.play();

        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.style.display = "none";
        }, 300);
      });
    }
  }

  // Carregar o vídeo depois do carregamento da página
  carregarVideo("video", "videoOverlay", "playBtn");
});

function animarIntro() {
  document.body.classList.add("loaded");
  const tlIntro = gsap.timeline();
  tlIntro.from(
    ".bg1",
    {
      y: -40,
      duration: 2,
    },
    0
  );

  tlIntro.from(
    ".bg2",
    {
      y: 40,
      duration: 2,
    },
    0
  );
  // ANIMAÇÕES PAGINA

  const textos = document.querySelectorAll(".textoAnimado");
  textos.forEach((texto) => {
    const split = new SplitType(texto, { types: "lines, words, chars" });
    gsap.from(split.chars, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
      stagger: { each: 0.03, overlap: 0.2 },
      scrollTrigger: {
        trigger: texto,
        start: "top 80%",
      },
    });
  });

  gsap.from(".divAulas .card", {
    opacity: 0,
    filter: "blur(20px)",
    stagger: { each: 0.1, overlap: 0.1 },
    scrollTrigger: {
      trigger: ".divAulas .card",
      start: "top 80%",
    },
  });

  gsap.from(".divDevart .card", {
    opacity: 0,
    filter: "blur(20px)",
    stagger: { each: 0.1, overlap: 0.1 },
    scrollTrigger: {
      trigger: ".divDevart .card",
      start: "top 80%",
    },
  });

  gsap.from(".sec3", {
    y: "-40%",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".sec3",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
}

// PRELOADER
const tl = gsap.timeline({
  onComplete() {
    gsap.to("#preloader", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        document.getElementById("preloader").style.display = "none";
        animarIntro();
      },
    });
  },
});

// anima o traçado
tl.to(".logoLoader path", {
  ease: "expoScale(0.5,7,none)",
  strokeDashoffset: 0,
  duration: 2,
});

// preenche no final
tl.to(
  ".logoLoader path",
  {
    fill: "#e92a2d",
    duration: 1,
  },
  "-=.2"
);
