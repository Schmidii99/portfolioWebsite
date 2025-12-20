<script setup lang="ts">
defineProps({
  name: String,
  icon: String,
  clickCallback: {type: Function, required: true}
});
</script>

<template>
  <div class="flex flex-col justify-center h-full aspect-square custom-border hover:cursor-pointer"
  @click="() => clickCallback(name)">
    <img
      :src="`src/assets/icons/${icon}.svg`"
      :alt="name"
      class="w-12 h-12 inline-block mx-4 my-2 text-white fill-white stroke-white" />
    <h6 class="text-center">{{name}}</h6>
  </div>
</template>

<style scoped>
img {
  -webkit-filter: invert(1);
  filter: invert(1);
}

.custom-border {
  border: 1px solid transparent;
  padding: 5px;
}

.custom-border:hover {
  border-image: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%) 40;
  border-width: 1px;
}
</style>