<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue'
import { onBeforeMount, type Ref, ref } from 'vue'
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
  let currentRoute: string = router.currentRoute.value.fullPath;
  if (currentRoute.includes("#"))
    currentRoute = currentRoute.split("#")[0]!;

  const p = Object.values(projects).find((p) => {
    if (currentRoute === getProjectLink(p)) {
      return p;
    }
  });

  if (!p) {
    return;
  }

  projectsData = p as Project;

  if (projectsData.markdownFile && !projectsData.markdownFile.startsWith("http")) {
    getMarkdownFileContent(projectsData.markdownFile).then((res) => {
      markdownFileContent.value = res;
    });
  } else if (projectsData.markdownFile && projectsData.markdownFile.startsWith("http")) {
    fetch(projectsData.markdownFile)
      .then((response) => response.text())
      .then((data) => {
        markdownFileContent.value = data;
      });
  }
});
</script>

<template>
  <div v-if="projectsData" class="pb-16">
    <div class="flex w-full flex-row justify-between">
      <RouterLink to="/projects/" class="text-slate-300 hover:text-blue-500 hover:cursor-pointer hover:underline flex flex-row items-center">
        ← Back to the projects
      </RouterLink>
      <a v-show="(projectsData as Project).sourceCode" :href="(projectsData as Project).sourceCode" class="text-slate-300 hover:text-blue-500 hover:cursor-pointer hover:underline flex flex-row items-center">
        To the sourcecode →
      </a>
    </div>
    <h1 class="font-[BBH_Bogle] text-6xl mb-2">{{ (projectsData as Project)?.title || 'Project' }}</h1>
    <div class="flex flex-row mb-8 space-x-2">
      <TagDisplay v-for="tag in (projectsData as Project)?.tags || []" :tag="tag" />
    </div>
    <ImageViewer v-if="(projectsData as Project).images && (projectsData as Project).images!.length > 0" :images="(projectsData as Project).images" />
    <MardownComponent v-if="markdownFileContent" :source="markdownFileContent"/>
  </div>
  <NotFoundView v-if="!projectsData" />
</template>