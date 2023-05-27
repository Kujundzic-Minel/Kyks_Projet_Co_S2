<template>
    <div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <RouterLink to="/defi">
                <etoile/>
                <p>Défis</p>
            </RouterLink>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <RouterLink to="/stats">
                <fleche/>
                <p>Stats</p>
            </RouterLink>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <RouterLink to="/fairplay">
                <coeur/>
                <p>Fairplay</p>
            </RouterLink>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <RouterLink to="/adversaire">
                <Profilpurple/>
                <p>Mes adversaires</p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import coeur from '@/assets/icons/coeur.vue'; 
import etoile from '@/assets/icons/etoile.vue';
import fleche from '@/assets/icons/fleche.vue';
import Profilpurple from '@/assets/icons/profilpurple.vue';
import { RouterLink } from 'vue-router';
</script>