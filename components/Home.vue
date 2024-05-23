<template>
  
  <section class="relative max-h-screen bg-gray-100 dark:bg-gray-100 overflow-hidden" id="home-section">
  <!-- Square Pattern Background -->
  <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/square-grid.png')] bg-repeat opacity-10 z-0"></div>

  <!-- Hero -->
  <div class="relative z-10 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-10 before:transform before:-translate-x-1/2">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div class="border shadow-lg py-20 rounded-lg bg-white bg-opacity-80 relative">
        <!-- Title -->
        <div class="mt-5 max-w-3xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-700">
            Hi<br>
            <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">I'm Ndiene Tshivhase</span>
            <br>
            <span class="font-normal text-3xl">A Full Stack Software Developer</span>
          </h1>
        </div>
        <!-- End Title -->

        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-neutral-400">I specialize in creating dynamic and responsive web applications, leveraging the power of modern technologies to build efficient and scalable solutions.</p>
        </div>

        <!-- Buttons -->
        <div class="mt-8 gap-3 flex justify-center">
          <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="#projects-section">
            View My Work
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <a class="inline-flex justify-center items-center gap-x-3 text-center bg-white text-gray-800 dark:text-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 border border-gray-300 dark:border-neutral-600 text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="#contact-section">
            Contact Me
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
          </a>
        </div>
        <!-- End Buttons -->
      </div>
    </div>
  </div>
  <!-- End Hero -->
</section>


</template>