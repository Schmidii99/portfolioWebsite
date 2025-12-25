<script setup lang="ts">
import TechnologyIcon from '@/components/TechnologyIcon.vue'
import * as tags from '@/data/tags.ts'
</script>

<template>
  <div class="my-6 flex flex-row space-x-2 space-y-2 flex-wrap">
    <TechnologyIcon v-for="t in tags" :tag="t"/>
  </div>
</template>