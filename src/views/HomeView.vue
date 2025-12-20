<script setup lang="ts">
import Divider from '@/components/Divider.vue'
import TechnologiesComponent from '@/components/TechnologiesComponent.vue'
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <h1 class="font-[BBH_Bogle] text-6xl">My Projects</h1>
    <divider class="bg-white"/>
    <h3 class="text-2xl mt-16 mb-4">Technologies</h3>
    <p class="text-gray-500">Click on a icon to filter for all projects that used it.</p>
    <divider class="bg-gray-800" />
    <TechnologiesComponent />
    <divider class="bg-gray-800" />
  </main>
</template>
