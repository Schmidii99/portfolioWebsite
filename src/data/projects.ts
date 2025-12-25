import type Project from '@/types/Project.ts'
import * as t from '@/data/tags.ts'

export const protfolioTemplate: Project = {
  title: 'Portfolio Website',
  description: 'A website to showcase my projects and technologies that I have worked with.',
  tags: [t.vue, t.tailwindcss],
  images: ["portfolio.png"],
}

export const floslabs: Project = {
  title: 'FlosLabs.de Game Website',
  description: 'A website to easily play board games with friends online.',
  sourceCode: "https://github.com/Schmidii99/Brettspiele.io",
  url: "https://floslabs.de",
  cover: "floslabs.jpeg",
  tags: [t.vue, t.redis, t.deno, t.docker, t.nginx],
  images: ["floslabs1.jpeg", "floslabs3.jpeg", "floslabs2.jpeg", 'floslabs4.jpeg', "floslabs5.jpeg"],
  markdownFile: "floslabs.md",
}

export const kleinanzeigenPlus: Project = {
  title: 'Kleinanzeigen Plus',
  description: 'A desktop app of the german website "Kleinanzeigen" with extra features.',
  tags: [t.sveltekit, t.tauri, t.rust, t.tailwindcss, t.sqlite],
  images: ["kp1.png", "kp2.png", "kp3.png", "kp4.png", "kp5.png", "kp6.png", "kp7.png"],
}

export const mandelbrot: Project = {
  title: 'Mandelbrot in C++',
  description: 'A desktop app displaying the Mandelbrot set using C++ and SFML.',
  tags: [t.cpp, t.sfml, t.conan, t.cmake],
  images: ["mandelbrot1.png", "mandelbrot2.png", "mandelbrot3.png", "mandelbrot4.png", "mandelbrot5.png"],
  sourceCode: "https://github.com/Schmidii99/Cpp_Mandelbrot"
}

export const tetris: Project = {
  title: 'Tetris in WinForms',
  tags: [t.csharp],
  description: '',
  sourceCode: "https://github.com/Schmidii99/WindowsForms-Tetris",
  images: ["tetris1.png", "tetris2.png", "tetris3.png"]
}

export const higherLower: Project = {
  title: 'Higher Lower Game with Processors',
  description: 'A higher lower game to better learn how good different processors are.',
  tags: [t.typescript],
  sourceCode: "https://github.com/Schmidii99/CpuHigherLower",
  url: "https://icaotix.github.io",
  images: ["hl1.png", "hl2.png", "hl3.png"]
}

export const pokedex: Project = {
  title: 'Pokedex app',
  description: 'I used this project to learn SvelteKit by building a simple Pokedex app. For the data I used a public api.',
  tags: [],
}

export const trainingsDary: Project = {
  title: 'Trainings Diary app in Java',
  description: '',
  tags: [t.java, t.postgres],
}

export const eloCompare: Project = {
  title: 'Elo Comparison Tool',
  description: 'Elo Comparison Tool to self host using docker compose.',
  tags: [t.docker, t.fastapi, t.python, t.vue, t.tailwindcss],
  url: "selfhosted",
  sourceCode: "https://github.com/Schmidii99/EloCompare",
  images: ["elo1.png", "elo2.png", "elo3.png", "elo4.png", "elo5.png"],
  cover: "elocompare.png",
}

export const ultimateTicTacToe: Project = {
  title: 'Ultimate Tic Tac Toe Game',
  description: 'Ultimate tic tac toe game in java to train a neural network and learn about reinforcement learning',
  tags: [],
  images: ["utt1.png", "utt2.png", "utt3.png", "utt4.png", "utt5.png"]
}

export const rplace: Project = {
  title: 'Reddit Place 2023',
  description: 'Dataanalysis for Reddit Place 2023 event.',
  tags: [],
  images: ["r-place1.webp", "r-place1.png"]
}

/*export const discordBot: Project = {
  title: 'Discord Bot',
  description: '',
  tags: [],
}*/