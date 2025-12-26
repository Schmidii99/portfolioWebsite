import type Tag from '@/types/Tag.ts'

export default interface Project {
  title: string,
  description: string,
  url?: string, // use "selfhosted" to indicate that the project can be selfhosted
  sourceCode?: string,
  tags: Tag[],
  cover?: string, // if no cover is provided, the first image from images will be used
  images?: string[],
  markdownFile?: string, // you can also use a link to a markdown file (e.g. from a github repo)
  featured?: boolean,
}