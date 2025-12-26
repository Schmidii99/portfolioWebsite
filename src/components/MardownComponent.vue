<script setup lang="ts">
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';
import { onMounted, useTemplateRef } from 'vue'

const baseEl = useTemplateRef("base-el");
const parser = new DOMParser();

defineProps({
  source: {type: String, required: true}
});

onMounted(postProcessing);

function postProcessing() {
  if (!baseEl.value || !baseEl.value.children.item(0)) {
    return;
  }

  if (postProcessElement(baseEl.value))
    postProcessing();
}

/* Returns if elements were added to the dom */
function postProcessElement(el: HTMLElement): boolean {
  let addedElements = false;

  const allEls: HTMLCollection = el.children.item(0)!.children
  for (let i = 0; i < allEls.length; i++) {
    const el = allEls.item(i);
    if (!el) {
      continue;
    }

    // postprocess image sources
    if (el instanceof HTMLImageElement) {
      if (el.src.startsWith("https://github.com/")) {
        el.src += "?raw=true";
      }
    }
    else if (el.children.length == 1 && el.children.item(0) instanceof HTMLImageElement) {
      const imgTag: HTMLImageElement = el.children.item(0)! as HTMLImageElement;
      if (imgTag.src.startsWith("https://github.com/")) {
        imgTag.src += "?raw=true";
      }
    }
    // postprocess all other els
    else {
      if (el.textContent.startsWith("<") && el.textContent.endsWith(">")) {
        const xmlString = "<div class='color-white'>" + el.textContent.trim() + "</div>";
        const doc = new DOMParser().parseFromString(xmlString, "text/html");
        el.replaceWith(...doc.children);
        addedElements = true;
      }
    }
  }

  return addedElements;
}
</script>

<template>
  <div class="prose prose-invert max-w-full" ref="base-el">
    <vue-markdown-it :source="source" />
  </div>
</template>

<style>
summary {
  color: white;
}
</style>