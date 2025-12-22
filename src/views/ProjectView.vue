<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue';
import { onBeforeMount } from 'vue';
import * as projects from "@/components/projects.ts";
import { useRouter } from 'vue-router'
import type Project from '@/types/Project.ts'
import { floslabs } from '@/components/projects.ts'

const router = useRouter();
let projectsData: Project | null = null;

onBeforeMount(() => {
  const currentProjectName = router.currentRoute.value.params.projectName as string;

  Object.entries(projects).find((p) => {
    if (p[0] === currentProjectName) {
      projectsData = p[1] as Project;
    }
  });

  projectsData = floslabs;

  if (!projectsData)
    router.replace({ name: 'NotFound'});

  console.log(projectsData)
})

</script>

<template>
  <ImageViewer :images="projectsData?.images" />
</template>

<style scoped>

</style>