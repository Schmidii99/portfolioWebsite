<script lang="ts" setup>
defineProps({
  text: String,
  link: { type: String, required: true },
  disabled: { type: Boolean, default: false }
})
</script>

<template>
  <a
    v-if="!disabled"
    :href="link"
    class="flex flex-row h-full items-center space-x-1 text-md justify-center py-2 px-4 border rounded-2xl hover:text-blue-400"
  >
    <span>{{ text }}</span>
    <slot />
  </a>

  <span
    v-if="disabled"
    class="flex flex-row h-full items-center space-x-1 text-md justify-center py-2 px-4 border rounded-2xl hover:cursor-not-allowed text-gray-400"
  >
    <span>{{ text }}</span>
    <slot />
  </span>
</template>