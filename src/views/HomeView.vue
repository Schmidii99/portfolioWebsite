<script setup lang="ts">
import Divider from '@/components/Divider.vue'
import TechnologiesComponent from '@/components/TechnologiesComponent.vue'
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <h1 class="font-[BBH_Bogle] text-6xl">My Projects</h1>
    <divider class="bg-white"/>
    <h3 class="text-2xl mt-16">Technologies</h3>
    <divider class="bg-gray-700" />
    <TechnologiesComponent />
    <divider class="bg-gray-700" />
  </main>
</template>
