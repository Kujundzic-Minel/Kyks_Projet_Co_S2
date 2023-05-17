<script setup lang="ts">
import loupe from '@/assets/icons/loupe.vue'
import settings from '@/assets/icons/settings.vue'
import shield from '@/assets/icons/shield.vue'
import lock from '@/assets/icons/lock.vue'
import info from '@/assets/icons/info.vue'
import helpcircle from '@/assets/icons/helpcircle.vue'
import bell from '@/assets/icons/bell.vue'

</script>

<template>
    <header>
        <loupe/>
        <settings/>
        <nav>
            <ul>
                <bell/>
                <li>Notifications</li>
                <shield/>
                <li>Confidentialité</li>
                <lock/>
                <li>Sécurité</li>
                <helpcircle/>
                <li>Aide</li>
                <info/>
                <li>A Propos</li>
            </ul>
        </nav>
    </header>   
</template>