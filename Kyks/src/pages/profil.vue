<template>
    <div class="mt-20">
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600">
            <etoile/>
            <p>Défis</p>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600">
            <fleche/>
            <p>Stats</p>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600">
            <coeur/>
            <p>Fairplay</p>
        </div>
        <div class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600">
            <profil/>
            <p>Mes adversaires</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import coeur from '@/assets/icons/coeur.vue';
import etoile from '@/assets/icons/etoile.vue';
import fleche from '@/assets/icons/fleche.vue';
import profil from '@/assets/icons/profil.vue';
</script>