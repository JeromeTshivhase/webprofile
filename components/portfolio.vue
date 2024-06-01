<template>
  <section id="projects-section" class="bg-gray-100 dark:bg-gray-100 py-16">
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
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-700">
          A showcase of my latest work and collaborations
        </p>
      </div>
      <!-- End Section Title -->

      <div class="border shadow-lg p-10 rounded-lg">
        <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Project Card -->
        <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl group">
          <div class="w-full h-72">
            <img class="w-full h-full object-cover" src="../assets/projects/1.png" alt="Nike Commercial Site">
          </div>
          <div class="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-white">Nike Commercial Site</h3>
              <p class="mt-4 text-gray-300">
                Developed an e-commerce site for Nike with a user-friendly interface, secure payment integration, and responsive design using React, Node.js, and MongoDB.
              </p>
              <a href="https://github.com/TshivhaseNdiene/commercial-site" class="mt-4 inline-flex items-center text-blue-400 hover:underline">
                Visit my GitHub for more
                <svg class="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- End Project Card -->

        <!-- Project Card -->
        <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl group">
          <div class="w-full h-72">
            <img class="w-full h-full object-cover" src="../assets/projects/registration-system.png" alt="Registration System With QR Code">
          </div>
          <div class="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-white">Registration System With QR Code</h3>
              <p class="mt-4 text-gray-300">
                Developed a robust registration system with QR code functionality for seamless event management and attendance tracking. Built with Java and Spring Boot, and integrated with MS SQL Server for reliable database management.
              </p>
              <a href="https://github.com/TshivhaseNdiene/Registration-System-with-QR-code" class="mt-4 inline-flex items-center text-blue-400 hover:underline">
                Visit my GitHub for more
                <svg class="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- End Project Card -->

        <!-- Project Card -->
        <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl group">
          <div class="w-full h-72">
            <img class="w-full h-full object-cover" src="../assets/projects/todo.jpg" alt="Todo App">
          </div>
          <div class="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-white">Todo App</h3>
              <p class="mt-4 text-gray-300">
                Developed a Todo app with task categorization, due dates, and notifications. Built with Vue.js and Node.js, featuring a clean, intuitive UI.
              </p>
              <a href="https://github.com/TshivhaseNdiene/todo-app" class="mt-4 inline-flex items-center text-blue-400 hover:underline">
                Visit my GitHub for more
                <svg class="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- End Project Card -->

        <!-- Add more project cards as needed -->
      </div>
      </div>
    </div>
  </section>
</template>

<style>
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>
