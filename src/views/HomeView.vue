<script setup lang="ts">
import Divider from '@/components/Divider.vue'
import TechnologiesOverview from '@/components/TechnologiesOverview.vue'
import ProjectsOverview from '@/components/ProjectsOverview.vue'
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <h1 class="font-[BBH_Bogle] text-6xl">My Projects</h1>
    <divider class="bg-white"/>
    <h3 class="text-2xl mt-16 mb-4">Technologies</h3>
    <p class="text-gray-500">Click on a icon to filter for all projects that used it.</p>
    <divider class="bg-gray-800" />
    <TechnologiesOverview />
    <divider class="bg-gray-800" />
    <h3 class="text-2xl mt-16 mb-4">Projects Overview</h3>
    <p class="text-gray-500 mb-2">Click on a project to get more information about it.</p>
    <ProjectsOverview />
    <h3 class="text-center w-full mt-16 pb-8">And more to come...</h3>
  </main>
</template>
