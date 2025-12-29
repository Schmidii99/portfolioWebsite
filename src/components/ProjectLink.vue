<script lang="ts" setup>
defineProps({
  text: String,
  link: { type: String, required: true },
  disabled: { type: Boolean, default: false }
})
</script>

<template>
  <a
    target="_blank"
    v-if="!disabled"
    :href="link"
    class="flex flex-row w-fit h-fit lg:text-base text-sm items-center space-x-1 text-md justify-center py-1 px-2 lg:py-2 lg:px-4 border rounded-2xl hover:text-blue-400"
    @click.stop
  >
    <span>{{ text }}</span>
    <slot />
  </a>

  <span
    v-if="disabled"
    class="flex flex-row w-fit lg:text-base text-sm h-fit items-center space-x-1 text-md justify-center py-1 px-2 lg:py-2 lg:px-4 border rounded-2xl hover:cursor-not-allowed text-gray-400"
  >
    <span>{{ text }}</span>
    <slot />
  </span>
</template>