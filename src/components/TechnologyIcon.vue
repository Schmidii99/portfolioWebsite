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
  <div :class="'flex flex-col justify-center items-center w-24 h-24 aspect-square custom-border hover:cursor-pointer ' + (active ? 'custom-border-active' : '')"
  @click="handleClick">
    <div class="w-12 h-12 mb-2 flex justify-center items-center">
      <img
        :src="getImageUrl(tag.icon, ImageTypes.ICON)"
        :alt="tag.name"
        class="w-full h-full text-white fill-white stroke-white" />
    </div>


    <h6 class="text-center">{{tag.name}}</h6>
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
  border: 1px solid transparent;
  padding: 5px;
}

.custom-border:hover {
  -o-border-image: -o-linear-gradient(315deg, #FC466B 0%, #3F5EFB 100%) 40;
  border-image: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%) 40;
  border-width: 1px;
}

.custom-border-active {
  -o-border-image: -o-linear-gradient(315deg, #FC466B 0%, #3F5EFB 100%) 40;
  border-image: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%) 40;
  border-width: 1px;
}
</style>