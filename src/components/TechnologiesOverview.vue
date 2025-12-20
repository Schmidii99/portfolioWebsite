<script setup lang="ts">
import TechnologyIcon from '@/components/TechnologyIcon.vue'
import * as tags from './tags.ts'
</script>

<template>
  <div class="my-6 flex flex-row space-x-4">
    <TechnologyIcon v-for="t in tags"
                    :name="t.name"
                    :icon="t.icon"
                    :click-callback="() => {}"/>
  </div>
</template>