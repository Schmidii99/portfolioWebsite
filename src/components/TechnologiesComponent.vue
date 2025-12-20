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
  <div class="my-8 flex flex-row">
    <TechnologyIcon v-for="t in technologies" :icon="t.icon" :name="t.name"/>
  </div>
</template>