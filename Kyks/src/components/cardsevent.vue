<script setup lang="ts">
import { RouterLink } from 'vue-router'
import add from '@/assets/icons/add.vue';
import { pb } from '@/backend';
import type { EventResponse } from '@/pocketbase-types';

const lesEvent = await pb.collection('event').getFullList<EventResponse>({
    sort: '-created',
    '$autoCancel': false
});

const props: EventResponse = defineProps<EventResponse>();

const url = `/events/${props.id}`;

</script>

<template>
    <div class="flex justify-center">
        <section class="grid-cols-2 gap-5 mx-5">
            <div class="relative bg-gray-300 rounded-xl max-w-[120px] justify-center p-5 mb-6">
                <p class="font-bold text-purple-600 text-center">{{ titre }}</p>
                <p class="text-center text-purple-800 font-semibold">{{ lieu_event }}</p>
                <span class="absolute right-0 bg-purple-500 rounded-full pr-2 -mt-2 p-1 -mr-3 max-w-[31px] max-h-[31px]">{{ nb_participants }}</span>
                
                <div class="bg-orange-500 rounded-xl">
                    <RouterLink class="pl-1 font-bold text-white" :to="`${url}`">Rejoindre</RouterLink>
                </div>
                
            </div>
        </section>
    </div>
</template>