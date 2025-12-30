<template>
   <footer class="relative w-full min-h-[650px] md:min-h-[750px] flex items-start overflow-hidden pt-24 md:pt-44 pb-20 font-sans tracking-tight">
     
     <div class="absolute inset-0 -z-10">
       <img 
         src="../../assets/images/bg-footer.webp" 
         alt="Background" 
         class="w-full h-full object-cover scale-105" 
       >
       <div class="absolute inset-0 bg-black/40"></div>
       <div class="absolute inset-0 bg-gradient-to-t from-[#0c0102] via-transparent to-black/20"></div>
     </div>
 
     <div class="container mx-auto px-6 md:px-12 w-full">
       <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-4 text-center lg:text-left">
         
         <div class="text-white max-w-2xl">
           <p class="text-[10px] md:text-xs tracking-[0.5em] uppercase opacity-50 mb-6 font-medium">
             DevThisgo # 2 EDIT
           </p>
           <h1 class="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] uppercase tracking-tighter italic">
             Stranger <br> 
             <span class="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Things</span>
           </h1>
         </div>
 
         <div class="flex flex-col sm:flex-row lg:flex-nowrap gap-12 lg:gap-20 items-center lg:items-start pt-6">
           
           <div class="flex flex-col gap-6 items-center lg:items-start">
             <span class="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Conecte-se</span>
             <div class="flex gap-6">
               <a href="#" class="group transition-all duration-300">
                 <img 
                   src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" 
                   alt="TikTok" 
                   class="w-5 h-5 brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"
                 >
               </a>
               </div>
           </div>
 
           <div class="flex flex-col gap-6 w-full max-w-[320px] items-center lg:items-start">
             <span class="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Dúvidas</span>
             <button class="group relative flex items-center justify-between bg-white/[0.03] backdrop-blur-xl px-10 py-5 text-white border border-white/10 transition-all duration-700 hover:bg-white hover:text-black w-full overflow-hidden">
               <span class="text-[10px] font-bold tracking-[0.2em] uppercase">Suporte Whatsapp</span>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="14"
                 height="14"
                 viewBox="0 0 16 16"
                 fill="none"
                 class="transition-transform duration-700 group-hover:rotate-[16deg] group-hover:translate-x-1"
               >
                 <path
                   d="M2 14L14 2M14 2H2M14 2V14"
                   stroke="currentColor"
                   stroke-width="2"
                 />
               </svg>
               <div class="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 transition-all duration-700 group-hover:w-full"></div>
             </button>
           </div>
 
         </div>
       </div>
     </div>
   </footer>
 </template>