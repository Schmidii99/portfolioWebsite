<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
  <div class="w-screen h-screen flex justify-center bg-slate-900 text-white overflow-x-hidden overflow-y-scroll">
    <div v-if="router.currentRoute.value.fullPath != '/'" class="w-2/3 mt-16">
      <RouterView />
    </div>
    <div v-if="router.currentRoute.value.fullPath == '/'" class="w-full h-screen overflow-y-hidden">
      <RouterView />
    </div>
  </div>
</template>
