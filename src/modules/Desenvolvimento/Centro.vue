<template>
    <section class="section-contraste relative bg-[#0c0102] ">
        <div class="relative overflow-hidden">
            <img data-speed="0.8" src="../../assets/images/fundo.jpg" alt="contraste"
                class="img-contraste w-full h-[1000px] object-cover">
            
            <div class="absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(12,1,2,0)] from-[70%] to-[#0c0102] pointer-events-none"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useCentroAnimations } from '../../composables/useCentroAnimations';

useCentroAnimations();
</script>

