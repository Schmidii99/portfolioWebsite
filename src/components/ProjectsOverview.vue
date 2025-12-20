<script setup lang="ts">
import * as projects from './projects.ts'
import ProjectDisplay from '@/components/ProjectDisplay.vue'
</script>

<template>
  <div class="grid grid-cols-2 space-x-4">
    <ProjectDisplay v-for="project in projects" :project="project"/>
  </div>
</template>