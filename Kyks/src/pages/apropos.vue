<script setup lang="ts">
import enes from '@/assets/icons/enes.vue';
import thomas from '@/assets/icons/thomas.vue';
import minel from '@/assets/icons/minel.vue';
</script>

<template>
    <h1 class="text-xl font-bold text-purple-500 text-center mb-3">Qui sommes nous ?</h1>
    <p class="px-5">Nous sommes trois étudiants <a class="text-blue-600" href="https://mmi-montbeliard.nathanvanbignootvincler.fr">MMI à l’IUT de Montbéliard</a>. Comme projet, nous devions réaliser un projet innovant en groupe. Le sujet d’un de nos collaborateurs a été retenu, c’est pourquoi, nous avons décidé de créer KYK’S.</p>
    <h1 class="text-xl font-semibold text-purple-500 text-center mt-3 mb-3">Notre équipe</h1>
    <div class=" flex space-x-12 justify-center">
      <div class="bg-gray-100 rounded-xl p-3 mb-3">
        <enes class="mx-1 mb-5 w-36"/>
        <p class="text-center font-semibold text-purple-500">Enes Tavukçu</p>
      </div>
      <div class="bg-gray-100 rounded-xl p-3 mb-3">
        <thomas class="mx-1 mb-5 w-36"/>
        <p class="text-center font-semibold text-purple-500">Thomas hadj-Aissa</p>
      </div>
      <div class="bg-gray-100 rounded-xl p-3 mb-3">
        <minel class="mx-1 mb-5 w-36"/>
        <p class="text-center font-semibold text-purple-500">Minel Kujundzic</p>
      </div>
    </div>
</template>