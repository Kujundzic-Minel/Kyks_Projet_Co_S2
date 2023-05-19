<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import GoogleMap from '@/components/GoogleMaps.vue'

import aide from '@/pages/aide.vue'
import apropos from '@/pages/apropos.vue'
import confidentialite from '@/pages/confientalite.vue'
import notifications from '@/pages/notifications.vue'
import securite from '@/pages/securite.vue'
</script>

<template>
  <!-- <HeaderPage/> -->
  <main class="">
    <h1 class="text-center">Bonjour</h1>
    <RouterView/>
    <GoogleMap/>
  </main>
  <!-- <FooterPage/> -->
</template>
