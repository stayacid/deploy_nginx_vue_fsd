<template>
  <div>
    <h1>About</h1>
    <button @click="goToHome">Home</button>
  </div>
</template>

<script setup lang="ts">
import { router } from '../../providers/router'

const goToHome = () => {
  router.push('/')
}
</script>
