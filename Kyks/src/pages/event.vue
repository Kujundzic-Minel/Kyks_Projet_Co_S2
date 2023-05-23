<script setup lang="ts">
import { RouterLink } from 'vue-router'
import add from '@/assets/icons/add.vue';
</script>

<template>
    <RouterLink to="creationEvent">
        <div class="mt-36 bg-gray-300 rounded-xl mx-10  ">
            <h3 class="text-center py-8 font-bold text-xl text-purple-700">Créer ton événement</h3>
            <add/>
        </div>
    </routerlink>
</template>