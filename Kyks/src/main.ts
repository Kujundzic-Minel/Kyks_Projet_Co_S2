import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'
import { plugin, defaultConfig } from '@formkit/vue'
import axios from 'axios';


const app = createApp(App)

app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  )
  
  app.use(V3ScrollLock, {})
  app.use(plugin, defaultConfig)

app.mount('#app')





