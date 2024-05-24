<template>
  <div>
    <nav class="w-full fixed top-0 z-20 bg-white dark:bg-gray-800 shadow">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between">
          <div class="flex lg:px-16">
            <div class="flex-shrink-0 my-6 font-bold ">
              <a href="/" class="text-white text-[20px] ">
                <h1>Ndiene<span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Tshivhase</span></h1>
              </a>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Primary Navigation Links -->
              <a href="/" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Home
              </a>
              <a href="#about-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                About
              </a>
              <a href="#skills-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Skills
              </a>
              <a href="#experience-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Experience
              </a>
              <a href="#projects-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Projects
              </a>
              <a href="#contact-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Contact
              </a>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center px-16">
            <button href="../assets/resume/ndienetshivhase.pdf" download class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800">
              Download Resume
            </button>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button @click.stop="toggleMenu" class="bg-gray-200 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <svg v-if="!isOpen" class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              <!-- Icon when menu is open. -->
              <svg v-else class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <transition name="slide-fade">
        <div v-show="isOpen" class="sm:hidden" @click.stop>
          <div class="pt-2 pb-3 space-y-1">
            <a href="/" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500" @click="closeMenu">
              Home
            </a>
            <a href="#about-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500" @click="closeMenu">
              About
            </a>
            <a href="#skills-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500" @click="closeMenu">
              Skills
            </a>
            <a href="#experience-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500" @click="closeMenu">
              Experience
            </a>
            <a href="#projects-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500" @click="closeMenu">
              Projects
            </a>
            <a href="#contact-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500" @click="closeMenu">
              Contact
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    handleOutsideClick(event) {
      // Close the menu if clicked outside of it
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.closeMenu();
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
};
</script>

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
