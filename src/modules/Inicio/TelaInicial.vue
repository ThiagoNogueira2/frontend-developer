<template>
<section class="w-full relative sec1 h-screen flex flex-row justify-between pb-[12%] overflow-hidden">

    <div
        class="absolute inset-0 w-full h-full z-[1] bg-gradient-to-b from-[rgba(12,1,2,0)] from-[70.74%] to-[#0c0102]">
    </div>

    <div
        class="absolute inset-0 w-full h-full z-[1] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(12,1,2,0)_0%,rgba(12,1,2,0.7)_100%)]">
    </div>

    <header class="absolute top-4 md:top-16 left-0 w-full z-10">
        <div class="logo absolute right-0 z-10 flex justify-end px-4 md:px-12 lg:px-20 py-4 md:py-10">
            <img src="../../assets/images/stranger-logo.svg" alt="logo" class="h-8 md:h-12">
        </div>
    </header>

    <picture class="absolute top-0 left-0 w-full h-full">
        <source media="(max-width: 768px)" srcset="../../assets/images/img2-responsive.webp">
        <img data-speed="0.4" class="bg bg1 w-full h-full object-cover absolute top-0 left-0 z-0"
            src="../../assets/images/img-fundo.webp" alt="fundo">
    </picture>

    <picture class="absolute top-0 left-0 w-full h-full">
        <source media="(max-width: 768px)" srcset="../../assets/images/img1-responsive.webp">
        <img data-speed="0.8" class="bg bg2 w-full h-full object-cover absolute top-0 left-0 z-0"
            src="../../assets/images/img-principal.webp" alt="principal">
    </picture>

    <div class="container-esquerda z-[2] absolute top-[12%] md:top-[19%] left-0 px-4 md:px-12 lg:px-20 flex flex-col items-start">
        <p
            class="texto-animado font-subtitle text-xs md:text-[clamp(14px,1.4vw,1.4vw)] font-normal text-white/90 opacity-80 mb-1 overflow-hidden">
            Desenvolvedor de Software - Stranger Things
        </p>
        <h1 class="texto-animado font-title text-[13vw] md:text-[10vw] lg:text-[7vw] font-bold text-white mt-0 leading-[1.1] overflow-hidden">DevT
        </h1>
        <div class="flex items-center gap-2 mt-2 md:mt-4 overflow-hidden">
            <div class="texto-animado">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 opacity-90">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </div>
            <a href="https://www.linkedin.com/in/thiago-nogueira-13b258277/" target="_blank" rel="noopener noreferrer"
                class="texto-animado text-white/90 opacity-80 hover:opacity-100 transition-opacity">
                <span class="font-subtitle text-sm md:text-[clamp(16px,1.2vw,1vw)]">Thiago Nogueira</span>
            </a>
        </div>
    </div>

    <div
        class="container-direita z-[2] absolute bottom-11 left-4 right-4 md:bottom-auto md:top-[21%] md:left-auto md:right-[7%] flex flex-col items-start md:items-end gap-4 md:gap-10 w-auto md:w-[23%] md:min-w-[330px] px-4 md:px-0 pt-4">
        <img src="../../assets/images/tecnologias-icone.svg" alt="tecnologias"
            class="tecnologias-icone opacity-70 h-8 md:h-12">
        <p
            class="texto-animado texto-direita font-subtitle text-sm md:text-[clamp(16px,1.3vw,1.3vw)] font-light text-white text-left md:text-right opacity-80 overflow-hidden max-w-full md:max-w-none">
            Vamos construir esse projeto do zero em 4 aulas, passando do design ao desenvolvimento, do básico ao
            avançado, passo a passo!
        </p>

        <button
            class="botaoPrimario flex items-center justify-center bg-white/[0.092] px-4 py-3 text-white border-0 outline-none border-b border-white gap-3 text-sm md:text-lg transition-all duration-300 mt-1 cursor-pointer hover:bg-white hover:text-black group w-full md:w-auto">
            <span class="whitespace-nowrap">GARANTIR MINHA VAGA</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"
                class="transition-all duration-300 group-hover:rotate-[16deg] flex-shrink-0">
                <path d="M2 14L14 2M14 2H2M14 2V14" stroke="currentColor" stroke-opacity="0.9" stroke-width="1.5"
                    class="group-hover:stroke-black" />
            </svg>
        </button>
    </div>
</section>
</template>
