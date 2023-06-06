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

    <div class="h-[104px] border-y-2 border-t-violet-600 flex justify-between items-center px-4 ">
        <img class="h-[60px] w-[60px]" src="@/../public/img/pdp.png">
        <p class="font-bold text-[28px]">Yanis</p>
        <img class="h-[53px] w-[114px]" src="/public/img/notation.png">
    </div>
    <div class="h-[104px] border-y-2 border-t-violet-600 flex justify-between items-center px-4 ">
        <img class="h-[60px] w-[60px]" src="/public/img/pdp.png">
        <p class="font-bold text-[28px]">Léo</p>
        <img class="h-[53px] w-[114px]" src="/public/img/notation.png">
    </div>
    <div class="h-[104px] border-y-2 border-t-violet-600 flex justify-between items-center px-4 ">
        <img class="h-[60px] w-[60px]" src="/public/img/pdp.png">
        <p class="font-bold text-[28px]">Maxime</p>
        <img class="h-[53px] w-[114px]" src="/public/img/notation.png">
    </div>
    <div class="h-[104px] border-y-2 border-t-violet-600 flex justify-between items-center px-4 ">
        <img class="h-[60px] w-[60px]" src="/public/img/pdp.png">
        <p class="font-bold text-[28px]">Jules</p>
        <img class="h-[53px] w-[114px]" src="/public/img/notation.png">
    </div>
    <div class="h-[104px] border-y-2 border-t-violet-600 border-x-2 border-b-violet-600 flex justify-between items-center px-4 ">
        <img class="h-[60px] w-[60px]" src="/public/img/pdp.png">
        <p class="font-bold text-[28px]">Valentin</p>
        <img class="h-[53px] w-[114px]" src="/public/img/notation.png">
    </div>
</template>