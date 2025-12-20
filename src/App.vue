<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen h-screen flex justify-center bg-slate-900 text-white">
    <div class="w-2/3 mt-16">
      <RouterView />
    </div>
  </div>
</template>
