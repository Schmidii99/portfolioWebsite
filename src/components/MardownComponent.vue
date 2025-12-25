<script setup lang="ts">
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

defineProps({
  source: {type: String, required: true}
});
</script>

<template>
  <vue-markdown-it class="prose prose-invert w-full" :source="source" />
</template>