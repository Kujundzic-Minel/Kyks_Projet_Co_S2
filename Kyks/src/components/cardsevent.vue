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

const rejoindre = () => {
  // Effectuez ici les actions nécessaires lorsque l'utilisateur appuie sur le bouton "Rejoindre"
  // Par exemple, vous pouvez ajouter du code pour rediriger l'utilisateur vers la page de l'événement en utilisant l'ID
  // Vous pouvez utiliser la méthode de redirection de votre framework de routage
  // Par exemple, si vous utilisez Vue Router, vous pouvez utiliser : 
  // this.$router.push(`/events/${props.id}`);
};
</script>

<template>
    <div class="flex justify-center">
        <section class="grid-cols-2 gap-5 mx-5">
            <div class="relative bg-gray-300 rounded-xl max-w-[120px] justify-center p-5 mb-6">
                <p class="font-bold text-purple-600 text-center">{{ titre }}</p>
                <p class="text-center text-purple-800 font-semibold">{{ lieu_event }}</p>
                <span class="absolute right-0 bg-orange-400 rounded-full pr-2 -mt-2 p-2 -mr-3 max-w-[31px] max-h-[31px] align-middle">{{ nb_participants }}</span>
                
                <RouterLink class="inline-block border-b-2 border-black uppercase" :to="`${url}`">Rejoindre</RouterLink>
                
            </div>
        </section>
    </div>
</template>