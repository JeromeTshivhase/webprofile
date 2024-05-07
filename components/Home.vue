<template>
  <section>
    <div class="relative bg-gray-400 min-h-screen text-white overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <img src="../assets/img/hero2.jpg" alt="Background Image" class="object-cover object-center w-full h-full zoom-animation" />
        <div></div>
      </div>

      <div class="relative py-52 flex flex-col justify-center items-center text-center px-5">
        <h5 class="text-3xl font-extralight">Welcome</h5>
        <h1 class="mt-3 text-6xl font-extralight leading-tight mb-4">I'm <span class="text-teal-400">Ndiene</span> Tshivhase </h1>
        <div class=" bg-teal-400 rounded-full">
          <p class="text-lg inline-block px-4 py-2 font-semibold">Diploma in IT | Software Development & Web Developer | Data Scientist</p>
        </div>
        <div class="mt-5">
          <a href="#getintouch-section" class="border border-teal-400 hover:bg-teal-600 font-semibold text-lg text-white inline-block px-10 py-3 rounded-full">Hire Me!</a>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // Your component logic goes here
}
</script>

<style scoped>
/* Your component-specific styles go here */
.zoom-animation {
  animation: zoom-in 10s ease-in-out infinite alternate;
}

@keyframes zoom-in {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
