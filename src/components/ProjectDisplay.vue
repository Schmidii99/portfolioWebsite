<script setup lang="ts">
import type Project from '@/types/Project.ts'
import { type PropType } from 'vue'
import TagDisplay from '@/components/TagDisplay.vue'
import ProjectLink from '@/components/ProjectLink.vue'
import { useFilterStore } from '@/stores/filterStore.ts'
import { doesProjectHaveDetails, getImageUrl, getProjectLink, ImageTypes } from '@/helper.ts'
import { useRouter } from 'vue-router'
import FeaturedTag from '@/components/FeaturedTag.vue'

const filterStore = useFilterStore();
const router = useRouter();

const props = defineProps({
  project: { type: Object as PropType<Project>, required: true },
})

function getCoverImage(): string {
  if (props.project.cover)
    return getImageUrl(props.project.cover, ImageTypes.COVER);

  if (props.project.images && props.project.images.length > 0)
    return getImageUrl(props.project.images[0]!, ImageTypes.PROJECT);

  return getImageUrl('none.png', ImageTypes.COVER);
}
</script>

<template>
  <div
    :class="'bg-white rounded-3xl h-fit flex flex-col text-black lg:mr-4 relative ' + (doesProjectHaveDetails(project) ? 'hover:cursor-pointer' : '')"
    @click="
      async () => {
        if (doesProjectHaveDetails(project))
          await router.push(getProjectLink(project))
      }
    "
    v-show="filterStore.isProjectActive(project)"
  >
    <FeaturedTag v-show="project.featured" />

    <img
      :src="getCoverImage()"
      alt="Project Image"
      class="h-80 w-full rounded-t-3xl object-cover"
    />

    <div class="flex flex-col m-2">
      <h3 class="text-xl font-bold mb-2 text-slate-900 font-[Murecho]">{{ project.title }}</h3>
      <p class="text-slate-700 text-base h-fit min-h-12 text-ellipsis">{{ project.description }}</p>
    </div>

    <div class="m-4 flex flex-row space-x-2 lg:space-y-0 w-full flex-wrap lg:flex-nowrap lg:overflow-hidden">
      <TagDisplay v-for="tag in project.tags.sort((a, b) => a.name.localeCompare(b.name))" :tag="tag" />
    </div>

    <div class="flex flex-row m-4 space-x-4 lg:space-x-0 justify-between">
      <ProjectLink v-if="project.url && project.url !== 'selfhosted'" :link="project.url || ''">
        <span>View Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      </ProjectLink>
      <ProjectLink v-if="project.url && project.url === 'selfhosted'" link="" text="Self Hosted" :disabled="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
      </ProjectLink>

      <ProjectLink v-if="project.sourceCode" :link="project.sourceCode" text="View Code">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      </ProjectLink>
      <ProjectLink v-if="!project.sourceCode" link="" text="Not Open Source" :disabled="true" />

      <RouterLink
        v-if="doesProjectHaveDetails(project)"
        class="flex flex-row h-full items-center space-x-1 text-md justify-center py-2 px-4 border rounded-2xl hover:text-blue-400"
        :to="getProjectLink(project)"
        text="About"
      />
    </div>
  </div>
</template>