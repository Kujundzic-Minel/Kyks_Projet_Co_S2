import './assets/css/input.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  )

app.mount('#app')
