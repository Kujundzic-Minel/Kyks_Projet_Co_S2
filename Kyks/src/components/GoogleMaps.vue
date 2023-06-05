<template>
    <GoogleMap
    api-key="AIzaSyBaKiiXpZroOOPvB2JmkoleQU_bp_5LrOc"
    style="width: 100vw; height: 100vh;"
    :center="center"
    :zoom="15"
    >
    <Marker :options="{ position: center }" />
    <MarkerCluster v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
    </GoogleMap>
   </template>
   
   <script setup lang="ts">
   import { MarkerCluster } from 'node_modules/vue3-google-map/dist/types';
import { GoogleMap, Marker } from 'vue3-google-map'
   
   const center = { lat: 47.49566525144965, lng: 6.805222081286718 }

   const locations = [
    { lat: 47.49480108784094, lng: 6.809126338934127 }
   ]
   </script>