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
    window.alert('Compte créé avec succès !');
  } catch (error) {
  }
}
</script>

<template>
  <div>
    <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div v-if="currentUser">
          <h1 class="font-bold text-center">Oh, tu es là {{ currentUser?.name }} !</h1>
          <div>
            <button type="button" @click="doLogout"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
          </div>  
        </div>
        <div v-else>
          <h1>{{ loginMode ? "CONNEXION" : "CRÉER UN COMPTE" }}</h1>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail</label>
            <div class="mt-2">
              <input v-model="username" type="text" name="username" id="username" autocomplete="none"
                placeholder="Entrez votre adresse e-mail"
                class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
            <div class="mt-2">
              <input v-model="password" type="password" name="password" id="password" autocomplete="none"
                placeholder="Entrez votre mot de passe"
                class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div v-if="loginMode">
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doLogin"
                class="mr-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Connexion</button>
              <button type="button" @click="loginMode = false"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Créer un compte</button>
            </div>
          </div>
          <div v-else>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Nom complet</label>
              <div class="mt-2">
                <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                  placeholder="Entrez votre nom complet"
                  class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="sport" class="block text-sm font-medium leading-6 text-gray-900">Sport</label>
              <div class="mt-2">
                <select v-model="sport" name="sport" id="sport"
                  class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option value="">Choisir un sport</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                </select>
              </div>
            </div>
            <div v-if="sport === 'football'">
              <div class="sm:col-span-2 sm:col-start-1 mt-2">
                <label for="position" class="block text-sm font-medium leading-6 text-gray-900">Poste</label>
                <div class="mt-2">
                  <select v-model="position" name="position" id="position"
                    class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Choisir un poste</option>
                    <option value="defenseur">Défenseur</option>
                    <option value="milieu">Milieu</option>
                    <option value="attaquant">Attaquant</option>
                  </select>
                </div>
              </div>
            </div>
            <div v-else-if="sport === 'basketball'">
              <div class="sm:col-span-2 sm:col-start-1 mt-2">
                <label for="position" class="block text-sm font-medium leading-6 text-gray-900">Poste</label>
                <div class="mt-2">
                  <select v-model="position" name="position" id="position"
                    class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Choisir un poste</option>
                    <option value="point guard">Point Guard</option>
                    <option value="shooting guard">Shooting Guard</option>
                    <option value="small forward">Small Forward</option>
                    <option value="power forward">Power Forward</option>
                    <option value="center">Center</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Âge</label>
              <div class="mt-2">
                <input v-model="age" type="number" name="age" id="age" autocomplete="none"
                  placeholder="Entrez votre âge"
                  class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Genre</label>
              <div class="mt-2">
                <select v-model="gender" name="gender" id="gender"
                  class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option value="">Choisir un genre</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doCreateAccount"
                class="mr-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Créer le compte</button>
              <button type="button" @click="loginMode = true"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Retour à la connexion</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  <div class="p-4">
    <div v-if="currentUser" class="border-2 border-orange-500 shadow-md p-4">
      <h1 class="text-xl font-bold mb-4">Bienvenue, {{ currentUser?.name }} !</h1>
      <div>
      </div>
      <div class="bg-purple-500 p-4 rounded-lg">
        <h2 class="text-lg font-bold text-orange-200 mb-2">Informations personnelles :</h2>
        <p class="text-white pb-4"><span class="font-bold">Nom complet</span> : {{ currentUser?.name }}</p>
        <p class="text-white  pb-4"><span class="font-bold">Email</span> : {{ currentUser?.email }}</p>
        <p class="text-white  pb-4"><span class="font-bold">Sport</span> : {{ currentUser?.sport }}</p>
        <p class="text-white  pb-4"><span class="font-bold">Âge</span> : {{ currentUser?.age }}</p>
        <p class="text-white  pb-4"><span class="font-bold">Genre</span> : {{ currentUser?.gender }}</p>
      </div>
    </div>
    <div v-else>
    </div>
  </div>
</template>