<script setup lang="ts">
import loupe from '@/assets/icons/loupe.vue'
import settings from '@/assets/icons/settings.vue'
import shield from '@/assets/icons/shield.vue'
import lock from '@/assets/icons/lock.vue'
import info from '@/assets/icons/info.vue'
import helpcircle from '@/assets/icons/helpcircle.vue'
import bell from '@/assets/icons/bell.vue'

import aide from '@/pages/moncompte.vue'
import apropos from '@/pages/apropos.vue'
import confidentialite from '@/pages/confidentialite.vue'
import notifications from '@/pages/notifications.vue'
import securite from '@/pages/securite.vue'

import { RouterLink } from 'vue-router'
import { ref, computed, watch } from 'vue'

const activeMenu = ref(false)
function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
    <header class="fixed z-20 flex w-full translate-y-0 items-stretch justify-between bg-purple-50 px-6 py-2 transition-all duration-300 ease-in-out top-0">
        
        <div class="flex justify-center">
            <form action="" class="relative mx-auto w-max">
                <input type="search" class="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-purple-300 peer-focus:stroke-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
            </form>
            
        </div>
        <button class="relative z-10 flex h-5 w-8 flex-col justify-between mt-2" 
        @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></div>
      </button>
        <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-white transition-all duration-300 ease-in-out"
        lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-purple-500 lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100
    :class="{ '!visible opacity-100 bg-white': activeMenu }" v-scroll-lock="activeMenu">
            <ul lg:m-0 lg:flex class="my-20 space-y-10 max-w-md mx-auto max-h-sm">

                 <RouterLink class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center" to="/moncompte" @click="closeMenu">
                <li class="flex items-center">
                    <helpcircle/>Mon Compte
                </li>
                </RouterLink>

                <RouterLink class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center" to="/notifications">
                <li class="flex items-center">
                    <bell/>Notifications
                </li>
                </RouterLink>

                <RouterLink class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center" to="/confidentialite" @click="closeMenu">
                <li class="flex items-center">
                    <shield/>Confidentialité
                </li>
                </RouterLink>

                <RouterLink class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center" to="/securite" @click="closeMenu">
                <li class="flex items-center">
                    <lock/><p>Sécurité</p>
                </li>
                </RouterLink>

               

                <RouterLink class="bg-gray-300 flex rounded-xl m-7 px-2 py-2 text-purple-600 font-bold justify-center space-x-3 items-center" to="/apropos" @click="closeMenu">
                <li class="flex items-center">
                    <info/>A Propos
                </li>
                </RouterLink>

            </ul>
        </nav>
    </header>
</template>