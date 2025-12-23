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
  <div :class="'flex flex-col justify-center h-full aspect-square custom-border hover:cursor-pointer ' + (active ? 'custom-border-active' : '')"
  @click="handleClick">
    <div class="relative">
      <img
        :src="getImageUrl(tag.icon, ImageTypes.ICON)"
        :alt="tag.name"
        class="w-12 h-12 relative mx-4 my-2 text-white fill-white stroke-white" />
      <!--<div class="w-12 h-12 absolute top-0 left-0 z-10 test mx-4 my-2"></div>-->
    </div>
    <h6 class="text-center">{{tag.name}}</h6>
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

.custom-border-active {
  border-image: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%) 40;
  border-width: 1px;
}
</style>