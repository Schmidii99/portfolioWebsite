<script setup lang="ts">
import type Project from '@/types/Project.ts';
import { onBeforeMount, type PropType } from 'vue'
import TagDisplay from '@/components/TagDisplay.vue'
import ProjectLink from '@/components/ProjectLink.vue'
import router from '@/router'
import { useFilterStore } from '@/stores/filterStore.ts'

const filterStore = useFilterStore();

const props = defineProps({
  project: {type: Object as PropType<Project>, required: true}
});

onBeforeMount(() => {
  if (props.project?.image == "none" || props.project?.image.length == 0)
    props.project.image = "none.png";
});
</script>

<template>
  <div class="bg-white rounded-lg h-fit flex flex-col hover:cursor-pointer text-black mr-4"
       @click="() => {
         router.push('/project/' + project.viewMoreUrl);
       }"
       v-show="filterStore.isProjectActive(project)">

    <img :src="'src/assets/projectIcons/' + project.image" alt="Project Image" class="h-80 w-full rounded-t-lg object-cover"/>

    <div class="flex flex-col m-2">
      <h3 class="text-xl font-bold mb-2 text-slate-900">{{ project.title }}</h3>
      <p class="text-slate-700 text-base h-12 text-ellipsis">{{ project.description }}</p>
    </div>

    <div class="m-4 flex flex-row space-x-2 w-full overflow-scroll h-6">
      <TagDisplay v-for="tag in project.tags" :tag="tag" />
    </div>

    <div class="flex flex-row m-4 justify-between">
      <ProjectLink v-if="project.url" :link="project.url || ''">
        <span>View Page</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
      </ProjectLink>

      <ProjectLink v-if="project.sourceCode" :link="project.sourceCode" text="View Code">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
      </ProjectLink>
      <ProjectLink v-if="!project.sourceCode" link="" text="Not Open Source" :disabled="true" />

      <RouterLink class="flex flex-row h-full items-center space-x-1 text-md justify-center py-2 px-4 border rounded-2xl hover:text-blue-400"
                  :to="'/project/' + project.viewMoreUrl"
                  text="About" />
    </div>
  </div>
</template>