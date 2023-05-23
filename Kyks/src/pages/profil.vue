<template>
    <div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <etoile/>
            <p>Défis</p>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <fleche/>
            <p>Stats</p>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <coeur/>
            <p>Fairplay</p>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center">
            <Profilpurple/>
            <p>Mes adversaires</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import coeur from '@/assets/icons/coeur.vue';
import etoile from '@/assets/icons/etoile.vue';
import fleche from '@/assets/icons/fleche.vue';
import Profilpurple from '@/assets/icons/profilpurple.vue';
</script>