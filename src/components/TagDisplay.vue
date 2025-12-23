<script setup lang="ts">
import type { PropType } from 'vue'
import type Tag from '@/types/Tag.ts'

defineProps({
  tag: {
    type: Object as PropType<Tag>,
    required: true
  }
});

</script>

<template>
    <a
      @click.stop
      target="_blank"
      :href="tag.url"
      :class="'bg-white rounded-full px-2 py-1 text-black text-xs font-medium border border-gray-300 ' + (tag.url ? 'hover:underline' : 'hover:cursor-default')"
      >
        {{ tag.name }}
    </a>
</template>