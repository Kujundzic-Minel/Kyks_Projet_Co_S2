<template>
    <div>
      <h1>Page d'événement {{ id }}</h1>
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

