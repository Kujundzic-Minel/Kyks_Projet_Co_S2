<script setup lang="ts">
import { RouterLink } from 'vue-router'
import add from '@/assets/icons/add.vue';
import { pb } from '@/backend';
import type { EventResponse } from '@/pocketbase-types';

const lesEvent = await pb.collection('event').getFullList<EventResponse>({
    sort: '-created',
});
</script>

<template>
    <RouterLink to="creationEvent">
        <div class="bg-gray-300 rounded-xl mx-10 p-1 mb-5">

            <h3 class="text-center py-8 font-bold text-xl text-purple-700">Créer ton événement</h3>
            <add class="mx-auto mb-5"/>

            <div v-for="unEvent of lesEvent">
                <p>Titre : {{ unEvent.titre }}</p>
                <p>Lieu : {{ unEvent.lieu_event }}</p>
            </div>
        </div>
    </routerlink>
</template>