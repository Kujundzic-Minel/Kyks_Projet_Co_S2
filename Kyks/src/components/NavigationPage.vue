<template>
    <div class= "bg-purple-500 flex justify-between fixed bottom-0 w-full rounded-t-xl px-3 py-2">
        <RouterLink to ="/event"><Message/></RouterLink>
        <MapPin/>
        <RouterLink to="/profil"><Profil/></RouterLink>
    </div>
</template>

<script setup lang="ts">
import MapPin from '../assets/icons/map-pin.vue'
import Message from '../assets/icons/message.vue'
import Profil from '../assets/icons/profil.vue'
import { RouterLink } from 'vue-router'
</script>