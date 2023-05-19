<script setup lang="ts">
import loupe from '@/assets/icons/loupe.vue'
import settings from '@/assets/icons/settings.vue'
import shield from '@/assets/icons/shield.vue'
import lock from '@/assets/icons/lock.vue'
import info from '@/assets/icons/info.vue'
import helpcircle from '@/assets/icons/helpcircle.vue'
import bell from '@/assets/icons/bell.vue'

import aide from '@/pages/aide.vue'
import apropos from '@/pages/apropos.vue'
import confidentialite from '@/pages/confientalite.vue'
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
    <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-purple-50 px-6 py-2 transition-all duration-300 ease-in-out">
        <button class="z-5"><loupe/></button>
        <button class="relative z-10 flex h-5 w-8 flex-col justify-between" 
        @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></div>
      </button>
        <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-white transition-all duration-300 ease-in-out"
        lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-purple-500 lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100
    :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
            <ul lg:m-0 lg:flex>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="<notifications/>"><bell/>Notifications</RouterLink>
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="<confidentialite/>" @click="closeMenu"><shield/>Confidentialité</RouterLink>
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="<securite/>" @click="closeMenu"><lock/><p>Sécurité</p></RouterLink>
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="<aide/>" @click="closeMenu"><helpcircle/>Aide</RouterLink>
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="<apropos/>" @click="closeMenu"><info/>A Propos</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>