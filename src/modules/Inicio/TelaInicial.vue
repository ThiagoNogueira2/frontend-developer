<template>
<section class="w-full relative sec1 h-screen flex flex-row justify-between pb-[12%] overflow-hidden">
    
    <div class="absolute inset-0 w-full h-full z-[1] bg-gradient-to-b from-[rgba(12,1,2,0)] from-[70.74%] to-[#0c0102]"></div>

    <div class="absolute inset-0 w-full h-full z-[1] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(12,1,2,0)_0%,rgba(12,1,2,0.7)_100%)]"></div>
    
    <header class="absolute top-16 left-0 w-full z-10">
        <div class="logo absolute right-0 z-10 flex justify-end px-20 py-10">
            <img src="../../assets/images/stranger-logo.svg" alt="logo" class="h-12"> 
        </div>
    </header>

    <picture class="absolute top-0 left-0 w-full h-full">
        <img 
            data-speed="0.4" 
            class="bg bg1 w-full h-full object-cover absolute top-0 left-0 z-0" 
            src="../../assets/images/img-fundo.webp" 
            alt="fundo"
        >
    </picture>

    <picture class="absolute top-0 left-0 w-full h-full">
        <img 
            data-speed="0.8" 
            class="bg bg2 w-full h-full object-cover absolute top-0 left-0 z-0" 
            src="../../assets/images/img-principal.webp" 
            alt="principal"
        >
    </picture>

    <div class="container-esquerda z-[2] absolute top-[19%] left-[2%] px-20 flex flex-col items-start">
        <p class="texto-animado font-subtitle text-[clamp(14px,1.4vw,1.4vw)] font-normal text-white/90 opacity-80 mb-1 overflow-hidden">
            Desenvolvedor de Software - Stranger Things
        </p>
        <h1 class="texto-animado font-title text-[7vw] font-bold text-white mt-0 leading-[1.1] overflow-hidden">DevT</h1>
    </div>

    <div class="container-direita z-[2] absolute top-[19%] right-[7%] flex flex-col items-end gap-10 w-[23%] min-w-[330px]">
        <img src="../../assets/images/tecnologias-icone.svg" alt="tecnologias" class="tecnologias-icone opacity-70 h-12">
        <p class="texto-animado texto-direita font-subtitle text-[clamp(16px,1.3vw,1.3vw)] font-light text-white text-right opacity-80 overflow-hidden">
            Vamos construir esse projeto do zero em 4 aulas, passando do design ao desenvolvimento, do básico ao avançado, passo a passo!
        </p>

        <button class="botao-animado botao-primario flex items-center gap-3 px-4 py-3 bg-white/[0.092] border-b border-white text-white text-lg transition-all duration-300 hover:bg-white hover:text-black group mt-1 cursor-pointer opacity-0">
            GARANTIR MINHA VAGA
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:rotate-[16deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
        </button>
    </div>
</section>
</template>

<script setup lang="ts">
import { useTelaInicialAnimations } from '../../composables/useTelaInicialAnimations';

useTelaInicialAnimations();
</script>

