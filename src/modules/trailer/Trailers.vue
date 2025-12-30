<template>
  <!-- CONTAINER EXTERNO COM PADDING IGUAL EPISÓDIOS -->
  <div class="p-4 sm:p-6 lg:p-10 text-white font-sans">

    <!-- TÍTULO -->
    <h1 class="max-w-[1440px] mx-auto
               text-2xl sm:text-3xl lg:text-4xl
               font-bold pt-4 sm:pt-6">
      Trailers
    </h1>

    <!-- WRAPPER -->
    <div class="relative max-w-[1440px] mx-auto pt-4 sm:pt-6">

      <!-- CARROSSEL -->
      <div
        class="flex flex-nowrap gap-3 sm:gap-4
               overflow-x-auto scrollbar-hide scroll-smooth
               snap-x snap-mandatory"
        style="scrollbar-width:none; -ms-overflow-style:none;"
      >

        <!-- CARD 1 -->
        <div class="flex-shrink-0 snap-start">
          <div class="relative w-[280px] h-[158px] sm:w-[350px] sm:h-[197px] lg:w-[400px] lg:h-[225px] xl:w-[447px] xl:h-[255px] rounded-xl overflow-hidden">
            <img src="/src/assets/images/trailer1.jpg" class="w-full h-full object-cover" />
            <!-- play -->
            <div class="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="w-8 h-8 sm:w-10 sm:h-10 text-white">
                <path fill="currentColor" fill-rule="evenodd"
                  d="M34 18a16 16 0 1 1-32 0 16 16 0 0 1 32 0m2 0a18 18 0 1 1-36 0 18 18 0 1 1 36 0m-10 0-12-7.5v15z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <!-- runtime -->
            <div class="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded z-20">
              28s
            </div>
          </div>
          <p class="mt-1.5 sm:mt-2 text-[10px] sm:text-xs tracking-widest text-gray-400 font-semibold">TEASER</p>
        </div>

        <!-- CARD 2 -->
        <div class="flex-shrink-0 snap-start">
          <div class="relative w-[280px] h-[158px] sm:w-[350px] sm:h-[197px] lg:w-[400px] lg:h-[225px] xl:w-[447px] xl:h-[255px] rounded-xl overflow-hidden">
            <img src="/src/assets/images/trailer2.jpg" class="w-full h-full object-cover" />
            <div class="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="w-8 h-8 sm:w-10 sm:h-10 text-white">
                <path fill="currentColor" fill-rule="evenodd"
                  d="M34 18a16 16 0 1 1-32 0 16 16 0 0 1 32 0m2 0a18 18 0 1 1-36 0 18 18 0 1 1 36 0m-10 0-12-7.5v15z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded z-20">
              28s
            </div>
          </div>
          <p class="mt-1.5 sm:mt-2 text-[10px] sm:text-xs tracking-widest text-gray-400 font-bold">TEASER</p>
        </div>

        <!-- CARD 3 -->
        <div class="flex-shrink-0 snap-start">
          <div class="relative w-[280px] h-[158px] sm:w-[350px] sm:h-[197px] lg:w-[400px] lg:h-[225px] xl:w-[447px] xl:h-[255px] rounded-xl overflow-hidden">
            <img src="/src/assets/images/trailer3.jpg" class="w-full h-full object-cover" />
            <div class="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="w-8 h-8 sm:w-10 sm:h-10 text-white">
                <path fill="currentColor" fill-rule="evenodd"
                  d="M34 18a16 16 0 1 1-32 0 16 16 0 0 1 32 0m2 0a18 18 0 1 1-36 0 18 18 0 1 1 36 0m-10 0-12-7.5v15z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded z-20">
              28s
            </div>
          </div>
          <p class="mt-1.5 sm:mt-2 text-[10px] sm:text-xs tracking-widest text-gray-400 font-semibold">TEASER</p>
        </div>

        <!-- CARD 4 -->
        <div class="flex-shrink-0 snap-start">
          <div class="relative w-[280px] h-[158px] sm:w-[350px] sm:h-[197px] lg:w-[400px] lg:h-[225px] xl:w-[447px] xl:h-[255px] rounded-xl overflow-hidden">
            <img src="/src/assets/images/trailer4.jpg" class="w-full h-full object-cover" />
            <!-- overlay -->
            <div class="absolute inset-0 bg-black/60 z-10"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black z-20"></div>
            <!-- play -->
            <div class="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="w-8 h-8 sm:w-10 sm:h-10 text-white">
                <path fill="currentColor" fill-rule="evenodd"
                  d="M34 18a16 16 0 1 1-32 0 16 16 0 0 1 32 0m2 0a18 18 0 1 1-36 0 18 18 0 1 1 36 0m-10 0-12-7.5v15z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <p class="mt-1.5 sm:mt-2 text-[10px] sm:text-xs tracking-widest text-gray-400 font-semibold">
            Cenas de Stranger
          </p>
        </div>

      </div>


    <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black via-black/60 to-transparent flex items-center justify-end pr-2 sm:pr-4 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <div class="bg-[#333]/80 hover:bg-[#444] transition rounded-xl sm:rounded-2xl w-6 h-16 sm:w-8 sm:h-24 flex items-center justify-center cursor-pointer border border-white/10">
            <span class="text-white text-lg sm:text-2xl font-bold">&gt;</span>
          </div>
        </div>

    </div>
  </div>
</template>

<style scoped>
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
  .line-clamp-5 {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

</style>
