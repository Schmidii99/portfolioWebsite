<script setup lang="ts">
defineProps({
  name: String,
  icon: String
});
</script>

<template>
  <div class="">
    <img
      :src="`src/assets/icons/${icon}.svg`"
      :alt="name"
      class="w-12 h-12 inline-block mx-4 my-2 text-white fill-white stroke-white" />
    <h6>{{name}}</h6>
  </div>
</template>

<style scoped>
img {
  -webkit-filter: invert(1);
  filter: invert(1);
}
</style>