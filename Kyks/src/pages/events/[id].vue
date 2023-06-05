<template>
    <div>
      <h1>Page d'événement {{ id }}</h1>
      <!-- Ajoutez ici le contenu et la mise en page de votre page d'événement -->
      <p>ongferogiozgneiozgnerziongerzoinon</p>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles spécifiques pour la page d'événement */
  </style>