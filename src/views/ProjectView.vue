<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue';
import { onBeforeMount } from 'vue'
import * as projects from "@/data/projects.ts";
import { useRouter } from 'vue-router'
import type Project from '@/types/Project.ts'

const router = useRouter();
let projectsData: Project;

onBeforeMount(() => {
  const currentProjectName = router.currentRoute.value.params.projectName as string;

  Object.entries(projects).find((p) => {
    if (p[0] === currentProjectName) {
      projectsData = p[1] as Project;
      return;
    }
  });

  if (!projectsData)
    router.replace({ name: 'NotFound'});
})

</script>

<template>
  <ImageViewer :images="projectsData?.images" />
</template>

<style scoped>

</style>