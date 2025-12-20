import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type Tag from '@/types/Tag.ts'
import type Project from '@/types/Project.ts'

export const useFilterStore = defineStore('filter', () => {
  const tags: Ref<Array<Tag>> = ref([])

  function addTagFilter(tag: Tag) {
    if (!tags.value.includes(tag)) {
      tags.value.push(tag);
      // save to local storage
      localStorage.setItem('tag_filters', JSON.stringify(tags.value));
    }
  }
  function removeTagFilter(tag: Tag) {
    tags.value = tags.value.filter((t) => t.name != tag.name ||  t.icon != tag.icon);
    localStorage.setItem('tag_filters', JSON.stringify(tags.value))
  }
  function isTagActive(tag: Tag): boolean {
    return tags.value.filter((t) => t.name === tag.name && t.icon == tag.icon).length > 0;
  }

  function loadFromLocalStorage() {
    const storedTags = localStorage.getItem('tag_filters');
    if (storedTags) {
      try {
        tags.value = JSON.parse(storedTags);
      } catch (e) {
        console.error('Failed to parse tag filters from local storage', e);
      }
    }
  }

  function isEmpty(): boolean {
    return tags.value.length === 0;
  }

  function isProjectActive(p: Project) {
    if (isEmpty()) {
      return true;
    }
    for (const tag of tags.value) {
      if (!p.tags.find((t) => t.name === tag.name && t.icon == tag.icon)) {
        return false;
      }
    }
    return true;
  }

  return { addTagFilter, removeTagFilter, isTagActive, loadFromLocalStorage, isEmpty, isProjectActive }
})
