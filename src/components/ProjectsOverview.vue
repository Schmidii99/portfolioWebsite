<script setup lang="ts">
import * as projects from '@/data/projects.ts'
import ProjectDisplay from '@/components/ProjectDisplay.vue'
</script>

<template>
  <div class="grid grid-cols-2 space-y-4 space-x-4">
    <ProjectDisplay v-for="project in Object.values(projects).filter(p => p.featured)" :project="project" />
    <ProjectDisplay v-for="project in Object.values(projects).filter(p => !p.featured)" :project="project"/>
  </div>
</template>