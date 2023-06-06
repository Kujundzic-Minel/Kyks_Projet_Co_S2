<template>

<p class=" text-center text-purple-500 pt-6">
    Tes <span class="font-bold">stats</span> t'intéressent ? Tu peux les retrouver un peu plus bas !
</p>



    <div class="flex flex-wrap justify-center">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="bg-gray-500 text-white w-64 p-4 m-4 rounded-xl"
      >
        <h3 class="text-xl font-bold mb-2">{{ stat.matches }} matchs joués</h3>
        <p class="mb-2">{{ stat.goals }} buts</p>
        <p>{{ stat.assists }} passes décisives</p>
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