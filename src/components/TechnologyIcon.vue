<script setup lang="ts">
import { onMounted, type PropType, ref, type Ref } from 'vue'
import type Tag from '@/types/Tag.ts'
import { useFilterStore } from '@/stores/filterStore.ts'
import { getImageUrl, ImageTypes } from '@/helper.ts'

const props = defineProps({
  tag: {type: Object as PropType<Tag>, required: true}
});

const active: Ref<Boolean> = ref(false);
const filters = useFilterStore();

function handleClick() {
  if (active.value) {
    filters.removeTagFilter(props.tag);
  } else {
    filters.addTagFilter(props.tag);
  }
  active.value = !active.value;
}

onMounted(() => {
  active.value = filters.isTagActive(props.tag);
})
</script>

<template>
  <div :class="'m-1 p-1 flex flex-col justify-center items-center lg:w-24 lg:h-24 w-16 h-16 aspect-square lg:hover:border-[1px] hover:cursor-pointer ' + (active ? 'custom-border-active' : '')"
  @click="handleClick">
    <div class="lg:w-12 lg:h-12 w-8 h-8 mb-2 flex justify-center items-center">
      <img
        :src="getImageUrl(tag.icon, ImageTypes.ICON)"
        :alt="tag.name"
        class="w-full h-full text-white fill-white stroke-white" />
    </div>


    <h6 class="text-center lg:text-base text-xs w-full">{{tag.name}}</h6>
  </div>
</template>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

img {
  -webkit-filter: invert(1) grayscale(1) contrast(100%);
  filter: invert(1) grayscale(1) contrast(100%) ;
}

.custom-border {
  border: 0 solid transparent; /* Keeps layout stable so it doesn't jump on hover */
  padding: 5px;
  transition: border-image 0.3s; /* Optional: smooths the transition */
  border-image: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%) 1;
}

.custom-border-active {
  border-width: 1px;
  /* Reduced the slice value to '1' so it stretches the gradient across the whole side */
  border-image: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%) 1;
}
</style>