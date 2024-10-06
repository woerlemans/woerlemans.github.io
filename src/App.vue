

<template>
  <header>

      <nav>

        <RouterLink to="/">Logo</RouterLink>
        <div class="nav-divider">
        <RouterLink :to="{ name: 'home', hash: '#about' }">About</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#skills' }">Skills</RouterLink>
        <RouterLink to="/about">Work</RouterLink>
        <RouterLink to="/about">Projects</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>
