<script setup lang="ts">
import { pb } from "@/backend";
import { ref } from 'vue';

import PocketBase from 'pocketbase';
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref(""); 
const sport = ref("");
const position = ref("");
const age = ref("");
const gender = ref("");

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

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
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
      "name": fullName.value,
      "sport": sport.value,
      "position": position.value,
      "age": age.value,
      "gender": gender.value
    };

    const record = await pb.collection('users').create(data);

    await doLogin();
  } catch (error) {
  }
}
</script>

<template>
    
    
    <h1 class="font-bold text-center">Wow.. t'avances bien dans tes défis ! {{ currentUser?.name }} !</h1>

    


</template>