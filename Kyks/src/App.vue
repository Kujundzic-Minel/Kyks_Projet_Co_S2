<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import NavigationPage from './components/NavigationPage.vue'
import { pb } from "@/backend";
import { ref } from 'vue';
</script>

<template>
  <HeaderPage/>
  <main>
   <NavigationPage/>
      <Suspense>
        <RouterView/>
    </Suspense>
  </main>
  <FooterPage/>
</template>
