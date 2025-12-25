import type Project from '@/types/Project.ts'
import * as t from '@/data/tags.ts'

export const protfolioWebsite: Project = {
  title: 'Portfolio Website',
  description: 'A website to showcase my projects and technologies that I have worked with.',
  cover: "example.png",
  tags: [t.vue],
}

export const floslabs: Project = {
  title: 'FlosLabs.de Game Website',
  description: 'A website to easily play board games with friends online.',
  sourceCode: "https://github.com/Schmidii99/Brettspiele.io",
  url: "https://floslabs.de",
  cover: "floslabs.jpeg",
  tags: [t.vue, t.redis, t.deno],
  images: ["floslabs1.jpeg", "floslabs3.jpeg", "floslabs2.jpeg", 'floslabs4.jpeg', "floslabs5.jpeg"],
  markdownFile: "floslabs.md",
}

export const kleinanzeigenPlus: Project = {
  title: 'kleinanzeigenPlus',
  description: 'A desktop app of the german website "Kleinanzeigen" with extra features.',
  tags: [],
}

export const cppMandelbrot: Project = {
  title: 'Mandelbrot in C++',
  description: 'A desktop app displaying the Mandelbrot set using C++ and SFML.',
  tags: [],
  images: ["mandelbrot1.png", "mandelbrot2.png", "mandelbrot3.png", "mandelbrot4.png", "mandelbrot5.png"],
}