<template>
  <section id="projects-section" class="bg-white dark:bg-gray-100 py-16">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center">
        <div class="relative">
          <h2 class="text-6xl font-bold text-gray-200 absolute inset-x-0 top-0 z-0 text-center">projects</h2>
          <!-- Foreground Heading -->
          <h2 class="text-4xl font-bold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-400 text-transparent relative text-center mb-8 z-10">
            Projects
          </h2>
        </div>
        <p class="mt-2 text-lg text-gray-600 dark:text-neutral-400">
          A showcase of my latest work and collaborations
        </p>
      </div>
      <!-- End Section Title -->

      <div class="border shadow-lg p-5 rounded-lg">
        <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Project Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div class="w-full h-48">
              <img class="w-full h-full object-cover" src="../assets/projects/1.png" alt="Project 1">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">Nike Commercial Site</h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Developed an e-commerce site for Nike with a user-friendly interface, secure payment integration, and responsive design using React, Node.js, and MongoDB.
              </p>
              <a href="https://github.com/TshivhaseNdiene/commercial-site" class="mt-4 inline-flex items-center text-blue-400 dark:text-blue-600 hover:underline">
                Visit my gitHub for more
                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </a>
            </div>
          </div>
          <!-- End Project Card -->

          <!-- Project Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div class="w-full h-48">
              <img class="w-full h-full object-cover" src="../assets/projects/musicplayer.jpg" alt="Project 2">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">Music Player</h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Created a music player app with features like playlist creation, shuffle, repeat, and dark mode. Built with Flutter and integrated with Firebase for real-time database management.
              </p>
              <a href="#" class="mt-4 inline-flex items-center text-blue-400 dark:text-blue-600 hover:underline">
              Visit my GitHub for more
                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </a>
            </div>
          </div>
          <!-- End Project Card -->

          <!-- Project Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div class="w-full h-48">
              <img class="w-full h-full object-cover" src="../assets/projects/todo.jpg" alt="Project 3">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">Todo App</h3>
              <p class="mt-2 text-gray-600 dark:text-neutral-400">
                Developed a Todo app with task categorization, due dates, and notifications. Built with Vue.js and Node.js, featuring a clean, intuitive UI.
              </p>
              <a href="https://github.com/TshivhaseNdiene/todo-app/tree/feat/new-feature" class="mt-4 inline-flex items-center text-blue-400 dark:text-blue-600 hover:underline">
                Visit my GitHub for more
                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </a>
            </div>
          </div>
          <!-- End Project Card -->

          <!-- Add more project cards as needed -->
        </div>
      </div>
    </div>
  </section>
</template>