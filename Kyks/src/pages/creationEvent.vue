<script setup lang="ts">
import type { EventResponse } from '@/pocketbase-types';
import { ref } from 'vue';
import { pb } from "@/backend";
import router from '@/router';
import instaCreaEvent from '@/assets/icons/insta-crea-event.vue';
import autreCreaEvent from '@/assets/icons/autre-crea-event.vue';
import facebookCreaEvent from '@/assets/icons/facebook-crea-event.vue';
import whattsapCreaEvent from '@/assets/icons/whattsap-crea-event.vue';


const event = ref<EventResponse>()

async function submit() {
    await pb.collection('event').create(event.value);
    router.push({ name: 'event' });
}

</script>
<template>

    <h1 class="font-bold text-center text-purple-500 text-3xl mb-5">Créer ton Event</h1>


    <div class="flex w-full h-full justify-center">
    <div>
      <FormKit
        type="form"
        v-model="event"
        :submit-attrs="{
          inputClass: 'bg-blue-500 rounded-xl p-2 text-white font-bold',
          wrapperClass: 'flex justify-center',
          'data-theme': `dark`,
          ignore: false
        }"
        submit-label="Créer"
      >
        <FormKit
          type="text"
          label="Nom de l'évènement"
          name="titre"
          :classes="{
            outer: 'mb-4 mr-2',
            inner: 'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input: 'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'font-bold text-xl text-purple-500'
          }"
        />
        <FormKit
          type="number"
          label="Nombre de participants"
          name="nb_participants"
          :classes="{
            outer: 'mb-4 mr-2',
            inner: 'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input: 'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'font-bold text-xl text-purple-500'
          }"
        />
        <FormKit
          type="text"
          label="Lieu de l'évènement"
          name="lieu_event"
          :classes="{
            outer: 'mb-4 mr-2',
            inner: 'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input: 'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'font-bold text-xl text-purple-500'
          }"
        />
        <FormKit
          type="hidden"
          name="organisateur"
          :value="pb?.authStore?.model?.id ?? '1acaklhyt1hkevd'"
        />
      </FormKit>
    </div>
  </div>

    <div class="flex justify-center mt-10">
        <copylink/>
    </div>

    <div class="flex justify-between px-3 mt-10 mb-9">
        <instaCreaEvent/>   
        <facebookCreaEvent/>
        <whattsapCreaEvent/>
        <autreCreaEvent/>
    </div>


</template>
