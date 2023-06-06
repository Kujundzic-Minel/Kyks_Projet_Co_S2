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
    
    
    <h1 class="font-bold text-center text-xl px-5">Wow.. t'avances bien dans tes défis ! {{ currentUser?.name }} !</h1>

    <div class="flex justify-center py-5"><img src="@/../public/img/defi_etoile.svg" alt=""></div>

    <div class="flex justify-items-center">
    <hr class="w-[200px] border border-indigo-600 m-auto lg:w-[1072px]">
    <p class="pr-10 text-[18px] text-indigo-600 lg:text-[32px] lg:pr-20">Football</p>
    </div>

    <div class="h-[160px] my-2 lg:h-[300px] flex w-full overflow-x-auto  pr-2  lg:pl-24 lg:gap-20 lg:pr-24 lg:my-8">

    <RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/but.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">
</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>
</div>


<div class="h-[160px] my-2 lg:h-[300px] flex w-full overflow-x-auto  pr-2  lg:pl-24 lg:gap-20 lg:pr-24 lg:my-8">
    <RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/passdec.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="/public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="/public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="/public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="/public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="/public/img/bloque.png">

</div>
</RouterLink>
    </div>




    <div class="flex justify-items-center">
    <hr class="w-[200px] border border-indigo-600 m-auto lg:w-[1072px]">
    <p class="pr-10 text-[18px] text-indigo-600 lg:text-[32px] lg:pr-20">Basketball</p>
</div>
<div class="h-[160px] my-2 lg:h-[300px] flex w-full overflow-x-auto  pr-2  lg:pl-24 lg:gap-20 lg:pr-24 lg:my-8">

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/panier.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>
    </div>
<div class="h-[160px] my-2 lg:h-[300px] flex w-full overflow-x-auto  pr-2  lg:pl-24 lg:gap-20 lg:pr-24 lg:my-8">

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/rebond.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

<RouterLink class="menu-link" to="">
<div class="ml-12 h-[140px] w-[140px] grid justify-items-center lg:h-[240px] lg:w-[240px]">
    <img class="h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]" src="@/../public/img/bloque.png">

</div>
</RouterLink>

</div>

</template>