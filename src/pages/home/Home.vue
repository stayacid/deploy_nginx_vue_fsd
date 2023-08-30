<template>
  <div>
    <h1>Home</h1>
    <button @click="goToAbout">About</button>
  </div>
</template>

<script setup lang="ts">
import { router } from '../../providers/router'

const goToAbout = () => {
  router.push('/about')
}
</script>
