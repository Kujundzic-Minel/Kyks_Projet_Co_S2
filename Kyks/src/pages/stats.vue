<script setup lang="ts">
import { pb } from "@/backend";
import { ref } from 'vue';

import PocketBase from 'pocketbase';
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);



  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)



const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
}

const doLogin = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(username.value, password.value);

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
    // currentUser.value = pb.authStore.model
  } catch (error) {
    
  }
}

const doCreateAccount = async () => {
  try {
    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value
    };

    const record = await pb.collection('users').create(data);

    await doLogin();
  } catch (error) {
  }
}



</script>

<template>
    <div v-if="currentUser">
        <h1 class="text-2xl text-center">Oh, tes stats t'intéressent <span class="font-bold text-purple-500">{{ currentUser?.name }}</span> ?</h1>
    </div>

    <div>
        
    </div>

</template>