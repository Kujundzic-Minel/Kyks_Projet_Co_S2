<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import NavigationPage from './components/NavigationPage.vue'
</script>

<template>
  <HeaderPage/>
  <main class="">
    <h1 class="text-center">Bonjour</h1>
      <NavigationPage/>
      <Inscription/>
      <RouterView/>

    

  </main>
  <FooterPage/>
</template>
