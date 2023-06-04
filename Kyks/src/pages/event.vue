<script setup lang="ts">
import { RouterLink } from 'vue-router'
import add from '@/assets/icons/add.vue';
import { pb } from '@/backend';
import type { EventResponse } from '@/pocketbase-types';
import cardsevent from '@/components/cardsevent.vue';
import { getallEvents } from '@/backend';

const lesEvent = await getallEvents();
</script>

<template>
    <RouterLink to="creationEvent">
        <div class="bg-gray-300 rounded-xl mx-10 p-1 mb-5 mt-4">

            <h3 class="text-center py-8 font-bold text-xl text-purple-700">Créer ton événement</h3>
            <add class="mx-auto mb-5"/>
        </div>
    </routerlink>
        <h1 class="font-bold text-center text-purple-500 text-3xl mb-5">Les événements</h1>

        <div>
            <cardsevent v-for="unEvent in lesEvent" :key="unEvent.id" v-bind="{...unEvent}"/>
        </div>
    
</template>