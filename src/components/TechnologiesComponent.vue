<script setup lang="ts">
import TechnologyIcon from '@/components/TechnologyIcon.vue'
import { onBeforeMount, onMounted } from 'vue'

let technologies = [
  { name: 'Vue.js', icon: 'vuedotjs' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Deno', icon: 'deno' },
  // Add more technologies as needed
];

onBeforeMount(() => {
  technologies = technologies.sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<template>
  <div class="my-6 flex flex-row space-x-4">
    <TechnologyIcon v-for="t in technologies"
                    :name="t.name"
                    :icon="t.icon"
                    :click-callback="() => {}"/>
  </div>
</template>