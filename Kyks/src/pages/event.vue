<script setup lang="ts">
import { RouterLink } from 'vue-router'
import add from '@/assets/icons/add.vue';
</script>

<template>
    <RouterLink to="creationEvent">
        <div class="bg-gray-300 rounded-xl mx-10 p-1 mb-5">
            <h3 class="text-center py-8 font-bold text-xl text-purple-700">Créer ton événement</h3>
            <add class="mx-auto mb-5"/>
        </div>
    </routerlink>
</template>