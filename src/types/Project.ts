import type Tag from '@/types/Tag.ts'

export default interface Project {
  title: string,
  description: string,
  url: string,
  tags: Tag[],
}