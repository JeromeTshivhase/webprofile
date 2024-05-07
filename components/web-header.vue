<template>
  <div>
    <nav id="navbar" class="fixed top-0 flex w-full z-50 items-center justify-between sm:h-16 md:justify-center my-0 ">
      <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="/" aria-label="Home" class="flex items-center px-10">
            <img src="../assets/logo.png" alt="Logo" class="h-16 w-16 "> <!-- Replace 'logo.png' with your logo file -->
          </a>
          <div class="mr-5 flex items-center md:hidden">
            <button type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" class="inline-flex items-center justify-center p-2 rounded-md text-gray-950 hover:text-teal-500 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-teal-500 transition duration-150 ease-in-out">
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:flex md:space-x-10 text-2xl">
        <a href="#about-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">About</a>
        <a href="#skills-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">Skills</a>
        <a href="#experience-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">Experience</a>
        <a href="#projects-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">Projects</a>
        <a href="#getintouch-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">Get-In-Touch</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  mounted() {
    
    const navbar = document.getElementById('navbar');
    
  
    window.addEventListener('scroll', function() {
    
      const scrollY = window.scrollY || window.pageYOffset;
      
      if (scrollY > 0) {
        navbar.classList.add('blurred');
      } else {
        navbar.classList.remove('blurred');
      }
    });
  }
}
</script>

<style>

.blurred {
  backdrop-filter: blur(30px);
}
#navbar {
  background-color: rgba(143, 143, 143, 0.5); 
}
</style>
