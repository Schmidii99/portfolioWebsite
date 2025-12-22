import type Project from '@/types/Project.ts'
import * as tags from '@/components/tags.ts'

export const protfolioWebsite: Project = {
  title: 'Project Portfolio Website',
  description: 'A website to showcase my projects and technologies that I have woked with.',
  viewMoreUrl: 'portfolioProject',
  sourceCode: "",
  image: "example.png",
  tags: [
    tags.vue
  ],
}

export const floslabs: Project = {
  title: 'FlosLabs.de Game Website',
  description: 'A website to easily play board games with friends online.',
  viewMoreUrl: 'floslabs',
  sourceCode: "https://github.com/Schmidii99/Brettspiele.io",
  url: "https://floslabs.de",
  image: "floslabs.jpeg",
  tags: [tags.vue, tags.redis, tags.deno],
  images: ["floslabs1.jpeg", "floslabs2.jpeg", "floslabs3.jpeg", 'floslabs4.jpeg', "floslabs5.jpeg"],
  paragraphs: []
}

export const kleinanzeigenplus: Project = {
  title: 'KleinanzeigenPlus',
  description: 'A desktop app of the german website "Kleinanzeigen" with extra features.',
  viewMoreUrl: 'kleinanzeigenplus',
  image: "",
  tags: [],
}