<template>
    <div class= "bg-purple-500 flex justify-between pr-3 pl-3 pt-2 pb-2 bottom-0">
        <RouterLink to ="/event"><Message/></RouterLink>
        <MapPin/>
        <Profil/>
    </div>
</template>

<script setup lang="ts">
import MapPin from '../assets/icons/map-pin.vue'
import Message from '../assets/icons/message.vue'
import Profil from '../assets/icons/profil.vue'
import { RouterLink } from 'vue-router'
</script>