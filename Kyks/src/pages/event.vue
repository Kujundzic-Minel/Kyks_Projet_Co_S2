<script setup lang="ts">
import { RouterLink } from 'vue-router'
import add from '@/assets/icons/add.vue';
import { pb } from '@/backend';
import type { EventResponse } from '@/pocketbase-types';
import cardsevent from '@/components/cardsevent.vue';
import { getallEvents } from '@/backend';
import { ref, computed } from 'vue';

const lesEvent = await getallEvents();
const filterOption = ref('all');

// Filtrer les événements par ordre chronologique
const filteredEvents = computed(() => {
  switch (filterOption.value) {
    case 'all':
      return lesEvent;
    case 'recent':
      return lesEvent.slice().sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
    case 'oldest':
      return lesEvent.slice().sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime());
    default:
      return lesEvent;
  }
});
</script>

<template>
  <div>
    <RouterLink to="/creationEvent">
      <div class="bg-gray-300 rounded-xl mx-10 p-1 mb-5 mt-4">
        <h3 class="text-center py-8 font-bold text-xl text-purple-700">Créer ton événement</h3>
        <add class="mx-auto mb-5" />
      </div>
    </RouterLink>
    <h1 class="font-bold text-center text-purple-500 text-3xl mb-5">Les événements</h1>
    <div class="flex justify-center text-purple-500 font-bold">
      <select v-model="filterOption" class="mb-5 mx-auto">
        <option value="all">Tous les événements</option>
        <option value="recent">Les plus récents d'abord</option>
        <option value="oldest">Les plus anciens d'abord</option>
      </select>
    </div>
    <div>
      <cardsevent v-for="unEvent in filteredEvents" :key="unEvent.id" v-bind="{...unEvent}" />
    </div>
  </div>
</template>
