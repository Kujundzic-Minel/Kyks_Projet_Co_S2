import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'
import Vue3Geolocation from 'vue3-geolocation'

const app = createApp(App)

app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  )
  
  app.use(V3ScrollLock, {})

app.mount('#app')
app.use(Vue3Geolocation);
