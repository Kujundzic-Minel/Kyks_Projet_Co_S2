<script setup lang="ts">
import enes from '@/assets/icons/enes.vue';
import thomas from '@/assets/icons/thomas.vue';
import minel from '@/assets/icons/minel.vue';
</script>

<template>
    <h1 class="text-xl font-bold text-purple-500 text-center mb-3">Qui sommes nous ?</h1>
    <p class="px-5">Nous sommes trois étudiants MMI à l’IUT de Montbéliard. Comme projet, nous devions réaliser un projet innovant en groupe. Le sujet d’un de nos collaborateurs a été retenu, c’est pourquoi, nous avons décidé de créer KYK’S.</p>
    <h1 class="text-xl font-semibold text-purple-500 text-center mt-3 mb-3">Notre équipe</h1>
    <div class=" items-center">
      <div class="align-bottom">
        <enes class="mx-1 mb-5 w-36"/>
        <p>Enes Tavukçu</p>
      </div>
      <div>
        <thomas class="mx-1 mb-5 w-36"/>
        <p>Thomas hadj-Aissa</p>
      </div>
      <div class="flex-col justify-center">
        <minel class="mx-1 mb-5 w-36"/>
        <p>Minel Kujundzic</p>
      </div>
    </div>
</template>