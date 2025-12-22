<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getImageUrl, getProjectImageUrl } from '@/helper.ts'

const props = defineProps({
  images: { type: Array<string>, default: [] }
});

const currentIndex = ref(0);

const goToPrevious = () => {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1;
};

const goToNext = () => {
  currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1;
};
</script>

<template>
  <div class="flex justify-center w-full p-8">
    <div class="relative w-full">
      <div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-700">
        <img
          :src="images.length != 0 ? getProjectImageUrl(images[currentIndex]!) : getImageUrl('noimage.svg')"
          :alt="'Slide ' + (currentIndex + 1)"
          :class="'w-full h-full ' + (images.length != 0 ? 'object-cover' : '')"
        />

        <div class="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
          {{ images.length != 0 ? currentIndex + 1 : 0}} / {{ images.length }}
        </div>
      </div>

      <button
        @click="goToPrevious"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left-icon lucide-arrow-big-left"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/></svg>
      </button>

      <button
        @click="goToNext"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-right-icon lucide-arrow-big-right"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/></svg>
      </button>

      <div class="flex justify-center gap-2 mt-6">
        <button
          v-for="(img, index) in images"
          :key="index"
          @click="() => currentIndex = index"
          :class="'w-2.5 h-2.5 rounded-full transition-all duration-300 ' + (index === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60')"
        />
      </div>
    </div>
  </div>
</template>

