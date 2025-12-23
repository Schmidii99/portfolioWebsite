<script setup lang="ts">
import * as projects from '@/data/projects.ts'
import ProjectDisplay from '@/components/ProjectDisplay.vue'
</script>

<template>
  <div class="grid grid-cols-2 space-y-4">
    <ProjectDisplay v-for="project in projects" :project="project"/>
  </div>
</template>