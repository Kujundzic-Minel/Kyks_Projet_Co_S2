import { createRouter, createWebHistory } from 'vue-router'
import aide from '@/pages/aide.vue'
import contact from '@/pages/contact.vue'
import index from '@/pages/index.vue'
import securite from '@/pages/securite.vue'
import profil from '@/pages/profil.vue'
import notifications from '@/pages/notifications.vue'
import event from '@/pages/event.vue'
import apropos from '@/pages/apropos.vue'
import confidentialite from '@/pages/confidentialite.vue'
import inscription from '@/pages/inscription.vue'


const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
{
path: '/',
name: 'home',
component: index
},
{
path: '/aide',
name: 'aide',
components: aide
},
{
path: '/contact',
name: 'contact',
components: contact
},
{
path: '/securite',
name: 'securite',
components: securite
},
{
path: '/profil',
name: 'profil',
components: profil
},
{
path: '/notifications',
name: 'notifications',
components: notifications
},
{
path: '/event',
name: 'event',
components: event
},
{
path: '/apropos',
name: 'apropos',
components: apropos
},
{
 path: '/confidentialite',
name: 'confidentialite',
components: confidentialite
},
{
path: '/confidentialite',
name: 'confidentialite',
components: confidentialite
},
{
path: '/inscription',
name: 'inscription',
components: inscription 
},
]
})
export default router
