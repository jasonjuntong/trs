<script setup lang="ts">
import { RouterView } from 'vue-router'
import useAuthStore from '@/stores/auth.ts'
import { onMounted } from 'vue'

onMounted(() => {
  useAuthStore().listenToAuthEvents()
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
