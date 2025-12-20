import type Tag from '@/types/Tag.ts'

export default interface Project {
  title: string,
  description: string,
  viewMoreUrl: string,
  url?: string,
  sourceCode?: string,
  tags: Tag[],
  image: string,
}