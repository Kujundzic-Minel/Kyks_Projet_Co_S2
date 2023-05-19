<script setup lang="ts">
import facebook from '@/assets/icons/facebook.vue'
import instagram from '@/assets/icons/instagram.vue'
import twitter from '@/assets/icons/twitter.vue'
import linkedin from '@/assets/icons/linkedin.vue'
import kyks from '@/assets/icons/KYKS.vue'
</script>

<template>
    <footer class="grille space-y-6 bg-purple-500 py-16 px-6 text-white lg:space-y-0">
      <nav class="col-span-3 col-start-7 space-y-3"> 
        <h4 class="font-bold uppercase">Menu</h4>
        <ul>
          <li><a href="#" class="text-white">Mentions légales</a></li>
          <li><a href="#" class="text-white">Contact</a></li>
        </ul>
      </nav>
  
      <div class="col-span-3 col-start-10 space-y-3">
        <h4 class="font-bold uppercase">Contact</h4>
        <address>
          25 Place Tharradin<br />25200 Montbéliard<br />
          <a href="tel:0384542727" class="text-white">03 54 65 89 72</a><br />
          <a href="mailto:contact@kyks.com" class="text-white">contact@kyks.com</a>
        </address>
      </div>

      <div class="col-span-3 col-start-1"><kyks/></div>
  
      <div class="col-span-3 col-start-10 space-y-3">
        <h4 class="font-bold uppercase">Nous suivre</h4>
        <ul class="flex gap-4">
          <li>
            <a href="https://facebook.com" aria-label="facebook"><facebook/></a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="instagram"><instagram/></a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="twitter"><twitter/></a>
          </li>
          <li>
            <a href="https://linkedin.com" aria-label="linkedin"><linkedin/></a>
          </li>
        </ul>
      </div>
    </footer>
  </template>