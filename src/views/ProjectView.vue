<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue'
import { onBeforeMount, onMounted, type Ref, ref } from 'vue'
import * as projects from '@/data/projects.ts'
import { useRouter } from 'vue-router'
import type Project from '@/types/Project.ts'
import MardownComponent from '@/components/MardownComponent.vue'
import { getMarkdownFileContent, getProjectLink } from '@/helper.ts'
import TagDisplay from '@/components/TagDisplay.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const markdownFileContent: Ref<null | string> = ref(null);
const router = useRouter()
let projectsData: Project | null = null;

onBeforeMount(() => {
  const currentRoute: string = router.currentRoute.value.fullPath;

  const p = Object.values(projects).find((p) => {
    if (currentRoute === getProjectLink(p)) {
      return p;
    }
  });

  if (!p) {
    return;
  }

  projectsData = p as Project;

  if (projectsData.markdownFile) {
    getMarkdownFileContent(projectsData.markdownFile).then((res) => {
      markdownFileContent.value = res;
    });
  }
})
</script>

<template>
  <div v-if="projectsData">
    <h1 class="font-[BBH_Bogle] text-6xl mb-2">{{ projectsData?.title || 'Project' }}</h1>
    <div class="flex flex-row mb-8 space-x-2">
      <TagDisplay v-for="tag in projectsData?.tags || []" :tag="tag" />
    </div>
    <ImageViewer :images="projectsData?.images || []" />
    <MardownComponent v-if="markdownFileContent" :source="markdownFileContent" />
  </div>
  <NotFoundView v-if="!projectsData" />
</template>