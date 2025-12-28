<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
  <RouterLink to="/about" class="absolute bottom-0 right-1 text-gray-800 underline">About</RouterLink>
  <div class="w-screen h-screen flex justify-center bg-slate-900 text-white overflow-x-hidden overflow-y-scroll">
    <div v-if="router.currentRoute.value.fullPath != '/'" class="lg:w-2/3 w-11/12 mt-16">
      <RouterView />
    </div>
    <div v-if="router.currentRoute.value.fullPath == '/'" class="w-full h-screen overflow-y-hidden">
      <RouterView />
    </div>
  </div>
</template>
