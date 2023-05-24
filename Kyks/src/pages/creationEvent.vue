<script setup lang="ts">
import type { EventResponse } from '@/pocketbase-types';
import { ref } from 'vue';
import { pb } from "@/backend";
import router from '@/router';
// import { useRouter } from 'vue-router';
// const router =  useRouter()


const event = ref<EventResponse>()

async function submit() {
    await pb.collection('event').create(event.value);
    router.push({ name: 'event' });
}

</script>
<template>
    <div>
     <FormKit type="form" v-model="event" 
     :submit-attrs="{
        inputClass: 'bg-blue-500 rounded-xl p-2 text-white font-bold',
        wrapperClass: 'flex justify-center',
        'data-theme': `dark`,
        ignore: false
    }"
    submit-label="Créer"
    @submit="submit"
    >
        <FormKit type="text" label="Nom de l'évènement" name="titre" />
        <FormKit type="number" label="Nombre de participants" name="nb_participants" />
        <FormKit type="text" label="lieu évènement" name="lieu_event" />
        <FormKit type="hidden" name="organisateur" :value="pb?.authStore?.model?.id ?? '1acaklhyt1hkevd'"/>
     </FormKit>   
    </div>
</template>