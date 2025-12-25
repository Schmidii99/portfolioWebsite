<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue'
import { onBeforeMount, onMounted, ref } from 'vue'
import * as projects from '@/data/projects.ts'
import { useRouter } from 'vue-router'
import type Project from '@/types/Project.ts'
import MardownComponent from '@/components/MardownComponent.vue'
import { getMarkdownFileContent } from '@/helper.ts'
import TechnologyIcon from '@/components/TechnologyIcon.vue'
import TagDisplay from '@/components/TagDisplay.vue'

const markdownFileContent = ref('')
const router = useRouter()
let projectsData: Project

onBeforeMount(async () => {
  const currentProjectName = router.currentRoute.value.params.projectName as string

  Object.entries(projects).find((p) => {
    if (p[0] === currentProjectName) {
      projectsData = p[1] as Project
      return
    }
  })

  if (!projectsData)
    await router.replace({ name: 'NotFound' })

  if (projectsData.markdownFile) {
    markdownFileContent.value = await getMarkdownFileContent(projectsData.markdownFile);
  }
})
</script>

<template>
  <h1 class="font-[BBH_Bogle] text-6xl mb-2">{{ projectsData.title }}</h1>
  <div class="flex flex-row mb-8 space-x-2">
    <TagDisplay v-for="tag in projectsData.tags" :tag="tag" />
  </div>
  <ImageViewer :images="projectsData?.images" />
  <MardownComponent :source="markdownFileContent" />
</template>