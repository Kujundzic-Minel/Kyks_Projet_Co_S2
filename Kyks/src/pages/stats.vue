<template>

<p class=" text-center text-purple-500 pt-6 px-3 text-xl">
    Tes <span class="font-bold">stats</span> t'intéressent ? Tu peux les retrouver un peu plus bas !
</p>


<div class="h-[140px] bg-purple-700 lg:h-[260px]">
        <p class="text-white pt-4 pl-8 font-bold text-[24px] lg:pt-12 lg:pl-24 lg:text-[40px]">7 DERNIERS JOURS</p>
         <div class="pt-2 pl-8 flex gap-6 items-center lg:pl-32 ">
            <img class="h-[44px] w-[44px] lg:h-[66px] lg:w-[66px]" src="/public/img/Component 65.png">
            <div class="">
                <p class="text-white text-[30px] font-bold lg:text-[40px]">2</p>
                <p class="text-white text-[14px] lg:text-[24px]">Activitées</p>
            </div>
        </div>
    </div>
  
    <div class="rounded-md h-[85px] w-[305px] bg-gray-300 m-auto flex lg:w-[800px] lg:h-[120px] mt-6">
        <div class="pl-12 flex items-center gap-24 lg:gap-56 lg:pl-44  ">
        <img class="h-[33px] w-[33px] lg:h-[66px] lg:w-[66px]" src="/public/img/icons8-football-2-50 3.png">
        <p class="text-purple-700 text-[20px] lg:text-[40px]">7 Buts</p>
        </div>
    </div>

    <div class="rounded-md my-5 lg:my-10 h-[85px] w-[305px] bg-gray-300 m-auto flex lg:w-[800px] lg:h-[120px]">
        <div class="pl-12 flex items-center gap-24 lg:gap-56 lg:pl-44">
        <img class="h-[33px] w-[33px] lg:h-[66px] lg:w-[66px]" src="/public/img/icons8-football-2-50 3.png">
        <p class="text-purple-700 text-[20px] lg:text-[40px]">7 Pass déc</p>
        </div>
    </div>

    <div class="rounded-md h-[85px] w-[305px] bg-gray-300 m-auto flex lg:w-[800px] lg:h-[120px]">
        <div class="pl-12 flex items-center gap-24 lg:gap-56 lg:pl-44">
        <img class="h-[33px] w-[35px] lg:h-[66px] lg:w-[68px]" src="/public/img/Star 7.png">
        <p class="text-purple-700 text-[20px] lg:text-[40px]">1 Motm</p>
        </div>
    </div>


    <img class="w-full py-5" src="@/../public/img/statsfoot.jpg" alt="">

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        stats: [
          { matches: 20, goals: 10,  assists: 5 },
          { matches: 20, goals: 10,  assists: 5 },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles spécifiques si nécessaire */
  </style>