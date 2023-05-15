<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">about</RouterLink>
      <RouterLink to="/index">index</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>