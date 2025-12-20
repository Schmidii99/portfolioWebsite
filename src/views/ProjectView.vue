<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue';
import { onBeforeMount } from 'vue';
import * as projects from "@/components/projects.ts";

onBeforeMount(() => {

});

</script>

<template>
  <ImageViewer :images="[
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop'
  ]" />
</template>

<style scoped>

</style>