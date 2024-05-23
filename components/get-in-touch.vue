<template>
   <section id="contact-section" class="py-16 bg-gray-100 dark:bg-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Contact Section -->
    <div>
      <div class="py-2 relative">
          <h2 class="text-6xl font-bold text-gray-200 absolute inset-x-0 top-0 z-0 text-center">Contact Me</h2>
        <!-- Foreground Heading -->
        <h2 class="text-4xl font-bold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-400 text-transparent relative text-center mb-8 z-10">
          Contact Me
        </h2>
        </div>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Contact Form -->
        <div class="w-full md:w-1/2">
          <form>
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-800">Name</label>
              <input type="text" id="name" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-neutral-300" required>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-800">Email</label>
              <input type="email" id="email" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-neutral-300" required>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-800">Message</label>
              <textarea id="message" rows="4" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-neutral-700 dark:text-neutral-300" required></textarea>
            </div>
            <div>
              <button type="submit" class="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800">Send Message</button>
            </div>
          </form>
        </div>
        <!-- End Contact Form -->
        
        <!-- Contact Info -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h3 class="text-2xl font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-400 text-transparent  mb-4">Get in Touch</h3>
          <p class="text-lg text-gray-700 dark:text-gray-800 mb-4">I'm available for freelance work or full-time positions. Feel free to reach out to me through the form, or directly via email or phone.</p>
          <p class="text-lg text-gray-700 dark:text-gray-800 mb-2"><strong>Email:</strong> ndienetshivhase@gamil.com</p>
          <p class="text-lg text-gray-700 dark:text-gray-800"><strong>Phone:</strong> +27 606 677 165</p>
        </div>
        <!-- End Contact Info -->
      </div>
    </div>
    <!-- End Contact Section -->
  </div>
</section>

</template>