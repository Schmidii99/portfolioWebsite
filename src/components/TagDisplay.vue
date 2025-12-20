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
    <span
      class="bg-white rounded-full px-2 py-1 text-black text-xs font-medium hover:underline border border-gray-300"
      >
        {{ tag.name }}
    </span>
</template>