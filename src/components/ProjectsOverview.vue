<script setup lang="ts">
import * as projects from './projects.ts'
import ProjectDisplay from '@/components/ProjectDisplay.vue'
import { useFilterStore } from '@/stores/filterStore.ts'

const tagFilter = useFilterStore();
</script>

<template>
  <div class="grid grid-cols-2 space-y-4">
    <ProjectDisplay v-for="project in projects" :project="project"/>
  </div>
</template>