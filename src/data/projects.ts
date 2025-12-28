import type Project from '@/types/Project.ts'
import * as t from '@/data/tags.ts'

export const protfolioTemplate: Project = {
  title: 'Portfolio Website',
  description: 'A website to showcase my projects and technologies that I have worked with.',
  tags: [t.vue, t.tailwindcss],
  images: ["portfolio.png"],
  sourceCode: "https://github.com/Schmidii99/portfolioWebsite"
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
  featured: true
}

export const kleinanzeigenPlus: Project = {
  title: 'Kleinanzeigen Plus',
  description: 'A desktop app of the german website "Kleinanzeigen" with extra features.',
  tags: [t.sveltekit, t.tauri, t.rust, t.tailwindcss, t.sqlite],
  images: ["kp1.png", "kp2.png", "kp3.png", "kp4.png", "kp5.png", "kp6.png", "kp7.png", "kp8.png", "kp9.png", "kp10.png",
           "kp11.png"],
  featured: true,
  markdownFile: "kleinanzeigenplus.md"
}

export const mandelbrot: Project = {
  title: 'Mandelbrot in C++',
  description: 'A desktop app displaying the Mandelbrot set using C++ and SFML.',
  tags: [t.cpp, t.sfml, t.conan, t.cmake],
  cover: "mandelbrot1.png",
  sourceCode: "https://github.com/Schmidii99/Cpp_Mandelbrot",
  markdownFile: "https://raw.githubusercontent.com/Schmidii99/Cpp_Mandelbrot/refs/heads/main/README.md"
}

export const tetris: Project = {
  title: 'Tetris in WinForms',
  tags: [t.csharp, t.dotnet],
  description: 'Tetris game made with Windows Forms in C#.',
  sourceCode: "https://github.com/Schmidii99/WindowsForms-Tetris",
  images: ["tetris1.png", "tetris2.png", "tetris3.png"]
}

export const higherLower: Project = {
  title: 'Higher Lower Game with Processors',
  description: 'A higher lower game to better learn how good different processors are.',
  tags: [t.typescript],
  sourceCode: "https://github.com/Schmidii99/CpuHigherLower",
  url: "https://icaotix.github.io",
  images: ["hl1.png", "hl2.png", "hl3.png"],
  markdownFile: "cpuhigherlower.md"
}

export const pokedex: Project = {
  title: 'Pokedex app',
  description: 'I used this project to learn SvelteKit by building a simple Pokedex app. For the data I used a public api.',
  tags: [],
  images: ["pokedex1.png", "pokedex2.png", "pokedex3.png"],
  sourceCode: "https://github.com/Schmidii99/pokedex-sveltekit"
}

export const trainingsDary: Project = {
  title: 'Trainings Diary app in Java',
  description: '',
  tags: [t.java, t.postgres],
  sourceCode: "https://github.com/Schmidii99/TrainingsDiary/tree/main",
  images: ["td1.png", "td2.png", "td3.png", "td4.png"]
}

export const eloCompare: Project = {
  title: 'Elo Comparison Tool',
  description: 'Elo Comparison Tool to self host using docker compose.',
  tags: [t.docker, t.fastapi, t.python, t.vue, t.tailwindcss],
  url: "selfhosted",
  sourceCode: "https://github.com/Schmidii99/EloCompare",
  cover: "elocompare.png",
  markdownFile: "https://raw.githubusercontent.com/Schmidii99/EloCompare/refs/heads/main/README.md",
  featured: true
}

export const ultimateTicTacToe: Project = {
  title: 'Ultimate Tic Tac Toe Game',
  description: 'Ultimate tic tac toe game in c# using WinForms.',
  tags: [],
  images: ["utt1.png", "utt2.png", "utt3.png", "utt4.png", "utt5.png"],
  sourceCode: "https://github.com/Schmidii99/TicTacToe-Ultimate"
}

export const rplace: Project = {
  title: 'Reddit Place 2023',
  description: 'Dataanalysis for Reddit Place 2023 event.',
  tags: [t.python, t.sqlite],
  images: ["r-place1.webp", "r-place2.png"],
  sourceCode: "https://github.com/Schmidii99/redditPlace2023",
  markdownFile: "rPlace.md",
}

/*export const discordBot: Project = {
  title: 'Discord Bot',
  description: '',
  tags: [],
}*/